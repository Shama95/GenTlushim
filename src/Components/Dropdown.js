import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({
  label, // A label to be displayed above the Dropdown
  options, // A dictionary with pairs of keys and values to display
  selected, // Part of a state - the value; to keep track of the select option and its value
  onSelectedChange, // Part of a state - the update function; to keep track of the select option and its value
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      //checks if the DOM element that triggered the event is contained in ref(dropdown's ui form div)
      if (ref.current && ref.current.contains(event.target)) {
        //prevent setting open to false because then setOpen of the dropdown will change it to !false
        return;
      }
      setOpen(false);
    };

    document.body.addEventListener("click", onBodyClick);

    return () => {
      document.body.removeEventListener("click", onBodyClick);
    };
  }, []);

  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null;
    }

    return (
      <div
        key={option.value}
        className="item"
        onClick={() => onSelectedChange(option)}
      >
        {option.key}
      </div>
    );
  });

  return (
    <div className="ui dropdown">
      <div ref={ref} className="ui form">
        <div className="field">
          <label className="label">{label}</label>
          <div
            onClick={() => setOpen(!open)}
            className={`ui selection dropdown ${open ? "visible active" : ""}`}
          >
            <i className="dropdown icon"></i>
            <div className="text">{selected.key}</div>
            <div className={`menu ${open ? "visible transition" : ""}`}>
              {renderedOptions}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
