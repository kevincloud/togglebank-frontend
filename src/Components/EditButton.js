import React from "react";

function EditButton(props,saveMode) {
  let defaultClass = "bg-orange-default text-white-default font-bold py-2 px-8 rounded-3xl focus:outline-none focus:shadow-outline";
  let buttonClass = props.classOverride ? defaultClass + " " + props.classOverride : defaultClass;

  return (
    <>
      <button
        className={buttonClass}
        type={props.type}
        onClick={props.handleEdit}
      >
        {props.buttonText}
      </button>
    </>
  );
}

export default EditButton;
