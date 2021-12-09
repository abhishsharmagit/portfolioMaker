import axios, { AxiosRequestConfig } from "axios";
import cookie from "js-cookie";
import { ICheckRepoDTO, IPortfolio } from "../types";

const getPortfolioById = async (id: string): Promise<IPortfolio[]> => {
  const config: AxiosRequestConfig = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
    data: { id },
  };
  const user = await axios(
    `${process.env.BACKEND_URL}/getPortfolioById`,
    config
  );
  console.log(user.data, "portfolios");
  return user.data;
};

const checkRepoExist = async (dto: ICheckRepoDTO): Promise<boolean> => {
  const config: AxiosRequestConfig = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
    data: dto,
  };
  const repoExist = await axios(`${process.env.BACKEND_URL}/repoExist`, config);
  console.log(repoExist.data, "repoexistdata");
  return repoExist.data;
};

const getToken = () => {
  return cookie.get("token");
};

export default {
  getPortfolioById,
  checkRepoExist,
};
