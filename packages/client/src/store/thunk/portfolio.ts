import { AppDispatch } from "..";
import { portfolioService } from "../../service";
import { ICheckRepoDTO } from "../../types";
import {
  checkRepoExistStart,
  checkRepoExistSuccess,
  getPortfolioByIdError,
  getPortfolioByIdStart,
  getPortfolioByIdSuccess,
} from "../slice/portfolio";

export const getPortfolioById =
  (id: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(getPortfolioByIdStart());
      const data = await portfolioService.getPortfolioById(id);
      dispatch(getPortfolioByIdSuccess(data));
    } catch (error) {
      dispatch(getPortfolioByIdError(error));
    }
  };

export const checkRepoExist =
  (repoName: string) => async (dispatch: AppDispatch) => {
    try {
      const dto: ICheckRepoDTO = {
        repoName,
      };
      dispatch(checkRepoExistStart());
      const user = await portfolioService.checkRepoExist(dto);
      console.log(user);
      dispatch(checkRepoExistSuccess(user));
    } catch (error) {
      //todo : handle this error
    }
  };
