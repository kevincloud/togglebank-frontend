import React from "react";

function Button(props) {
  let base = "font-bold focus:outline-none focus:shadow-outline py-2 px-8 rounded-3xl"
  let defaultClass = "bg-orange-default text-white-default";
  let buttonClass = props.classOverride ? base + " " + defaultClass : base + " " + props.classOverride;

  return (
    <>
      <button
        id={props.id}
        className={buttonClass}
        type={props.type}
        onClick={props.handleClick}
      >
        {props.text}
      </button>
    </>
  );
}

export default Button;
