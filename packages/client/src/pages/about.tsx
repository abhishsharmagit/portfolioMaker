import React from "react";

const about = () => {
  return (
    <div className="flex flex-col mx-20">
      <div className="mx-auto text-center text-5xl font-extrabold mt-20 mb-20">
        About Me
      </div>
      <p className="text-center text-2xl mx-auto text-gray-400">
        Hi i am <span className="text-3xl font-extrabold text-green-500">Abhishek</span> a full
        stack developer! Currently working in web applications using some stack
        for frontend and backned i.e. ReactJS, NodeJs, ExpresJS, NestJS, MongoDB
        etc.
      </p>
      <div className="flex flex-row mt-20 mx-auto">
        <a
          className="rounded-full bg-red-400 px-5 py-3 text-2xl cursor-pointer mr-10"
          href="https://github.com/abhishsharmagit"
          target={"_blank"}
        >
          My Github
        </a>
        <a className="rounded-full bg-red-400 px-5 py-3 text-2xl cursor-pointer ml-10">
          Linkedin
        </a>
      </div>
    </div>
  );
};

export default about;
