import React from "react";

const RestrictedTextInput = ({
  label, // A label to be displayed above the input bar
  personalNumber, // Part of a state - the value; to keep track of the select option and its value
  onNumberChange, // Part of a state - the update function; to keep track of the select option and its value
  regexRestriction, // String of regex to restrict the input
  lengthRestriction, // Length restriction for the input
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
