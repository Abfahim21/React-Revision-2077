import React, { useState } from 'react'

function CounterHookPrevState() {
    const initialValue = 0
    const[count, setCount] = useState(initialValue)
  return (
    <div>
        count : {count}
        <button onClick={()=>setCount(prevCount => prevCount + 1)}>Increase</button>
        <button onClick={()=>setCount(prevCount => prevCount - 1)}>Decrease</button>
        <button onClick={()=>setCount(initialValue)}>Reset</button>
    </div>
  )
}

export default CounterHookPrevState