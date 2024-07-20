import React, {useState} from "react";

const StateTutorial2 = () => {
    const[inputValue, setInputValue] = useState("Sahil");

    const onChange = (event) => {
        const newValue= event.target.value;
        setInputValue(newValue);
    }

    return (
        <div>
            <input placeholder="Enter Something" onChange={onChange} />{inputValue}
        </div>
    )
}




export default StateTutorial2;