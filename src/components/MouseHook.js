import React, { useEffect, useState } from 'react'

const MouseHook = () => {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
const logMousePosition = e =>{
    setX(e.clientX)
    setY(e.clientY)
}
useEffect(()=>{
    window.addEventListener('mousemove', logMousePosition)
}, [])
  return (
    <div>
        Hooks, X= {x}, Y= {y}
    </div>
  )
}

export default MouseHook