import React from "react";

type Props = {
  heading: string;
  buttonText: string;
  src: string;
  handleClick: (event: React.MouseEvent<HTMLElement>) => void;
  handlePreview: (event: React.MouseEvent<HTMLElement>) => void;
};

const Card: React.FC<Props> = ({
  heading,
  handlePreview,
  src,
  handleClick,
}) => {
  return (
    <div className="border border-gray-300 rounded-md bg-gray-50 text-center px-14 pt-11 pb-10 w-80">
      <div className="w-max m-auto">{}</div>
      <div className="text-lg font-semibold mt-4 pb-2.5 font-poppins">
        {heading}
      </div>
      <img className="mb-8 font-poppins" src={src} />
      <button
        type="button"
        onClick={handlePreview}
        className="text-base mr-3 font-poppins rounded-full border-green-700 bg-green-700 hover:bg-blue-500 text-white border-2 px-5 py-1 focus:outline-none"
      >
        Preview
      </button>
      <button
        type="button"
        onClick={handleClick}
        className="text-base ml-3 font-poppins rounded-full border-green-700 bg-green-700 hover:bg-blue-500 text-white border-2 px-5 py-1 focus:outline-none"
      >
        Next
      </button>
    </div>
  );
};

export default Card;
