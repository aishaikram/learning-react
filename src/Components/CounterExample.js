import React, { useState } from 'react'
//using hooks concept new in React for state change rather than writing classes
function CounterExample(){
    const [count, setCount] = useState(0);
   // console.log(useState(0))
    return(
<div>
    <h1> you clicked {count} times </h1>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 border border-blue-700 rounded" onClick={()=> setCount(count+1)}> Click me </button>
    <h1 onClick={()=>setCount(count+1)}> Plus </h1>
    <h1 onClick={()=>setCount(count-1)}> Minus </h1>
</div>
        
   );
    
}
export default CounterExample