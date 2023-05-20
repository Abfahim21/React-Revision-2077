import React, { useState } from 'react'

export default function CounterHook() {
    const[ count, setCount ] = useState(0)
  return (
    <div>
        <button onClick={()=> setCount(count+1)}>Increase {count}</button>
    </div>
  )
}