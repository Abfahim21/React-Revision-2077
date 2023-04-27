import React from 'react'

export default function PropsFunctional(props) {
  const {name, heroName} = props
  return (
    <div>
        <h2>Hello {name} a.k.a {heroName}.</h2>
    </div>
  )
}
