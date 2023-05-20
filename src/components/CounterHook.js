import React, { useState } from 'react'

export default function CounterHook() {
    const[ count, setCount ] = useState(0)
  return (
    <div>
        <Button>Increase {count}</Button>
    </div>
  )
}