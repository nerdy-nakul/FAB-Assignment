import React from "react";
import ReportIssue from "./ReportIssue";
import ShareFeedback from "./ShareFeedback";
import Suggestion from "./Suggestion";
import Contact from "./Contact";

const FeedbackCard = ({
  selectedCard,
  setCardOpen,
  setFeedbackOpen,
  setSelectedCard,
}) => {
  // Render the appropriate component based on the selected card
  const renderSelectedCard = () => {
    switch (selectedCard) {
      case "reportIssue":
        return (
          <ReportIssue
            setCardOpen={setCardOpen}
            setFeedbackOpen={setFeedbackOpen}
            setSelectedCard={setSelectedCard}
          />
        );
      case "feedback":
        return (
          <ShareFeedback
            setCardOpen={setCardOpen}
            setFeedbackOpen={setFeedbackOpen}
            setSelectedCard={setSelectedCard}
          />
        );
      case "suggestion":
        return (
          <Suggestion
            setCardOpen={setCardOpen}
            setFeedbackOpen={setFeedbackOpen}
            setSelectedCard={setSelectedCard}
          />
        );
      case "contact":
        return (
          <Contact
            setCardOpen={setCardOpen}
            setFeedbackOpen={setFeedbackOpen}
            setSelectedCard={setSelectedCard}
          />
        );
      default:
        return null;
    }
  };

  return renderSelectedCard();
};

export default FeedbackCard;
