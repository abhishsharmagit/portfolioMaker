import { Injectable } from "@nestjs/common";
import axios, { AxiosRequestConfig } from "axios";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import * as fs from "fs";
import { filePayload } from "src/helper/config";
import {
  FileEntity,
  RepoEntity,
  PortfolioEntity,
  User,
  IUser,
} from "../../../entities/src";
import {
  CreateFileDTO,
  CreateRepoDTO,
  DeployPortfolioDTO,
  IcreatePortfolioDTO,
} from "../../../dtos/src";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(FileEntity)
    private fileRepository: Repository<FileEntity>,
    @InjectRepository(PortfolioEntity)
    private portfolioRepo: Repository<PortfolioEntity>,
    @InjectRepository(RepoEntity)
    private repoRepository: Repository<RepoEntity>
  ) {}

  async getUser(id: string): Promise<IUser | undefined> {
    try {
      const user = await this.userRepository.findOne({
        id,
      });
      return (
        user && {
          id: user.id,
          githubId: user.githubId,
          username: user.username,
        }
      );
    } catch (e) {
      console.log(e.message);
    }
  }

  async createRepo(dto: CreateRepoDTO, id: string) {
    try {
      const user = await this.userRepository.findOne(id);

      const config: AxiosRequestConfig = {
        method: "POST",
        data: dto,
        headers: {
          Authorization: `Bearer ${await this.getToken(id)}`,
          "Content-Type": "application/json",
        },
      };
      const repo: any = await axios(
        "https://api.github.com/user/repos",
        config
      );

      const payload = {
        repoName: dto.name,
        user: user,
      };
      const repoEntity = await this.repoRepository.create(payload);
      await this.repoRepository.save(repoEntity);
      console.log("repocreatedherrererererere");
      return repo.data;
    } catch (e) {
      console.log(e.message, "repoerror");
    }
  }

  async checkRepoExist(
    username: string,
    repoName: string
  ): Promise<boolean | undefined> {
    try {
      const existingRepo = await this.repoRepository.findOne({
        repoName: repoName,
      });
      console.log(repoName, "repoName");
      const repo = await axios(
        `https://api.github.com/users/${username}/repos`
      );
      console.log(existingRepo, "existingrepo");
      const exist = repo.data.filter((data) => {
        return data.name === repoName;
      });
      console.log(exist, "exist");
      if (existingRepo && exist.length > 0) {
        console.log(1);
        return true;
      } else if (existingRepo && !exist) {
        console.log(2);
        await this.repoRepository.delete({ repoName });
        return false;
      } else {
        console.log(3);
        return false;
      }
    } catch (e) {
      console.log(e, "checkrepoeror");
    }
  }

  async createFile(id: string, dto: CreateFileDTO, repoName: string) {
    try {
      const user: User | undefined = await this.userRepository.findOne(id);
      const fileExist = await this.fileRepository.findOne({
        fileName: dto.fileName,
        repoName: repoName,
      });

      const params = {
        owner: user?.username,
        repo: repoName,
        path: dto.path,
      };
      const content = fs.readFileSync(
        `${process.cwd()}/dist/${dto.readPath}`,
        "binary"
      );
      console.log(1);
      const data = fileExist
        ? {
            message: dto.message,
            content: Buffer.from(content, "binary").toString("base64"),
            sha: fileExist.sha,
          }
        : {
            message: dto.message,
            content: Buffer.from(content, "binary").toString("base64"),
          };

      const config: AxiosRequestConfig = {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${await this.getToken(id)}`,
        },
        data: data,
      };

      const createdfile: any = await axios(
        `https://api.github.com/repos/${params.owner}/${params.repo}/contents/${params.path}`,
        config
      );
      console.log(2);
      const payload = {
        fileName: createdfile.data.content.name,
        sha: createdfile.data.content.sha,
        repoName: repoName,
        user: user,
      };
      if (!fileExist) {
        const fileEntity = await this.fileRepository.create(payload);
        await this.fileRepository.save(fileEntity);
      } else {
        await this.fileRepository.update({ id: fileExist.id }, payload);
      }

      return createdfile.data;
    } catch (e) {
      console.log(e, "fileerror");
    }
  }

  async getToken(id: string) {
    try {
      const user = await this.userRepository.findOne({ id });
      return user?.token;
    } catch (e) {
      console.log(e.message, "tokenerror");
    }
  }

  async createPortfolio(dto: IcreatePortfolioDTO, id: string) {
    try {
      fs.writeFileSync(
        `${process.cwd()}/dist/${dto.template}/js/credentials.json`,
        JSON.stringify(dto)
      );
      const user: User | undefined = await this.userRepository.findOne(id);

      const repoPayload: CreateRepoDTO = {
        name: dto.portfolio,
        description: "my portfolio",
        homepage: "https://github.com",
        private: false,
        has_issues: true,
        has_projects: true,
        has_wiki: true,
      };
      console.log(repoPayload, "repopayload");

      const checkRepoExist =
        user && (await this.checkRepoExist(user.username, repoPayload.name));
      if (!checkRepoExist) {
        await this.createRepo(repoPayload, id);
      }

      const files = filePayload(dto.template, dto.imageName, dto.resumeName);
      console.log(files, "files");
      for (const file of files) {
        await this.createFile(id, file, repoPayload.name);
      }
      const githubPage = await this.getGithubPage(repoPayload.name, id);

      if (githubPage) {
        return githubPage;
      } else {
        return await this.deployPortfolio(id, repoPayload.name);
      }
    } catch (e) {
      console.log(e);
    }
  }

  async deployPortfolio(id: string, repoName: string) {
    const user: User | undefined = await this.userRepository.findOne(id);

    const params: DeployPortfolioDTO | undefined = user && {
      owner: user.username,
      repo: repoName,
    };
    const data = {
      source: {
        branch: "main",
        path: "/",
      },
    };

    const config: AxiosRequestConfig = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${await this.getToken(id)}`,
      },
      data: data,
    };
    const result: any = await axios(
      `https://api.github.com/repos/${params?.owner}/${params?.repo}/pages`,
      config
    );
    const payload = {
      url: result.data.html_url,
      user: user,
      repoName: params?.repo,
    };
    const portfolioEntity = await this.portfolioRepo.create(payload);
    await this.portfolioRepo.save(portfolioEntity);
    return `${result.data.html_url}`;
  }

  async getGithubPage(repo: string, id: string) {
    try {
      const user = await this.userRepository.findOne(id);
      const config: AxiosRequestConfig = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${await this.getToken(id)}`,
        },
      };

      const page: any = await axios(
        `https://api.github.com/repos/${user?.username}/${repo}/pages`,
        config
      );
      return page.data.html_url;
    } catch (e) {
      console.log(e.message);
    }
  }
}
