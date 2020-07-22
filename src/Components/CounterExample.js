import React, { useState } from 'react'
//using hooks concept new in React for state change rather than writing classes
function CounterExample(){
    const [count, setCount] = useState(0);
   // console.log(useState(0))
    return(
<div>
    <h1> you clicked {count} times </h1>
    <button onClick={()=> setCount(count+1)}> Click me </button>
    <h1 onClick={()=>setCount(count+1)}> Plus </h1>
    <h1 onClick={()=>setCount(count-1)}> Minus </h1>
</div>
        
   );
    
}
export default CounterExample