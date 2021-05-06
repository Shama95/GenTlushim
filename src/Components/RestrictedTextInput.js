import React from "react";

const RestrictedTextInput = ({
  label,
  personalNumber,
  onNumberChange,
  regexRestriction,
  lengthRestriction,
}) => {
  const regex = new RegExp(`${regexRestriction}`);
  return (
    <div className="ui input">
      <div className="ui form">
        <div className="field">
          <label className="label">{label}</label>
          <input
            placeholder="Some ID..."
            maxLength={lengthRestriction}
            type="text"
            value={personalNumber}
            onChange={(e) => {
              //make sure to only handle numeric values
              if (regex.test(e.target.value)) {
                onNumberChange(e.target.value); //e is shortcut for event
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default RestrictedTextInput;
