import React from "react";

const ConditionalButton = ({
  badText, // Text to be displayed on the grey button
  goodText, // Text to be displayed on the green button
  onBadClick, // A funtion to trigger when the grey(bad) option is chosen
  onGoodClick, // A funtion to trigger when the green(good) option is chosen
}) => {
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
