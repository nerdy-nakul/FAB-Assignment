import React from "react";
import Blog from "../components/Blog";
import Review from "../components/Review";
import { FaArrowLeftLong } from "react-icons/fa6";
import Feedback from "../components/Feedback";

const Home = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col gap-6">
      <div className="flex gap-4 items-center pl-24 text-2xl mt-3 mb-6">
        <FaArrowLeftLong />
        <p>Back To Questions</p>
      </div>
      <div className="flex mx-60 justify-between">
        <p className=" text-xl font-bold">Answers (23)</p>
        <div>
          <label htmlFor="">Sort By: </label>
          <select
            name=""
            id=""
            className=" bg-white text-black border rounded pr-2"
          >
            <option value="">Populer</option>
          </select>
        </div>
      </div>
      <Blog />
      <Review />
      <Feedback />
    </div>
  );
};

export default Home;
