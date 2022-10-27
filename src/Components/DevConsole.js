

import React from "react";
import Button from "./Button";

function DevConsole(props) {

return (
    <>
      <div className="w-110 bg-white-darker rounded-xl flex flex-col justify-center items-center shadow-2xl">
        <span className="text-3xl text-blue-dark text-center mt-20">Developer Console</span>
        <form className="p-20 pt-10 w-98 flex flex-col">
        <Button
            classOverride="bg-white-darker text-orange-default px-3 border-orange-default border-2 w-1/2"
            type="button"
            text="Start Logs"
            handleClick={props.startLogs}
          />
          </form>
    </div>
    </>
        
 );

}

export default DevConsole;

