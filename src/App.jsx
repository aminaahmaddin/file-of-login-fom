// import { useState } from "react";
import './App.css';
import Login from "../src/components/Login";
// import Home from "./pages/home/Home";
// import Contact from "./pages/contact/Contact";
// import Longin from "./pages/longin/Longin";
// import TopNav from "./pages/topnav/TopNav";
 
function App(){
  return (

   <div><h1>Firebase Authentication</h1>
   <Login/></div>
  
  )
}



export default App;

// import React from 'react'

// function App() {
//   const age = 17;
//   const isRed = true;
//   return (
//     <div className="App">
//       {age >=18 ? <h1> OVER AGE</h1>:<h1>UNDER AGE</h1>}
//       <h1 style={{color: isRed ? "green":"red"}}>THIS IS COLOR RED</h1>
//     </div>
//   )
// }

// export default App

// import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
// function App() {
//   // const [name, setName] = useState("");
//   const [name, setName] = useState('');
//   useEffect(()=>{
//     console.log("this is ues effrct")
//   },[name])

//   return (
//     <div className="App">
//       <input
//         type="text"
//         placeholder="Enter name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <p>{name}</p>
//     </div>
//   )
// }

//   return (
// <div className="App">





  /* <Job salary={90000} position="Senior SED" company="Amazon"/>
  <Job salary={12000} position="Junior SED" company="Google"/>
  <Job salary={10000} position="Project Manager" company="Netflix"/> */
    /* <User name = "Amina" age = {21} email = "aminaahmaddin.246@gmail.com"/>
    <User name = "Amina" age = {21} email = "aminaahmaddin.246@gmail.com"/>
    <User name = "Amina" age = {21} email = "aminaahmaddin.246@gmail.com"/> */
  /* <Router>
    <Routes>
      <Route path="/" element/>
    </Routes>
  </Router> */

/* </div> */
  

// const Job = (props) => {
//   return (
//     <div>
//       <h1>{props.salary}</h1>
//       <h1>{props.position}</h1>
//       <h1>{props.company}</h1>
//       {/* <h1>{props.name}</h1>
//       <h1>{props.age}</h1>
//       <h1>{props.email}</h1> */}
//     </div>
//   )

// }

//const age =16
//const isGreen = false;
 
//<h1>hello world!</h1>
//   <h1>{age>=18?<h2>overage</h2>:<h2>underage</h2>}</h1>
//   <h1 style={{color: isGreen?"green":"red"}}>This is color red</h1>

// const users = [{name:"Hira", age:23},
  // {name:"Amina", age:21},
  // {name:"Anas", age:20},
  // {name:"Umar", age:17},
  // {name:"Samavia", age:15}
// ]


// {users.map((users,key)=>{
  // return (
    // <div>{users.name}{users.age}</div>  
  // )
//  })}

 // Check if data is null or undefined before rendering
  // if (!data) {
  //   return <div>Loading...</div>;
  // }


  // function App() {
    // const [age , setAge] = useState(0);
    //const increaseAge =() =>{
        //  setAge(age+1)
    // }
    
    // const decreaseAge =() =>{
        //  setAge(age-1)
    // }
   
   
                 
    //  return (
       
      // <div className="App">
      // {age}
      // <button onClick={increaseAge}>Increase</button>
      // <button onClick={decreaseAge}>Decrease</button>
      
      // const [color , setColor] = useState("pink")
      
      // <button onClick={() => {
        // setColor("purple")
      //  }}>mold color</button>
      //  <h1 style={{color: color}}>hello world!</h1>

// export default App;



// function App() {
  
//   const [inputValue, setInputValue] = useState('');
//   const [Password, setPassword] = useState(false);

//   // Toggle the visibility of the input (between 'password' and 'text')
//   const change = () => {
//     setPassword(!Password);

//   };
  

// return (
//   <div className="App">
//     <input
//       type={Password ? 'text' : 'password'}
//       id="password-input"
//       value={inputValue}
//       onChange={(event) => setInputValue(event.target.value)}
//     />
//     <button onClick={change}>
//       {Password ? 'Hide' : 'Show'} Password
//     </button>


// const [todoList, setTodoList] =useState([]);
// const [newTask, setNewTask] =useState('');
// const handleChange = (e)=>{
//   setNewTask(e.target.value)
// }
// const addTask = ()=>{
// const newTodolist = [...todoList,newTask]
// setTodoList(newTodolist)
// }





/* <div>
      <input type="text" onChange={handleChange}/>
      <button onClick={addTask}>Add</button>
    </div>
    <div>{todoList.map((task)=>{
      return <h1>{task}</h1>
    })}</div> */

  //   function App() {
  //     const [name,setName]=useState([])
  //     const [taskNew,setTaskNew]=useState('')
  //     const change =(e)=>{
  //       setTaskNew(e.target.value)
  //     }
  //     const addSome = ()=>{
  //       const newname = [...name,taskNew]
  //       setName(newname)
  //     }
  //     const deleteTask = (taskName)=>{
  //       const newName = name.filter((taskNew)=>{
  //        return taskNew !==taskName
  //       })
  //       setName(newName)
  //     }
  
  //   return (
  //     <div className="App">
      
  
   
  //    <div><input type="text" onChange={change}/>
  //    <button onClick={addSome}>Add</button></div>
  //    <div>{name.map((taskNew)=>{
  //     return <div><h1>{taskNew}</h1>
  //     <button onClick={()=>deleteTask(taskNew)}>Delete</button></div>
      
  //    })}
  //    {/* <button onClick={()=>deleteTask(taskNew)}>Delete</button> */}
    
  //    </div>
  //    </div>
    
  //   )
  // }
  