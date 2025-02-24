// import React from 'react'

const Card = ({ task , doneTask}) => {
  return (
    <div className="border-2 p-7 flex justify-center items-center flex-col gap-2 max-w-md max-h-44 h-full w-full rounded-2xl shadow-2xs bg-gray-100">
      <h1 className="text-2xl text-center">
        {task}
      </h1>
      <button className="border-2 py-2 px-4 hover:bg-black hover:text-white mt-3">
        {doneTask}
      </button>
    </div>
  );
};

export default Card;
