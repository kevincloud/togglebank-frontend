import React from "react";

function Dropdown(props) {
    
  return (
    <div className="mb-4 text-gray-sevenhundred">
      <div className="relative inline-block text-center w-full shadow">
      <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor={props.for}
        >
          {props.label}
        </label>
    <select 
      value={props.selectedOption} onChange={props.onChange }
      id="state"
      className="shadow appearance-none inline-flex w-full rounded border px-4 py-2 bg-white-default text-gray-sevenhundred leading-tight cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-70 focus-visible:ring-white-default focus-visible:ring-offset-orange-default focus-visible:border-blue-dark focus:shadow-outline"
    > 
    <option>Select state</option>
        {props.options && props.options.map((option,index) => (
          <option 
            key={index}
            disabled={option.unavailable}
            value={option.name}> 
            {option.name}
          </option>

        ))} 
    </select>
  </div>
  </div>
  );
}
export default Dropdown;
