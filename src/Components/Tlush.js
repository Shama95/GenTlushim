import React, { useState } from "react";
import MultiDatePicker from "./Utils/MultiDatePicker";
import RestrictedTextInput from "./Utils/RestrictedTextInput";
import Tofes from "./Utils/Tofes";
import * as Constants from "../Constants";

const Tlush = () => {
  /*
  const [tlushDate, setTlushDate] = useState(null);
  const [text, setText] = useState(null);
  const minDate = new Date(1993, 1, 1);
  const maxDate = calcMaxDate(new Date());

  function calcMaxDate(date) {
    var month = date.getMonth();
    var year = date.getFullYear();
    year = month === 11 ? year++ : year;
    var maxdate = new Date(year, month + 2, 0); //putting zero at the day gives the max day of the previous month
    return maxdate;
  }
  
  //console.log(tlushDate);
  return (
    <div>
      <MultiDatePicker
        dateFormat="dd/MM/yyyy"
        placeholderText="Select a date"
        minDate={minDate}
        maxDate={maxDate}
        sendSelectedDate={setTlushDate}
      />
      <RestrictedTextInput data={text} onDataChange={setText} />
    </div>
  );
  */
  return (
    <div>
      <Tofes formType={formsEnum.FORM_106} />
    </div>
  );
};
export default Tlush;
