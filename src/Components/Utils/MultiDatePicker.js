import React, { useState } from "react";
import { DatePicker } from "@material-ui/pickers";

const MultiDatePicker = ({
  dateFormat = "dd/MM/yyyy", // A date format to be picked and displayed(one of: "yyyy","MM/yyyy" or "dd/MM/yyyy")
  placeholderText = "Click to select a date", // The text displayed in the text box before picking any date
  minDate = NaN, // A Date object with the minimal date the user will be able to pick, default is no limitation
  maxDate = NaN, // A Date object with the maximal date the user will be able to pick, default is no limitation
  sendSelectedDate, // A function to propagte the data back to parent object(a setState function from useState)
}) => {
  const [pickerDate, setPickerDate] = useState(new Date());

  function ValidateFormat(format) {
    return format === "yyyy" || format === "MM/yyyy" || format === "dd/MM/yyyy";
  }

  function FormatToViews(format) {
    let views = [];
    if (format === "yyyy") views = ["year"];
    if (format === "MM/yyyy") views = ["year", "month"];
    if (format === "dd/MM/yyyy") views = ["year", "month", "date"];
    return views;
  }

  if (!ValidateFormat(dateFormat)) return; //crash in case the date format is not supported
  return (
    <DatePicker
      autoOk
      format={dateFormat}
      views={FormatToViews(dateFormat)}
      variant="inline"
      label={placeholderText}
      value={pickerDate}
      onChange={(date) => {
        setPickerDate(date);
        sendSelectedDate(date);
      }}
      minDate={minDate}
      maxDate={maxDate}
    />
  );
};

export default MultiDatePicker;
