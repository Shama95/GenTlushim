import React from "react";

const ConditionalButton = ({
  leftText, // Text to be displayed on the grey button
  rightText, // Text to be displayed on the green button
  onLeftClick, // A funtion to trigger when the grey(left) option is chosen
  onRightClick, // A funtion to trigger when the green(right) option is chosen
}) => {
  return (
    <div className="ui buttons">
      <button className="ui button" onClick={() => onLeftClick()}>
        {leftText}
      </button>
      <div className="or"></div>
      <button className="ui positive button" onClick={() => onRightClick()}>
        {rightText}
      </button>
    </div>
  );
};

export default ConditionalButton;
