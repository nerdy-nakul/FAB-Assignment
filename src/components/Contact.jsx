import React, { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/Auth";
import Popup from "./Popup";

const Contact = ({ setCardOpen, setFeedbackOpen, setSelectedCard }) => {
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
          <Popup
            message={`Thanks for reaching out to us! We will get back to you as soon as possible`}
          />
        )}
      </div>
      <div className="p-4 bg-white shadow-md rounded-md w-96">
        <h4 className="text-lg text-center">
          Get in{" "}
          <span className="text-black font-semibold">Contact with us </span>for
          your
        </h4>
        <h4 className="text-lg text-center">queries!</h4>
        <div className="h-px bg-gray-200 mb-4"></div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <label htmlFor="name" className="mb-2 font-medium">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your Name"
            className="mb-4 p-2 border border-gray-300 rounded"
          />

          {!isLoggedIn && (
            <div className="mb-4">
              <label htmlFor="email" className="mb-2 font-medium">
                Enter your email<sub className="text-red-600">*</sub>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your Email"
                required
                className="mb-4 p-2 border border-gray-300 rounded w-full"
              />

              <label htmlFor="mobile" className="mb-2 font-medium">
                Enter your Mobile Number<sub className="text-red-600">*</sub>
              </label>
              <input
                type="tel"
                name="mobile"
                placeholder="Enter your Mobile Number"
                required
                className="p-2 border border-gray-300 rounded w-full"
              />
            </div>
          )}

          <label htmlFor="issue" className="mb-2 font-medium">
            What would you like to ask?<sub className="text-red-600">*</sub>
          </label>
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

          <div>
            <button
              type="submit"
              className={`w-full p-2 rounded ${
                textContent.length > 0
                  ? "bg-black text-white"
                  : "bg-gray-300 text-gray-600"
              }`}
              disabled={textContent.length === 0}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
