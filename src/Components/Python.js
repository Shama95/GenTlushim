import React, { useState } from "react";
import RestrictedTextInput from "./Utils/RestrictedTextInput";
import Dropdown from "./Utils/Dropdown";
import MultiDatePicker from "./Utils/MultiDatePicker";
import ConditionalButton from "./Utils/ConditionalButton";

const Python = () => {
  const [personalNumber, setPersonalNumber] = useState();
  const populations = [
    { key: "hova", value: "HV" },
    { key: "keva", value: "KV" },
    { key: "ezrahim", value: "EZ" },
    { key: "miluim", value: "ML" },
  ];
  const [population, setPopulation] = useState(populations[0]);
  var today = new Date();
  var MM = (today.getMonth() + 1 < 10 ? "0" : "") + (today.getMonth() + 1);
  const lastMM = (today.getMonth() < 10 ? "0" : "") + today.getMonth();
  const year = today.getFullYear();
  const time = MM + "/" + year;
  const lastYear = year - 1;
  const lastTime = lastMM + "/" + lastYear;
  const [date, setDate] = useState(time);

  return (
    <div>
      <RestrictedTextInput
        label="personal number"
        placeholderText="9999999"
        data={personalNumber}
        onDataChange={setPersonalNumber}
        regexRestriction="^\d{3,9}(,\d{3,9})*$"
        lengthRestriction="-1"
      />
      <Dropdown
        label="population"
        options={populations}
        selected={population}
        onSelectedChange={setPopulation}
      />
      <MultiDatePicker
        dateFormat="MM/yyyy"
        minDate={new Date(lastYear, today.getMonth() + 1)}
        maxDate={new Date(year, today.getMonth() + 1)}
        sendSelectedDate={setDate}
      />
      <div className="ui buttons">
        <button className="ui button" onClick={() => {}}>
          Go!
        </button>
      </div>
    </div>
  );
};
export default Python;
