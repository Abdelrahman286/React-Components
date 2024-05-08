import React, { useState } from "react";
import Dropdown from "../components/Dropdown";

const DropdownPage = () => {
  const [selection, setSelection] = useState(null);

  const handleSelection = (option) => {
    console.log(option.value);
    setSelection(option);
  };
  const dropdownOptions = [
    { label: "red", value: "red" },
    { label: "blue", value: "blue" },
    { label: "pink", value: "pink" },
  ];

  return (
    <Dropdown
      onChange={handleSelection}
      options={dropdownOptions}
      value={selection}
    ></Dropdown>
  );
};

export default DropdownPage;
