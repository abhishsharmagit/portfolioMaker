import router from "next/router";
import React, { useState } from "react";
import Card from "../component/Card";
import Template1 from "../component/Templates/Template1";
import Template2 from "../component/Templates/Template2";

const template = () => {
  const [preview, setPreview] = useState<boolean>(false);
  const [template, setTemplate] = useState<string>("");

  return (
    <div>
      {!preview ? (
        <div className="mx-7">
          <div className="bg-white p-8 pr-12 rounded-lg">
            <div className="font-poppins text-3xl text-center font-semibold mb-7 pt-10">
              Choose Template For Portfolio
            </div>
            <div className="flex mx-auto justify-between">
              <div className="ml-5">
                <Card
                  heading="Template 1"
                  src="/template1.png"
                  buttonText="Visit Help Center"
                  handleClick={() => {
                    router.push("/template1");
                  }}
                  handlePreview={() => {
                    setPreview(true);
                    setTemplate("template1");
                  }}
                />
              </div>
              <div className="mr-5">
                <Card
                  heading="Template 2"
                  src="/template2.png"
                  buttonText="Contact Support"
                  handleClick={() => {
                    router.push("/template2");
                  }}
                  handlePreview={() => {
                    setPreview(true);
                    setTemplate("template2");
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col">
          <div className="flex bg-red-100">
            <button
              type="button"
              value="Preview"
              onClick={() => setPreview(!preview)}
              className=" my-5 mx-auto text-xl flex rounded-full items-center focus:outline-none outline-none border-none font-poppins border pl-8 pr-8 py-2 font-semibold bg-red-200"
            >
              Back to form
            </button>
            <button
              type="button"
              value="Create"
              onClick={() => router.push(template)}
              className=" my-5 mx-auto text-xl flex rounded-full items-center focus:outline-none outline-none border-none font-poppins border pl-8 pr-8 py-2 font-semibold bg-red-200"
            >
              Create Portfolio
            </button>
          </div>
          {template === "template1" ? <Template1 /> : <Template2 />}
        </div>
      )}
    </div>
  );
};

export default template;
