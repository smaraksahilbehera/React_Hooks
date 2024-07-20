import React, {useState} from 'react';

const StateTutorial = () => {
    const[counter, setCounter] = useState(0)

    const increment = () => {
        setCounter(counter+1)
    }
    const decrement =() => {
        setCounter(counter-1)
    }
    
    return (
        <div>
            {counter}
            <br />
            <button onClick={increment}>Increment</button>
            <br />
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}

export default StateTutorial;