import React, { useState } from "react";
import { AuthContext } from "../context/Auth";
import { useContext } from "react";
import Popup from "./Popup";

const Suggestion = ({ setCardOpen, setFeedbackOpen, setSelectedCard }) => {
  const [textContent, setTextContent] = useState("");
  const [popupOpen, setPopupOpen] = useState(false);
  const { isLoggedIn } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPopupOpen(true);
    setTimeout(() => {
      setPopupOpen(false);
      setCardOpen(false);
      setFeedbackOpen(false);
      setSelectedCard("");
    }, 3000);
  };

  return (
    <div className="flex flex-col gap-2">
      <div>
        {popupOpen && (
          <Popup message={`Thanks for your valuable Suggestion!`} />
        )}
      </div>
      <div className="p-4 bg-white shadow-md rounded-md w-96">
        <h4 className="text-lg text-center">
          Share your{" "}
          <span className="text-black font-semibold">Suggestions </span>
          with us
        </h4>
        <h4 className="text-lg text-center">for a chance to earn rewards!</h4>
        <div className="h-px bg-gray-200 mb-4"></div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <label htmlFor="section" className="mb-2 font-medium">
            Choose a Section
          </label>
          <select
            name="section"
            id="section"
            className="mb-4 p-2 border border-gray-300 rounded"
          >
            <option value="">Select</option>
          </select>

          <label htmlFor="issue" className="mb-2 font-medium">
            Describe the suggestion in detail
            <sub className="text-red-600">*</sub>
          </label>
          <div className="flex flex-col relative">
            <textarea
              name="issue"
              id="issue"
              cols="30"
              rows="5"
              required
              placeholder="Write here..."
              className="mb-4 p-2 border border-gray-300 rounded"
              onChange={(e) => setTextContent(e.target.value)}
            ></textarea>
            <label
              htmlFor="file-input"
              className="mb-2 py-2 absolute bottom-4 left-2 px-4 border border-gray-300 rounded cursor-pointer w-20"
            >
              <span className="mb-2">Attach</span>
              <input
                type="file"
                id="file-input"
                name="file"
                className="hidden"
              />
            </label>
          </div>

          {!isLoggedIn && (
            <div className="mb-4">
              <label htmlFor="email" className="mb-2 font-medium">
                Enter your email to receive an update
                <sub className="text-red-600">*</sub>
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your Email"
                required
                className="p-2 border border-gray-300 rounded w-full"
              />
            </div>
          )}
          <button
            type="submit"
            className={`${
              textContent.length > 0
                ? "bg-black text-white"
                : "bg-gray-300 text-gray-600"
            } p-2 rounded mt-4`}
            disabled={textContent.length === 0}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Suggestion;
