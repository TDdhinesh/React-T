// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import "./App.css";
import {useState} from "react";

const App = ()=>{

// let uname="Dhinesh";
// let pass="Td@React";
let [uname,setUname]=useState("")
let [pass,setPass]=useState("")
let [user,setUser]=useState([])

const click =()=>{
  let obj ={
    user_name:uname,
    user_pass:pass
  }
  setUser(prev=>[...prev,obj])
}
return(
  <>
  <div className="main">  
    <h1 style={{color:"red",letterSpacing:"20px",textTransform:"uppercase"}}>Hello World</h1>
    <button  onClick={()=>click()}>Click</button>
   <div>
    <h5>UserName:{uname}</h5>
    <h5>Password:{pass}</h5>
    </div>
<input onChange={(e)=>{setUname(e.target.value)}} placeholder="UserName"></input>
<input  onChange={(e)=>{setPass(e.target.value)}} placeholder="Password"></input>  
<button>Login</button>
</div>
<div>
  <h3>UserList</h3>
  <div>
    {user.map((data)=>{
      return(
        <>
        <div>name:{data.user_name}</div>
        <div>pass:{data.user_pass}</div>

        </>
      )
    })}
  </div>
</div>
  </>
)

}

export default App;