import React, {useLayoutEffect, useEffect, useRef} from "react";

function LayoutEffectTutorial () {
    const inputRef = useRef(null);

    useLayoutEffect (() => {
        console.log(inputRef.current.value);
    }, []);

    useEffect (() => {
        inputRef.current.value = "HELLO"
    }, []);

    return (
        <div className="App">
            <input ref={inputRef} value="SAHIL" style={{width:400, height: 300}}></input>
        </div>
    );
}

export default LayoutEffectTutorial;
