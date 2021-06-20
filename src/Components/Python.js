import react, { useState } from "react";
import RestrictedTextInput from "./Utils/RestrictedTextInput";
import Dropdown from "./Utils/Dropdown";
import MultiDatePicker from "./Utils/MultiDatePicker";
import ConditionalButton from "./Utils/ConditionalButton";
import * as Constants from "../Constants";
import './python.css';

import Image from '../resources/analysis.jpg'; // Import using relative path

const styles = {
  paperContainer: {
      backgroundImage: `url(${Image})`,
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      backgroundPosition: '50% 0%',
      backgroundSize: 'auto',
      opacity: '1',
  }
};



const Python=()=>{
    const minDate = new Date();
    minDate.setMonth(minDate.getMonth() + 1);
    minDate.setFullYear(minDate.getFullYear() - 1);
    const maxDate = new Date();
    const [personalNumbers, setPersonalNumbers] = useState("");
    const [population, setPopulation] = useState(Constants.populationsDict[0]);
    const [date, setDate] = useState(new Date());

    const ResetForm = () => {
        setPersonalNumbers("");
        setPopulation(Constants.populationsDict[0]);
        setDate(new Date()); 
      };
    
      const SubmitForm = () => {
        console.log("Date is " + date);
        console.log("Population is " + population.value);
        console.log("Personal Number is " + personalNumbers);
      };


    return (
      <div class='python'>
            <div 
                      style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexDirection: 'column',
                  }}>
              <div style={{ marginBottom: ".5rem" }}>
                <RestrictedTextInput
                  label="Enter Personal Number"
                  placeholderText="Some ID..."
                  data={personalNumbers}
                  onDataChange={setPersonalNumbers}
                  regexRestriction="^[0-9]{1,9}(?:[ ,\n][0-9]{0,9})*$"
                  lengthRestriction="524288"
                  type="area"
                />
              </div>
  
              <div style={{ marginBottom: ".5rem" }}>
                  <Dropdown
                    label="Select a Population"
                    options={Constants.populationsDict}
                    selected={population}
                    onSelectedChange={setPopulation}
                  />
              </div>
              <div style={{ marginBottom: ".5rem" }}>
                <MultiDatePicker
                  dateFormat="MM/yyyy"
                  placeholderText="Select a Month"
                  minDate={minDate}
                  maxDate={maxDate}
                  sendSelectedDate={setDate}
                />

              </div>
              <div style={{ marginBottom: ".5rem" }}>
                <ConditionalButton
                  leftText="Reset"
                  rightText="Run"
                  onLeftClick={ResetForm}
                  onRightClick={SubmitForm}
                />
              </div>
          </div>
      </div>
    );
}
export default Python;