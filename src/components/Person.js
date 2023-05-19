import React from 'react'

function Person({person}) {
  return (
    <React.Fragment>
      <h2>I am {person.name}. I am {person.age} years old. I know {person.skill}.</h2>
    </React.Fragment>
  )
}

export default Person