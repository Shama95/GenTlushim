import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const MultiDatePicker = ({
  dateFormat = "dd/MM/yyyy", // A date format to be picked and displayed(one of: "yyyy","MM/yyyy" or "dd/MM/yyyy")
  pickerText = "Click to select a date", // The text displayed in the text box before picking any date
  minDate = NaN, // A Date object with the minimal date the user will be able to pick, default is no limitation
  maxDate = NaN, // A Date object with the maximal date the user will be able to pick, default is no limitation
  sendSelectedDate, // A function to propagte the data back to parent object
}) => {
  const [pickerDate, setPickerDate] = useState(null);

  function ValidateFormat(format) {
    return format === "yyyy" || format === "MM/yyyy" || format === "dd/MM/yyyy";
  }

  if (!ValidateFormat(dateFormat)) return; //crash in case the date format is not supported
  return (
    <DatePicker
      selected={pickerDate}
      onChange={(date) => {
        setPickerDate(date);
        sendSelectedDate(date);
      }}
      dateFormat={dateFormat}
      showYearPicker={dateFormat === "yyyy"}
      showMonthYearPicker={dateFormat === "MM/yyyy"}
      placeholderText={pickerText}
      minDate={minDate}
      maxDate={maxDate}
    />
  );
};

export default MultiDatePicker;
