import React, { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/Auth";
import Popup from "./Popup";

const ReportIssue = ({ setCardOpen, setFeedbackOpen, setSelectedCard }) => {
  const { isLoggedIn } = useContext(AuthContext);

  const [textContent, setTextContent] = useState("");
  const [popupOpen, setPopupOpen] = useState(false);

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
          <Popup
            message={`Thanks for bringing the issue to our attention. We'll review it shortly and provide an update soon!`}
          />
        )}
      </div>
      <div className="p-4 bg-white rounded-md w-96">
        <h4 className="text-lg text-center">
          Let us know about the <span className=" font-semibold">Issue</span>
        </h4>
        <h4 className="text-lg mb-4 text-center">you are facing right now!</h4>
        <div className="h-px bg-gray-200 mb-4"></div>
        <form className="relative flex flex-col" onSubmit={handleSubmit}>
          <label htmlFor="section" className="mb-2 font-medium">
            Choose a Section
          </label>
          <select
            name="section"
            id="section"
            className="mb-4 p-2 border border-gray-300 rounded"
          >
            <option value="">Interview Questions</option>
            <option value="">Concept Cards</option>
            <option value="">Practice Questions</option>
            <option value="">Quizzes</option>
          </select>

          <label htmlFor="issue" className="mb-2 font-medium">
            Describe the issue in detail{" "}
            <sup className="text-red-600 text-sm">*</sup>
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
                <sup className="text-red-600 text-sm">*</sup>
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

export default ReportIssue;
