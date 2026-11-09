import { useState } from "react";
import Button from "./button";

function Counter(){
    const [count,setcount]=useState(1)
    const increase=()=>{
        setcount(count+1)
    }
    const decrease=()=>{
        setcount(count-1)
    }
    const reset=()=>{
        setcount(0)
    }
    return(<div>
        <p>{count}</p>
        <button onClick={increase}>increase</button>
        <button onClick={reset}>reset</button>
        <button onClick={decrease}>decrease</button>
    </div>)



}
export default Counter;