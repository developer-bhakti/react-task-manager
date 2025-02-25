// import React from 'react'

import { useState } from "react";
import Card from "./components/Card";

const App = () => {
  const doneTask = "Done";
  // const task = [
  //   { id: 1, task: "Complete the project documentation" },
  //   { id: 2, task: "Fix bugs in the application" },
  //   { id: 3, task: "Update the user interface" },
  //   { id: 4, task: "Write unit tests" },

  // ];

  // state ko har ek datatype se initialise kar sakti hai tu like string number etc etc
  const [task, setTask] = useState([]); //by defualt apan ne empty array se likhe dekh
  const [singleTask, setSingleTask] = useState(""); //isko kisi chiji se initalise nahi karenge apan string se kar sakte hai

  // form submit handle bhi to karna padega to uske liye funtion likhe dete hai
  const handleFormSubmit = (e) => {
    // ye line likhana compolasory hai bal teko agar form submit karna hai to
    e.preventDefault();
    
    // or ye apan ne task bana liya
    console.log(singleTask);

    // yaha pe apan ne jo task diya uski id and task ke form me object bana liya  
    // bad me apan yahi id use karke delete karne wale hai task 
    const newtask = {
      id: task.length + 1,
      task: singleTask,
    };
    
    // ye purane task me new task add karne using spred oprator 
    setTask([...task,newtask]);
    
    setSingleTask("");
  };

  // apan ne kay kiya pahile to ek funtion banaya
  // form submiton handle karne ke liye  then form me onsubmit pe
  // call kar diya usko

  return (
    <div className="flex justify-center items-center min-h-screen flex-col gap-7 pt-10 bg-gray-200">
      <div>
        <form onSubmit={handleFormSubmit}>
          <input
            className="border-2 py-2 px-4 mr-3.5"
            type="text"
            placeholder="Enter Your Task"
            value={singleTask}
            onChange={(e) => setSingleTask(e.target.value)}
          />
          <button className="border-2 py-2 px-4 hover:bg-black hover:text-white">
            Submit Task
          </button>
        </form>
      </div>
      <div className="flex justify-center items-center flex-wrap gap-5">
        {task.map((data) => {
          return <Card key={data.id} doneTask={doneTask} task={data.task} />;
        })}
      </div>
    </div>
  );
};

export default App;
