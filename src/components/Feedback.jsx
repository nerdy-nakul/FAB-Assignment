import React, { useState } from "react";
import FeedbackCard from "./FeedbackCard";
import { RxCross1 } from "react-icons/rx";
import { TfiWrite } from "react-icons/tfi";

const Feedback = () => {
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [cardOpen, setCardOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState("");

  const toggleFeedback = () => {
    setSelectedCard("");
    setFeedbackOpen(!feedbackOpen);
    setCardOpen(false);
  };

  const reportIssueToggle = () => {
    setSelectedCard("reportIssue");
    setCardOpen(true);
  };

  const feedbackToggle = () => {
    setSelectedCard("feedback");
    setCardOpen(true);
  };

  const suggestionToggle = () => {
    setSelectedCard("suggestion");
    setCardOpen(true);
  };

  const contactToggle = () => {
    setSelectedCard("contact");
    setCardOpen(true);
  };

  return (
    <div className="fixed bottom-1 right-1 p-4">
      <div className="text-black rounded-lg p-4 flex flex-col items-end">
        <FeedbackCard
          selectedCard={selectedCard}
          cardOpen={cardOpen}
          setCardOpen={setCardOpen}
          setFeedbackOpen={setFeedbackOpen}
          setSelectedCard={setSelectedCard}
        />

        {feedbackOpen && (
          <div
            className={`flex ${
              cardOpen ? "flex-row-reverse justify-between items-center" : ""
            }`}
          >
            <div className={`${cardOpen ? "hidden" : ""}`}>
              {[
                {
                  label: "Report an Issue",
                  action: reportIssueToggle,
                  imgSrc:
                    "https://res.cloudinary.com/dos2esitd/image/upload/v1718053237/gkuw96irblsvvr6n5mg5.png",
                  card: "reportIssue",
                },
                {
                  label: "Share Feedback",
                  action: feedbackToggle,
                  imgSrc:
                    "https://res.cloudinary.com/dos2esitd/image/upload/v1718053237/ddueoqnzxvfn6wucqs9k.png",
                  card: "feedback",
                },
                {
                  label: "Give Suggestion",
                  action: suggestionToggle,
                  imgSrc:
                    "https://res.cloudinary.com/dos2esitd/image/upload/v1718053237/v9ej2hqeer1xtrj9qjrr.png",
                  card: "suggestion",
                },
                {
                  label: "Contact Us",
                  action: contactToggle,
                  imgSrc:
                    "https://res.cloudinary.com/dos2esitd/image/upload/v1718053237/zzvi78wjmqnogiet0lgc.png",
                  card: "contact",
                },
              ].map(({ label, action, imgSrc, card }) => (
                <div className="flex items-center justify-end mb-2" key={label}>
                  <div className="bg-white block p-2 rounded text-black text-sm font-semibold mx-1">
                    {label}
                  </div>
                  <div
                    className={`${
                      selectedCard === card
                        ? "border border-white rounded-full"
                        : ""
                    }`}
                  >
                    <div
                      className=" bg-white w-fit  rounded-full flex justify-center items-center text-black p-2 cursor-pointer m-1"
                      onClick={action}
                    >
                      <img src={imgSrc} alt={label} className="h-5 w-5" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        <div
          className="mt-4 cursor-pointer flex justify-end items-end"
          onClick={toggleFeedback}
        >
          {feedbackOpen ? (
            <div className="flex justify-center items-center bg-white p-2 rounded-full">
              <RxCross1 className="text-xl text-black" />
              {/* <p>visible</p> */}
            </div>
          ) : (
            <p className="text-black text-xl bg-white p-2 flex justify-center items-center rounded-full">
              <TfiWrite />
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Feedback;
