
import { useCallback, useState } from "react";
import Child from "./Child";


export default function CallBackTutorial () {
    const [toggle, setToggle] =useState(false);
    const [data, setData] = useState("yo, pls sub to the chanel !");

   const returnComment = useCallback((name) => {
    return data +name
   }, [data]
   );

    return (
        <div className="App">
            <Child returnComment={returnComment} />

            <button 
                onClick={() => 
                    {setToggle(!toggle)
                }}
            >
                {" "}
                Toggle
            </button>
            {toggle && <h1>toggle</h1>}
        </div>
    )
}

//It is having child.js file , use it for the reference