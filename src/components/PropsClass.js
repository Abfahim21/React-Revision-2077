import React, { Component } from 'react'

export default class PropsClass extends Component {
  render() {
    const {name, heroName} = this.props
    return (
      <div>
        <h2>Hello {name} a.k.a {heroName}.</h2>
      </div>
    )
  }
}
