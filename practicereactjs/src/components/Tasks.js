import React from 'react';
import Task from "./Task";
import TaskData from "./TaskData";

function Tasks() {


  return (
    <div>


        {TaskData.map((task) => (
            <Task 
              key={task.id} 
              title={<h1>{task.title}</h1>}
              description={task.description} 
              />
        ))}
    </div>
  
  );
}



export default Tasks;
