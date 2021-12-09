export type FORM = {
  firstName: string;
  portfolio: string;
  profile: string;
  email: string;
  description: string;
  about: string;
  inTouch: string;
  address: string;
  phone: string;
  template: string;
  imageName: string;
  resumeName: string;
};

export type IPortfolio = {
  id: string;
  url: string;
  repoName?: string;
};
export type IUser = {
  id: string;
  username: string;
  githubId: string;
};
export interface ICheckRepoDTO {
  repoName: string;
}
