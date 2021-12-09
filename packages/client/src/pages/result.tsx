import type { NextPage } from "next";
import { useAppSelector } from "../store";

const Result: NextPage = () => {
  const user: string = useAppSelector((state) => state.user.portfolioUrl);

  return (
    <>
      <p className="mx-auto text-3xl items-center text-center text-white py-10">
        Here is your portfolio Link
        <span className="text-xl">
          (if link is not working, open link in another browser window or
          refresh after sometime!)
        </span>
      </p>
      {user && (
        <a href={`${user}`} target={"_blank"} rel="noreferrer">
          <button className="mx-auto text-xl flex rounded-full items-center focus:outline-none outline-none border-none font-poppins border pl-8 pr-8 py-2 font-semibold bg-green-500 hover:bg-blue-500">
            Go to Portfolio
          </button>
        </a>
      )}
    </>
  );
};

export default Result;
