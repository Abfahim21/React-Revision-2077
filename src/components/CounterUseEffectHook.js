import React, { useState } from 'react'

function CounterUseEffectHook() {
    const[count, setCount] = useState(0)
  return (
    <div>
        <button onClick={()=>setCount(count+1)}>Clicked ${count} times</button>
    </div>
  )
}

export default CounterUseEffectHook