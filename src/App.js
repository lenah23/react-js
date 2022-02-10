import './App.css';
import {useState, useEffect} from 'react';
import Text from './components';
import React, {createContex, useContext} from 'react';
import Component1 from './components/Text/Component1';
import ColorContext from './context';
import {useReducer} from 'react';



// function App() {
//  const [count, setCount] = useState(0);
//  useEffect(() =>(
//    setCount((Count)=>count+1)
//  ), [])
//   return(
//     <div>
//       <h1>count={count}</h1>;
//   <button onClick={()=>setCount(count+1)}>+1</button>
//     </div>
//   ) 
// }

// function App() {
//   const [count, setCount] = useState(0);
//   const [multiply, setMultiply] = useState(0)
//   useEffect(() =>{
//     setMultiply(()=>count*2)
//   }, [count]);
//    return(
//      <div>
//        <h1>count={count}</h1>;
//    <button onClick={()=>setCount(count+1)}>+1</button>
//    <h1>multiply={multiply}</h1>
//      </div>
//    ) 
//  }

// export default App;

function App() {
  const [color, setColor] = useState("blue");

  return <ColorContext.Provider value={color} >
   <div className='container'>
    Color is {color}
    <Component1  color={color} />
  </div>
  </ColorContext.Provider>
}

export default App;

