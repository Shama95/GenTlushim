import react, { useState } from "react";
import RestrictedTextInput from "./RestrictedTextInput";
import Dropdown from "./Dropdown";
import MultiDatePicker from "./MultiDatePicker";
import ConditionalButton from "./ConditionalButton";
import * as Constants from "../../Constants";
import VisualizeTlush from "./VisualizeTlush";

const Tofes = ({ formType, minDate, maxDate }) => {
  const [personalNumber, setPersonalNumber] = useState("");
  const [population, setPopulation] = useState(Constants.populationsDict[0]);
  const [date, setDate] = useState(new Date());
  const [data, setData] = useState({});

  const ResetForm = () => {
    setPersonalNumber("");
    setPopulation(Constants.populationsDict[0]);
    setDate(new Date()); //This doesnt work for some reason
    setData({});
  };

  const SubmitForm = () => {
    const tlush_data = {
      formType: formType,
      personalNumber: personalNumber,
      population: population,
      date: date,
    };
    setData(tlush_data);
  };

  return (
    <div className="ui container">
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VisualizeTlush data={data} />
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
