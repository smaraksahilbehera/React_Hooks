import React, {useRef} from "react";

function RefTutorial () {

    const inputRef = useRef(null);

    const onClick = () => {
        inputRef.current.value= "";
    };
    return (
        <div>
            <h1>Sahil</h1>
            <input type="text" placeholder="Ex..." ref={inputRef}></input>
            <button onClick={onClick}>Change Name</button>
        </div>
    );
}

export default RefTutorial;