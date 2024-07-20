import React, {useRef} from "react";
import Button from "./Button"

function ImperativeHandle () {
    const buttonRef= useRef(null);
    return (
        <div>
            <button onClick={() => {buttonRef.current.alterToggle();}}>Button from Parent</button>
            <Button ref={buttonRef}/>
        </div>
    );
}

export default ImperativeHandle;

//It is having Button.js file , use it for the reference 