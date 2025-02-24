// import React from 'react'

import Card from "./components/Card";

const App = () => {
  const doneTask = "Done";
  const task = [
    { id: 1, task: "Complete the project documentation" },
    { id: 2, task: "Fix bugs in the application" },
    { id: 3, task: "Update the user interface" },
    { id: 4, task: "Write unit tests" },
  
  ];
  return (
    <div className="flex justify-center items-center h-screen flex-col gap-7 bg-gray-200">
      <div>
        <input
          className="border-2 py-2 px-4 mr-3.5"
          type="text"
          placeholder="Enter Your Task"
        />
        <button className="border-2 py-2 px-4 hover:bg-black hover:text-white">
          Submit Task
        </button>
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
