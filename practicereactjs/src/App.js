// import logo from './logo.svg';
import './App.css';
import MyFunCom from './components/MyFunCom';
import Tasks from './components/Tasks';
import { useState } from 'react';
import TodoApp from './components/TodoApp';
import TodoList from './components/TodoList';

let nextId = 0;
const initialTodos = [


];

function App() {
  const name = "Ramsey";

  const [todos, setTodos] = useState(initialTodos);

  function handleTodoApp(title) {
    setTodos([
      ...todos,
      {
        id: nextId++,
        title: title,
        done: false
      }
    ]);
  }

  function handleChangeTodo(nextTodo) {
    setTodos(todos.map(t => {
      if (t.id === nextTodo.id) {
        return nextTodo;
      } else {
        return t;
      }
    }));
  }

  function handleDeleteTodo(todoId) {
    setTodos(
      todos.filter(t => t.id !== todoId)
    );
  }

  return (

  <div className="App">
    <span>Hi, {name}. Add your to do. </span>

    <>
      <TodoApp
        onTodoApp={handleTodoApp}
      />
      <TodoList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>    

  </div>
  );
}



export default App;


//below creates ui w/ uneditable tasks, works with task taskdata tasks if uncommented only once
// function App() {
//   const name = "Make Your To Do List";
// // this code works here without the myFunCom.js component
// //   const name = "Ramsey";

// // const tasks = [
// //   {
// //     id: 1,
// //     title: "Office Work",
// //     description: "Have to setup Github",
// //   },
// //   {
// //     id: 2,
// //     title: "garden WOrk",
// //     description: "Have to setup Dirt bed",
// //   },
// //   {
// //     id: 3,
// //     title: "Car repair",
// //     description: "Have to get battery"
// //   },
// // ];

// // const taskManager = () => {
// //   const int = Math.floor(Math.random() * 3);
// //   return tasks[int].title;
// // };

// return (
// //  this is for displaying onle one specicfic task
// //   <div className="App">
// //     <h1>This is my first app</h1>
// //     <p>
// //       Hi {name} you have a task of <h3>{tasks[0].title}</h3>
// //     </p>
// //   </div>
// // );
// // }

//   <div className="App">
    

//     <span>Hi, {name} </span>

//     <Tasks />

// {/* //  the code in the 2 lines below is for use with MyFunCom */}
//     {/* <h1>Welcom to the task manager</h1>

//     <MyFunCom text="Hi! " /> */}

//   {/* goes here if no MyFunComponent //Hi {name} you have a task of <h3>{taskManager()}</h3> */}

//   </div>
// );
// }
// // below is for the orignal react app
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// export default App;
