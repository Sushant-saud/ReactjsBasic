// import React, { Component, createRef } from "react";

// class App extends Component{
//     constructor(){
//         super();
//         this.inputref=createRef(" ");
//     }
//     handleChange=()=>
//     {
//       const value=this.inputref.current.value="sushant";
//       this.inputref.current.style.color="red";
//       this.inputref.current.style.backgroundColor="black";
//       this.inputref.current.focus();
//       console.log(value);
//     }
//     render(){
//         return(
//             <>
//                <input type="text" name="name" ref={this.inputref} onChange={this.handleChange}/>
//             </>
//         )
//     }
    
    
// }
// export default App;
import React, { useRef, useEffect } from 'react';

const App = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.key === 'g') {
        event.preventDefault();
        inputRef.current.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return <input ref={inputRef} />;
};

export default App;