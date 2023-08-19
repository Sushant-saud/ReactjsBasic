// import React, { useState, useMemo } from "react";

// function UseMemo() {
//   const [item, setitem] = useState(0);
//   const [count, setcount] = useState(0);
//   // const value=useMemo(()=>Manage(item),[item])
//   const handleItem = (e) => {
//     setitem(item + 1);
//   };
//   const handleCount = (e) => {
//     setcount(count + 1);
//   };
//   const Mero = useMemo(
//     function Manage() {
//       console.log("rendering");
//       return count* 10;
//     }, [item]
//   );

//   return (
//     <div>
//       <p>{item}</p>
//       <button onClick={handleItem}>+</button>
//       <p>{count}</p>
//       <button onClick={handleCount}>+</button>
//       <p>{Mero}</p>
//     </div>
//   );
// }

// export default UseMemo;
