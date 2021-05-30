import React from "react";
import Tofes from "./Utils/Tofes";
import * as Constants from "../Constants";

const T161 = () => {
  const minDate = new Date(1993, 1, 1);
  const maxDate = calcMaxDate(new Date());

  function calcMaxDate(date) {
    var month = date.getMonth();
    var year = date.getFullYear();
    year = month === 11 ? year++ : year;
    var maxdate = new Date(year, month + 2, 0); //putting zero at the day gives the max day of the previous month
    return maxdate;
  }

  return (
    <div>
      <Tofes
        formType={Constants.formsEnum.FORM_161}
        minDate={minDate}
        maxDate={maxDate}
      />
    </div>
  );
};
export default T161;
