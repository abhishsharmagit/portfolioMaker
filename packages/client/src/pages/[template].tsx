import type { NextPage } from "next";
import Router, { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store";
import { FORM } from "../types";
import { EntityLoadingState } from "../store/types";
import Template1 from "../component/Templates/Template1";
import Template2 from "../component/Templates/Template2";
import { createPortfolio } from "../store/thunk/user";
import Input from "../component/Input";
import { checkRepoExist } from "../store/thunk/portfolio";

const Form: NextPage = () => {
  const dispatch = useAppDispatch();
  const [preview, setPreview] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [image, setImage] = useState<any>();
  const [resume, setResume] = useState<any>();
  const [formValue, setFormValue] = useState<FORM>({
    firstName: "",
    portfolio: "",
    profile: "developer",
    email: "",
    description: "",
    about: "",
    inTouch: "",
    address: "",
    phone: "",
    template: "",
    imageName: "",
    resumeName: "",
  });
  const portfolioUrl: string = useAppSelector(
    (state) => state.user.portfolioUrl
  );
  const usersState = useAppSelector<any>((state) => state.user.loading);
  const repoExist: boolean = useAppSelector(
    (state) => state.portfolio.repoExist
  );
  const handleFieldChange = (value: string | boolean | File, key: string) => {
    setFormValue({ ...formValue, [key]: value });
  };
  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(createPortfolio(formValue, image, resume));
  };
  const router = useRouter();

  useEffect(() => {
    const template = router.query.template as string;
    handleFieldChange(template, "template");
    portfolioUrl && Router.push("/result");
  }, [portfolioUrl]);

  useEffect(() => {
    console.log(formValue.portfolio);
    dispatch(checkRepoExist(formValue.portfolio));
  }, [formValue.portfolio]);

  return (
    <>
      {!preview ? (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-10">
          <div
            className="
          flex flex-col
          bg-white
          shadow-md
          px-4
          sm:px-6
          md:px-8
          lg:px-10
          py-8
          rounded-3xl
          max-w-3xl
        "
          >
            <div className="font-medium self-center text-xl sm:text-3xl text-gray-800">
              Enter your details
            </div>

            <div className="mt-10">
              <form onSubmit={submitForm}>
                <div className="flex flex-row justify-between">
                  <Input
                    required={true}
                    type="text"
                    value={formValue.firstName}
                    placeholder="enter your name"
                    label="First Name"
                    onChange={(value) => handleFieldChange(value, "firstName")}
                  />
                  <div className="flex flex-col">
                    <Input
                      required={true}
                      value={formValue.portfolio}
                      type="text"
                      label="Potfolio Name"
                      name="portfolioName"
                      placeholder="Your Portfolio Repo Name.."
                      onChange={(value) => {
                        handleFieldChange(value, "portfolio");
                      }}
                    />
                    {repoExist ? (
                      <span className="text-red-500">
                        Portfolio {formValue.portfolio} is already exist! you
                        can update it
                      </span>
                    ) : (
                      <span className="text-green-500">
                        {formValue.portfolio &&
                          `Portfolio name ${formValue.portfolio} is available`}
                      </span>
                    )}
                  </div>
                </div>

                <label
                  htmlFor="description"
                  className="mb-1 text-xs tracking-wide text-gray-600"
                >
                  Profile
                </label>
                <select
                  id="profile"
                  name="profile"
                  value={formValue.profile}
                  onChange={(event) =>
                    handleFieldChange(event.target.value, "profile")
                  }
                  className="my-5 w-full h-11 p-2 border px-6 rounded-lg mt-3 border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent"
                >
                  <option value="Developer">Developer</option>
                  <option value="Designer">Designer</option>
                  <option value="Devops">Devops</option>
                </select>
                <div className="flex flex-row justify-between">
                  <Input
                    type="text"
                    label="email"
                    name="email"
                    value={formValue.email}
                    placeholder="Your Email.."
                    onChange={(value) => handleFieldChange(value, "email")}
                  />
                  <Input
                    type="text"
                    label="phone"
                    value={formValue.phone}
                    name="phone"
                    placeholder="Your phone.."
                    onChange={(value) => handleFieldChange(value, "phone")}
                  />
                </div>
                <label
                  htmlFor="description"
                  className="mb-1 text-xs tracking-wide text-gray-600"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  placeholder="Write something.."
                  onChange={(event) =>
                    handleFieldChange(event.target.value, "description")
                  }
                  className="
                  text-sm
                  placeholder-gray-500
                  pl-10
                  pr-4
                  rounded-2xl
                  border border-gray-400
                  w-full
                  py-2
                  focus:outline-none focus:border-blue-400
                "
                ></textarea>

                <label className="mb-1 text-xs tracking-wide text-gray-600">
                  About Me
                </label>
                <textarea
                  id="about"
                  name="about"
                  placeholder="Write something about urself.."
                  onChange={(event) =>
                    handleFieldChange(event.target.value, "about")
                  }
                  className="my-5 w-full h-11 p-2 border px-6 rounded-lg mt-3 border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent"
                ></textarea>

                <label className="mb-1 text-xs tracking-wide text-gray-600">
                  Get In touch (column)
                </label>
                <textarea
                  id="inTouch"
                  name="inTouch"
                  placeholder="write something ..."
                  onChange={(event) =>
                    handleFieldChange(event.target.value, "inTouch")
                  }
                  className="my-5 w-full h-11 p-2 border px-6 rounded-lg mt-3 border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent"
                ></textarea>

                <Input
                  type="text"
                  label="Address"
                  value={formValue.address}
                  name="address"
                  placeholder="Your address.."
                  onChange={(value) => handleFieldChange(value, "address")}
                />
                <div className="flex flex-row justify-between">
                  <label
                    className="mb-1 text-xs tracking-wide text-gray-600"
                    htmlFor="customFile"
                  >
                    Upload Image
                  </label>
                  <input
                    type="file"
                    className="
                              text-sm
                             placeholder-gray-500
                               pl-10
                                pr-4
                                rounded-2xl
                                border border-gray-400
                                w-full
                                py-2
                                focus:outline-none focus:border-blue-400
                                "
                    id="customFile"
                    accept="image/*"
                    onChange={(event) => {
                      setImage(event.target.files![0]);
                      handleFieldChange(
                        event.target.files![0].name,
                        "imageName"
                      );
                    }}
                  />

                  <label
                    className="mb-1 text-xs tracking-wide text-gray-600"
                    htmlFor="customFile"
                  >
                    Upload Resume
                  </label>
                  <input
                    type="file"
                    className="
                  text-sm
                  placeholder-gray-500
                  pl-10
                  pr-4
                  rounded-2xl
                  border border-gray-400
                  w-full
                  py-2
                  focus:outline-none focus:border-blue-400
                "
                    id="customFile"
                    accept="application/*"
                    onChange={(event) => {
                      setResume(event.target.files![0]);
                      handleFieldChange(
                        event.target.files![0].name,
                        "resumeName"
                      );
                    }}
                  />
                </div>
                {errorMsg && (
                  <span className="text-red-500 text-base">
                    Error: {errorMsg}
                  </span>
                )}
                <div className="flex">
                  <button
                    type="submit"
                    disabled={usersState === EntityLoadingState.PENDING}
                    className=" my-5 mx-auto text-xl flex rounded-full items-center focus:outline-none outline-none border-none font-poppins border pl-8 pr-8 py-2 font-semibold bg-green-500"
                  >
                    {usersState === EntityLoadingState.PENDING
                      ? "loading..."
                      : "Submit"}
                  </button>
                  <button
                    type="submit"
                    onClick={() => {
                      if (formValue.firstName && formValue.portfolio) {
                        setPreview(!preview);
                        setErrorMsg("");
                      } else {
                        setErrorMsg(
                          "Please fill firstname & portfolio column!"
                        );
                      }
                    }}
                    className=" my-5 mx-auto text-xl flex rounded-full items-center focus:outline-none outline-none border-none font-poppins border pl-8 pr-8 py-2 font-semibold bg-red-200"
                  >
                    Preview
                  </button>
                </div>
              </form>
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
              type="submit"
              value="Create"
              onClick={submitForm}
              disabled={usersState === EntityLoadingState.PENDING}
              className=" my-5 mx-auto text-xl flex rounded-full items-center focus:outline-none outline-none border-none font-poppins border pl-8 pr-8 py-2 font-semibold bg-red-200"
            >
              {usersState === EntityLoadingState.PENDING
                ? "loading..."
                : "Create Portfolio"}
            </button>
          </div>
          {formValue.template === "template1" ? (
            <Template1 value={formValue} image={image} />
          ) : (
            <Template2 value={formValue} image={image} />
          )}
        </div>
      )}
    </>
  );
};

export default Form;
