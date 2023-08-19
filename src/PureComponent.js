// // // import React, { Component } from "react";
// // // class App extends Component{
// // //      state={
// // //             name:"sushant",
// // //             "rollno":20,
// // //             sec:this.props.sec
// // //         }
// // //     render(){
// // //         return(
// // //            <>
// // //            <div>Hello{this.state.name} {this.state.rollno}</div>
// // //            <p>{this.state.sec}</p>
// // //            </>

// // //         )

// // // }
// // // }
// // //     export default App;

// // // // import React, { Component } from 'react'
// // // // import PropTypes from 'prop-types'

// // // // export default class App extends Component {
// // // //   static propTypes = {
// // // //     prop: PropTypes
// // // //   }

// // // //   render() {
// // // //     return (
// // // //       <div>

// // // //       </div>
// // // //     )
// // // //   }
// // // // }

// // // import React from "react";
// // // const App=()=>{
// // //     return(
// // //         <>
// // //         </>
// // //     )
// // // }
// // // import React, { useState } from "react";
// // // function App(){
// // //     const [name,setName]=useState(" ");
// // //     const [user,setuser]=useState(false);
// // //     const handleForm=(e)=>{
// // //         console.log(e.target.value);
// // //         setName(e.target.value);
// // //     }
// // //     const handleClick=()=>{
// // //         setuser(true);
// // //         setName(" ");
// // //     }
// // //     return(
// // //         <>
// // //         <p>Take a input from User</p>
// // //         <label id='name'>Name</label>
// // //         <input htmlfor="name" type="text" onChange={handleForm} value={name}/>
// // //         {
// // //             user &&<p>The name of user is {name}</p>
// // //         }
// // //         {/* <input htmlfor="name" type="text" onChange={(e)=>setName(e.target.value)} value={name}/> */}
// // //         <button onClick={handleClick}>Clicke me</button>
// // //         </>
// // //     )
// // // }
// // // export default App;
// // // import React, { useState } from 'react'

// // // function App() {
// // //     const [name,setname]=useState(" ");
// // //     const [selected,setselected]=useState(" ");
// // //     const [value,setValue]=useState(" ");
// // //     const handleSubmit=(e)=>{
// // //         e.preventDefault();
// // //         console.log(name,selected,value);
// // //     }

// // //   return (
// // //     <div className='app'>
// // //         <form onSubmit={handleSubmit}>
// // //         <input type="text"  onChange={(e)=>setname(e.target.value)} value={name}/>
// // //         <input type="checkbox" onClick={(e)=>setValue(e.target.checked)}/>
// // //         <select  onChange={(e)=>setselected(e.target.value)}>
// // //             <option disabled>Select</option>
// // //             <option>Orange</option>
// // //             <option>Apple</option>
// // //             <option>Mango</option>
// // //         </select>
// // //         <button type="submit">Submit</button>
// // //         </form>
// // //     </div>
// // //   )
// // // }

// // // export default App
// // // import React, { useState } from "react";

// // // function App() {
// // //   const [user, setuser] = useState(false);
// // // //   const handleClick=()=>{
// // // //     setuser(!user);
// // // //   };
// // //   return (
// // //     <div>
// // //       {user ? <p>User is available</p> :null}
// // //       <button onClick={()=>setuser(!user)}>Toggle</button>
// // //     </div>
// // //   );
// // // }

// // // export default App;
// // // import React, { useState } from 'react'
// // // function App() {
// // //     const [name,setname]=useState(" ");
// // //     const [password,setpassword]=useState();
// // //     const [boo,setboo]=useState();
// // //     const handleForm=(e)=>{
// // //         e.preventDefault();
// // //         if(name.length<4 || password.length<4)
// // //         {
// // //             console.warn("Please enter valid input")
// // //         }
// // //         else
// // //         {
// // //             console.log("Everything Good");
// // //         }
// // //         setname(" ");
// // //         setpassword(" ");
// // //     }
// // //     const handleName=(e)=>{
// // //         const item=e.target.value;
// // //         if(item.length<4)
// // //         {
// // //            setboo(true)
// // //         }
// // //         else
// // //         {
// // //             setboo(false)
// // //         }
// // //         setname(item);
// // //     }
// // //     const handlePassword=(e)=>{
// // //         const item=e.target.value;
// // //         if(item.length<4)
// // //         {
// // //            setboo(true)
// // //         }
// // //         else
// // //         {
// // //             setboo(false)
// // //         }
// // //         setpassword(item);
// // //     }
// // //   return (
// // //     <div>
// // //         <form onSubmit={handleForm}>
// // //         <input type="text"  onChange={handleName} value={name} /><span>{boo?<span>Enter vaild name</span>:" "}</span>
// // //         <br></br>
// // //         <input type="text"  onChange={handlePassword} value={password} /> <span>{boo?<span>Enter vaild password</span>:" "}</span>
// // //         <br></br>
// // //         <button type="submit">Click Me</button>
// // //         </form>
// // //     </div>
// // //   )
// // // }

// // // export default App

// // import React, { useState } from 'react'
// // import 'bootstrap/dist/css/bootstrap.min.css';
// // import { Button } from 'bootstrap';
// // function App() {
// //   const [name,setname]=useState({
// //     student:"sushant",
// //     roll:"343",
// //     marks:"4433"
// //   })
// //   const handleClick=()=>{
// //     setname((prev)=>{
// //     return{...prev,marks:"22"}
// //     })
// //   }
// //   return (
// //     <div style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
// //        <p style={{color:"red"}}> {name.student}</p>
// //        <p style={{backgroundColor:"blue"}}> {name.roll}</p>
// //        <p style={{color:"red"}}> {name.marks}</p>
// //        <Button variant="primary">Primary</Button>
// //        <p> {name.student}</p>
// //        <p> {name.roll}</p>
// //        <p> {name.marks}</p>

// // {/*<Button variant="secondary">Secondary</Button>{' '}
// //       <Button variant="success">Success</Button>{' '}
// //       <Button variant="warning">Warning</Button>{' '}
// //       <Button variant="danger">Danger</Button>{' '}
// //       <Button variant="info">Info</Button>{' '}
// //       <Button variant="light">Light</Button>{' '}
// //       <Button variant="dark">Dark</Button>
// //       <Button variant="link">Link</Button> */}
// //     </div>
// //   )
// //
// import React, { Component, PureComponent } from "react";
// class PComponent extends PureComponent {
//   constructor() {
//     super();
//     this.state = {
//       count: 0,
//       item: 0,
//     };
//   }
 
//   render() {
//     console.log("rendering");
//     return (
//       <>
//         <div className="app">
//           <p>{this.state.count}</p>
//           <button onClick={() => this.setState({count:this.state.count})}>Increment(count)</button>
//           {/* <p>{this.state.item}</p>
//           <button onClick={() => this.setState({item:0})}>Increment(item)</button> */}
          

//         </div>
//       </>
//     );
//   }
// }
// export default PComponent;
