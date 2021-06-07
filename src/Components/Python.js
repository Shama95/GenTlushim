import react, { useState } from "react";
import RestrictedTextInput from "./Utils/RestrictedTextInput";
import Dropdown from "./Utils/Dropdown";
import MultiDatePicker from "./Utils/MultiDatePicker";
import ConditionalButton from "./Utils/ConditionalButton";
import * as Constants from "../Constants";


const Python=()=>{
    var formType = NaN, minDate = NaN, maxDate = NaN
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
            </div>
            <div className="five wide column">
              <div style={{ marginBottom: ".5rem" }}>
                <RestrictedTextInput
                  label="Enter Personal Number"
                  placeholderText="Some ID..."
                  data={personalNumber}
                  onDataChange={setPersonalNumber}
                  regexRestriction="^[0-9]{1,9}(?:[ ,\n][0-9]{0,9})*$"
                  lengthRestriction="524288"
                  type="area"
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
                  dateFormat="MM/yyyy"
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
}
export default Python;