
import { useState } from 'react';
import './App.css'

function App() {
let [counter,setCounter]=useState(10);
  // let counter=5;

const addValue=()=>
{
  if(counter==20) return;
  // counter++;
  counter=counter+1;
  setCounter(counter);
  console.log("value added");
}
const decValue=()=>
  {
    if(counter==0) return;
    // counter--;
    counter=counter-1;
    setCounter(counter);
    console.log("value decreased");
}
  return (
   <>
  <h1>New Project</h1>
   <h2>Counter value: {counter}</h2>

   <button onClick={addValue}>Increase Value</button>
   <button onClick={decValue}>Decrease Value</button>
   </>
  )
}

export default App
