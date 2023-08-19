import React, { useState } from "react";
import Hoc from "./Hoc";
function Person1({handleClick,count}){
    
    return(
        <>
        <p>Increse the money by $10 {count}</p>
        <button onClick={handleClick}>Increse</button>
        </>
    )
}
export default Hoc(Person1);