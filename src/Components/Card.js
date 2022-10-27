import React from "react";

function Card(props) {
  let defaultClass = "h-72 w-72 bg-blue-dark flex items-center justify-center rounded-md flex flex-col";
  let cardClass = props.classOverride ? defaultClass + " " + props.classOverride : defaultClass;
  return (
    <div className={cardClass}>
      <div className="h-48 flex flex-col items-center justify-around">
        <img src={props.img} className="h-10" alt=""/>
        <div className="flex flex-col font-semibold text-2xl text-white-light">
          <span>{props.header}:</span>
          <span>{props.text}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
