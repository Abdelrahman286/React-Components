import React, { useEffect, useRef, useState } from "react";
import { GoChevronDown } from "react-icons/go";
const Dropdown = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const dropdwonRef = useRef();
  useEffect(() => {
    const handler = (e) => {
      if (!dropdwonRef.current) {
        return;
      }
      if (!dropdwonRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handler, true);

    return () => {
      // remove without true capture
      document.removeEventListener("click", handler);
    };
  }, []);
  const handleClick = () => {
    // functional state update
    setIsOpen((current) => {
      return !current;
    });
  };

  const handleOptionClick = (option) => {
    // what option did user clcik on ?
    onChange(option);
    // close dropdown
    setIsOpen(false);
  };
  const renderedOptions = options.map((option) => {
    // send the whole option object, not the event
    return (
      <div
        className="input-option "
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={dropdwonRef} className="select-none w-48 relative">
      <div className="select-head" onClick={handleClick}>
        {value?.label || "Select..."}
        <GoChevronDown></GoChevronDown>
      </div>
      {isOpen && <div className="select-options"> {renderedOptions}</div>}
    </div>
  );
};

export default Dropdown;
