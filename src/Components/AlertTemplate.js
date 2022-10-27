import React from "react";

function AlertTemplate({ message, options, close }) {
  let containerStyle = "text-white-default px-6 py-4 border-0 rounded relative mb-4 w-screen top-16 pointer-events-auto h-16";
  if(options.type === 'success') {
    containerStyle += " bg-emerald-default";
  } else if (options.type === 'error') {
    containerStyle += " bg-red-default";
  } else if (options.type === 'warning') {
    containerStyle += " bg-amber-default";
  } else {
    containerStyle += " bg-indigo-default";
  }

  return (
    <>
      <div className={containerStyle} onClick={close}>
        <span className="inline-block align-middle mr-8" id="banner-message">
          {message}
        </span>
        <button onClick={close} className="absolute bg-transparent text-2xl leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none">
          x
        </button>
      </div>
    </>
  );
}

export default AlertTemplate;
