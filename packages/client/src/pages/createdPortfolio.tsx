import { NextPage } from "next";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store";
import { getPortfolioById } from "../store/thunk/portfolio";
import { getMe } from "../store/thunk/user";
import cookie from "js-cookie";
import { IPortfolio } from "../types";

type TableHead = {
  id: string;
  portfolioName: string;
};

type TableBody = {
  id: string | number;
  portfolioName: string | undefined;
  portfolioLink: JSX.Element;
};

const createdPortfolio: NextPage = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector<any>(
    (state) => Object.values(state.user.entities)[0]
  );
  const portfolios: IPortfolio[] = useAppSelector(
    (state) => state.portfolio.portfolio
  );
  useEffect(() => {
    const token = cookie.get("token");
    //@ts-ignore
    user && dispatch(getPortfolioById(user.id));
    if (!user) {
      //@ts-ignore
      dispatch(getMe(token));
    }
  }, [user]);

  const tableHead: TableHead = {
    id: "S No.",
    portfolioName: "Portfolio Name",
  };

  const tableBody: TableBody[] = [...portfolios].reverse().map((data, id) => {
    return {
      id: id + 1,
      portfolioName: data.repoName,
      portfolioLink: (
        <a
          className="rounded-xl bg-blue-300 px-3 py-2"
          href={data.url}
          target={"_blank"}
        >
          Open Portfolio
        </a>
      ),
    };
  });

  return (
    <div>
      <p className="mx-auto text-3xl items-center text-center text-black py-10">
        Created Portfolios
      </p>
      <table className="mx-auto">
        <thead>
          <tr>
            {Object.values(tableHead).map((col, id) => {
              return (
                <th
                  key={id}
                  className="py-5 md:px-10 text-gray-700 tracking-wider text-left font-poppins text-sm"
                >
                  {col}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {tableBody.map((row: TableBody, id: number) => {
            return (
              <tr key={id} className="odd:bg-gray-100 even:bg-white-500">
                {Object.values(row).map((data, id: number) => {
                  return (
                    <th
                      key={id}
                      className="md:px-10 py-5 text-left font-inter text-base"
                    >
                      {data}
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default createdPortfolio;
