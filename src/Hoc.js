import React,{useState} from "react";
function Hoc(Originalcomponent){
    function Newcomponent(){
        const [count,setcount]=useState(10);
        const handleClick=()=>{
            setcount(count+10);
        }
        return <Originalcomponent handleClick={handleClick} count={count}/>
    }
    return Newcomponent;

}
export default Hoc;