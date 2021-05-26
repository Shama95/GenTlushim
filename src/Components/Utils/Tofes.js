import react, { useState } from "react";
import RestrictedTextInput from "./RestrictedTextInput";
import Dropdown from "./Dropdown";
import MultiDatePicker from "./MultiDatePicker";
import ConditionalButton from "./ConditionalButton";
import * as Constants from "../../Constants";

import tempPic from "../../images/temp.jpg";

const Tofes = ({ formType, minDate, maxDate }) => {
  const [personalNumber, setPersonalNumber] = useState("");
  const [population, setPopulation] = useState(Constants.populationsDict[0]);
  const [date, setDate] = useState(new Date());

  const ResetForm = () => {
    setPersonalNumber("");
    setPopulation(Constants.populationsDict[0]);
    setDate(new Date()); //This doesnt work for some reason
  };

  const SubmitForm = () => {
    console.log("Date is " + date);
    console.log("Population is " + population.value);
    console.log("Personal Number is " + personalNumber);
  };

  return (
    <div className="ui container">
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <img className="ui fluid image" src={tempPic} alt="pic" />
          </div>
          <div className="five wide column">
            <div style={{ marginBottom: ".5rem" }}>
              <RestrictedTextInput
                label="Enter Personal Number"
                placeholderText="Some ID..."
                data={personalNumber}
                onDataChange={setPersonalNumber}
                regexRestriction="^[0-9]*$"
                lengthRestriction="9"
              />
            </div>

            <div style={{ marginBottom: ".5rem" }}>
              {formType === Constants.formsEnum.FORM_161 ? null : (
                <Dropdown
                  label="Select a Population"
                  options={Constants.populationsDict}
                  selected={population}
                  onSelectedChange={setPopulation}
                />
              )}
            </div>
            <div style={{ marginBottom: ".5rem" }}>
              <MultiDatePicker
                dateFormat={
                  formType ===
                  (!Constants.formsEnum.FORM_161 &&
                    !Constants.formsEnum.FORM_TLUSH)
                    ? "yyyy"
                    : "MM/yyyy"
                }
                placeholderText="Select a Date"
                minDate={minDate}
                maxDate={maxDate}
                sendSelectedDate={setDate}
              />
            </div>
            <div style={{ marginBottom: ".5rem" }}>
              <ConditionalButton
                leftText="Reset"
                rightText="Search"
                onLeftClick={ResetForm}
                onRightClick={SubmitForm}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tofes;
