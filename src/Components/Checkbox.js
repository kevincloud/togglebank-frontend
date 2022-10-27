import React from "react";

function checkbox(props) {
  return (
    <>
      <div className="bg-gray-200 mb-4">
          <div className="flex flex-col ">
              <div className="flex flex-col">
                  <label className="inline-flex items-center mt-3">
                      <input
                        id={props.id}
                        type="checkbox"
                        className="h-5 w-5 text-gray-sevenhundred"
                        onChange={props.onChange}
                        checked={props.checked}
                      />
                         <span className="ml-2 text-gray-sevenhundred">
                             {props.text}
                          </span>
                  </label>
              </div>
          </div>
      </div>
    </>
  );
}

export default checkbox;
