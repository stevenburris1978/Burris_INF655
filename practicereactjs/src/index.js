import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';


//displays time and date

//  const root = createRoot(document.getElementById('root'));

// function tick() {
//   const element = (
//     <div>
//       <h1>Today's date and time</h1>
//       <h2> It is {new Date().toLocaleDateString()}.</h2>
//       <h2> It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
 
//   root.render(
    
//     element

//   );

//   }

//   setInterval(tick, 1000);


// displays component
// const nice = <h1>1st component</h1>;

// const root = createRoot(document.getElementById('root'));


// root.render(
//   nice

// );

// starts app in app.js
const root = createRoot(document.getElementById('root'));

root.render(

  <React.StrictMode>
    <App />
  </React.StrictMode> 

);





