import {
  createPortfolioStart,
  createPortfolioSuccess,
  fetchUserByIdSuccess,
} from "../slice/user";
import { AppDispatch } from "../index";
import { userService } from "../../service";
import { IcreatePortfolioDTO } from "../types";

export const getMe = (token: string) => async (dispatch: AppDispatch) => {
  try {
    const user = await userService.getMe(token);
    dispatch(fetchUserByIdSuccess(user));
  } catch (error) {
    //todo : handle this error
  }
};

export const createPortfolio =
  (dto: IcreatePortfolioDTO, image?: string, resume?: string) =>
  async (dispatch: AppDispatch) => {
    try {
      const imageData: FormData = new FormData();
      const resumeData: FormData = new FormData();
      image && imageData.append("file", image);
      resume && resumeData.append("resume", resume);
      dispatch(createPortfolioStart());
      console.log(imageData, "imagedata");
      const uploadImage = image && (await userService.uploadImage(imageData));
      const uploadResume =
        resume && (await userService.uploadResume(resumeData));
      const portfolio = await userService.createPortfolio(dto);
      dispatch(createPortfolioSuccess(portfolio));
    } catch (error) {
      //todo : handle this error
    }
  };
