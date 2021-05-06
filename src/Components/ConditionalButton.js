import React from "react";

const ConditionalButton = ({ badText, goodText, onBadClick, onGoodClick }) => {
  return (
    <div className="ui buttons">
      <button className="ui button" onClick={() => onBadClick()}>
        {badText}
      </button>
      <div className="or"></div>
      <button className="ui positive button" onClick={() => onGoodClick()}>
        {goodText}
      </button>
    </div>
  );
};

export default ConditionalButton;
