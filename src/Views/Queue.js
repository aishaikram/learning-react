import React, { useState, useEffect} from 'react'
import axios from 'axios'


export default function Queue()
{

    const url = 'https://azurebuddyapi.azurewebsites.net/ServiceBusNs/crm'
    const [queue, setQueue] = useState(null)

    useEffect(() => {axios.get(url).then(response => {setQueue(response.data)})},[url])

    let content = null
   if(queue)
    {
        content = <div> 
        <p className="bg-purple-200"> Queue:
         <span className="font-extrabold"> {queue.name}</span> <br/> 
         Max Size: <span className="font-extrabold">  {queue.maxSize} MB </span><br/>
         Time to Live: Days:{queue.timetoLive.days}   Hours: {queue.timetoLive.hours} Mins: {queue.timetoLive.minutes} Ticks: {queue.timetoLive.ticks}<br/>
         Duplicate Detect: {queue.isDuplicateDetectEnabled?'True':'False'}
        {/*  <ul>
                {timeLive.map(s => (<li>{s}</li>))}
        </ul> */}
         </p>
        </div>
    }
    return(
        <div>
        <h1 className="font-bold text-2xl">Queue Page</h1>
        {content}            
        </div>
    )
}

