import { useState } from "react";
import './Counter.css';

function Counter(){
    let [x,setX] = useState(0);
    return(
        <div className="counter-wrapper">
            <div className="background-wrapper">
                <div id="wrapper">
                    <h1>Count: {x}</h1>
                    <div id="counter-btn">
                        <button onClick={()=> setX(x+=1)} >Increment</button>
                        <button onClick={()=> setX(x-=1)} >Decrement</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Counter;