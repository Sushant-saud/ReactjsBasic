import React, { useState } from "react";
import Hoc from "./Hoc";
function Person2({handleClick,count}){

    return(
        <>
        <p>Increase money for ravi $by10 {count}</p>
        <button onClick={handleClick}>Increse</button>
        </>
    )
}
export default Hoc(Person2);