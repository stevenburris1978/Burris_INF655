import React from "react";

function MyFunCom(props){
    const name = "Ramsey";

    const tasks = [
      {
        id: 1,
        title: "Office Work",
        description: "Have to setup Github",
      },
      {
        id: 2,
        title: "garden WOrk",
        description: "Have to setup Dirt bed",
      },
      {
        id: 3,
        title: "Car repair",
        description: "Have to get battery"
      },
    ];

//this is for dispaying random task

    const taskManager = () => {
        const int = Math.floor(Math.random() * 3);
        return tasks[int].title;
      };
    return(
<span>
      {props.text}
      {name} you have a task of <h3>{taskManager()}</h3>
</span>
    );
}

export default MyFunCom;