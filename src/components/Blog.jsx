import React from "react";
import { IoMdInformationCircleOutline, IoMdEye } from "react-icons/io";

const Blog = () => {
  return (
    <div className=" bg-slate-100 shadow-md rounded-lg mx-60 p-8">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex flex-row justify-center items-center gap-2 ">
          <span className="text-black bg-blue-300 font-semibold p-1 text-lg rounded-md">
            Design
          </span>
          <span className="text-black bg-blue-300 font-semibold p-1 text-lg rounded-md">
            Technology
          </span>
        </div>
        <div className="">
          <img
            src={
              "https://res.cloudinary.com/dos2esitd/image/upload/v1718054266/h3kdoqbb1sbkoma1trkx.png"
            }
            alt="Company Type"
            width={60}
            height={60}
            className="w-25 h-25 object-cover"
          />
        </div>
      </div>
      <div>
        <p className="text-black font-semibold my-4">
          A travel startup wants Amazon to pre-install their personal travel
          agent bot on existing Amazon Echos. What is the value of the
          partnership to the travel startup?
        </p>
        <p className="text-black font-normal">
          Lorem ipsum dolor sit amet consectetur. Orci elementum aliquet nec
          viverra tincidunt? Amet ullamcorper velit tristique scelerisque donec
          sed viverra arcu. Amet arcu vitae sit scelerisque ultrices magna
          cursus se?
        </p>
      </div>
      <div className="flex justify-between items-center mt-4">
        <p className="flex items-center text-black text-sm gap-1">
          <IoMdEye className=" text-lg" />
          100 views
        </p>
        <p className="flex items-center text-black text-sm gap-1">
          <IoMdInformationCircleOutline className="text-lg" />
          How should you word your answer?
        </p>
      </div>
    </div>
  );
};

export default Blog;
