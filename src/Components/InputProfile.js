import React, { useState } from "react";

function Input(props) {
  const [state, setState] = useState({
    value: props.value,
  });

  const handleChange = (e) => {
    setState(() => ({
      value: e.target.value
    }));

    props.onChange(e);
  };

  return (
    <>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor={props.for}
        >
          {props.label}
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id={props.id}
          type={props.type}
          placeholder={props.placeholder}
          value={state.value}
          onChange={handleChange}
        />
      </div>
    </>
  );
}

export default Input;
