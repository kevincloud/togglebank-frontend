import React from "react";
import LinkIcon from '../img/link-icon.svg';

function TextLink(props) {
  let defaultClass = "inline-block align-baseline underline text-sm text-black-default hover:text-blue-dark";
  let textLinkClass = props.classOverride ? defaultClass + " " + props.classOverride : defaultClass;
  return (
    <>
      <div className="flex flex-row items-end">
        <button
          className={textLinkClass}
          href={props.href}
          id={props.id}
          onClick={props.handleClick}
        >
          {props.text}
        </button>
        <img src={LinkIcon} className="relative bottom-1 left-1" alt=""/>
      </div>
    </>
  );
}

export default TextLink;
