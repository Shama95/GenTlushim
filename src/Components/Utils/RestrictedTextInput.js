import React from "react";

const RestrictedTextInput = ({
  label = "Restricted Text Input", // A label to be displayed above the input bar
  placeholderText = "Placeholder...", // Text to be displayed while theres no text in the textbox
  data, // Part of a state - the value; to keep track of the select option and its value
  onDataChange, // Part of a state - the update function; to keep track of the select option and its value
  regexRestriction = "^[0-9]*$", // String of regex to restrict the input
  lengthRestriction = 9, // Length restriction for the input
  type = "input",
}) => {
  const regex = new RegExp(`${regexRestriction}`);
  return (
    <div className="ui input">
      <div className="ui form">
        <div className="field">
          <label className="label">{label}</label>
          {
            (type==="input")?
          <input
            placeholder={placeholderText}
            maxLength={lengthRestriction}
            type="text"
            value={data}
            onChange={(e) => {
              //make sure to only handle numeric values
              if (regex.test(e.target.value)) {
                onDataChange(e.target.value); //e is shortcut for event
              }
            }}
          />
          :
          (type==="area")?
          <textarea
            placeholder={placeholderText}
            maxLength={lengthRestriction}
            type="text"
            value={data}
            onChange={(e) => {
              //make sure to only handle numeric values
              if (regex.test(e.target.value)) {
                onDataChange(e.target.value); //e is shortcut for event
              }
            }}
          />
          :
          <input /// default
          placeholder={placeholderText}
          maxLength={lengthRestriction}
          type="text"
          value={data}
          onChange={(e) => {
            //make sure to only handle numeric values
            if (regex.test(e.target.value)) {
              onDataChange(e.target.value); //e is shortcut for event
            }
          }}
        />
          }
        </div>
      </div>
    </div>
  );
};

export default RestrictedTextInput;
