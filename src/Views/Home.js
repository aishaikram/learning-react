
import React from 'react';
import Hello from '../Components/Hello'
import CounterExample from '../Components/CounterExample';
export default function Home()
{
return(
    <div>
       <h1 className="font-bold text-2xl">Home Page</h1>
       <Hello name="Aisha Ikram"/>
       <CounterExample />
        
    </div>
)
}