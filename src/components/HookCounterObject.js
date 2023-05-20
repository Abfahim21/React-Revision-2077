import React, { useState } from 'react'

function HookCounterObject() {
    const[name, setName] = useState({fName: '', lName: ''})
  return (
    <div>
        <form>
            <input type="text" value= {name.fName} onChange={ e =>setName({ ...name, fName: e.target.value})} />
            <input type="text" value={name.lName} onChange={ e =>setName({ ...name, lName: e.target.value})} />

            <h3>Your First Name is - {name.fName}</h3>
            <h3>Your Last Name is - {name.lName}</h3>
        </form>
    </div>
  )
}

export default HookCounterObject