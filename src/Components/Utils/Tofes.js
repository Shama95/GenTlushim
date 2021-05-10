import react, { useState } from "react";
import RestrictedTextInput from "./RestrictedTextInput";
import Dropdown from "./Dropdown";
import MultiDatePicker from "./MultiDatePicker";
import ConditionalButton from "./ConditionalButton";
import * as Constants from "../../Constants";

import tempPic from "../../images/temp.jpg";

const Tofes = ({ formType }) => {
  const [personalNumber, setPersonalNumber] = useState("");
  const [population, setPopulation] = useState(populationsDict[0]);
  const [date, setDate] = useState(new Date());

  const minDate = new Date(1993, 1, 1);
  const maxDate = calcMaxDate(new Date());

  function calcMaxDate(date) {
    var month = date.getMonth();
    var year = date.getFullYear();
    year = month === 11 ? year++ : year;
    var maxdate = new Date(year, month + 2, 0); //putting zero at the day gives the max day of the previous month
    return maxdate;
  }

  const ResetForm = () => {
    setPersonalNumber("");
    setPopulation(populationsDict[0]);
    setDate(new Date()); //This doesnt work for some reason
  };

  const SubmitForm = () => {
    console.log("Date is " + date);
    console.log("Population is " + population.value);
    console.log("Personal Number is " + personalNumber);
  };

  if (formType === formsEnum.FORM_TLUSH) {
    // whatever
  }
  return (
    <div className="ui container">
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <img class="ui fluid image" src={tempPic} alt="pic" />
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
              <Dropdown
                label="Select a Population"
                options={populationsDict}
                selected={population}
                onSelectedChange={setPopulation}
              />
            </div>
            <div style={{ marginBottom: ".5rem" }}>
              <MultiDatePicker
                dateFormat={
                  formType === formsEnum.FORM_TLUSH ? "dd/MM/yyyy" : "MM/yyyy"
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
