import React, { useState } from "react";
import DatePicker from "react-datepicker";

const MultiDatePicker = ({
  dateFormat,
  pickerText,
  minDate,
  calcMaxDate,
  sendSelectedDate,
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
      maxDate={calcMaxDate(new Date())}
    />
  );
};

export default MultiDatePicker;
