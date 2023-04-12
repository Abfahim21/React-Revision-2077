import React, { Component } from 'react'

export default class PropsClass extends Component {
  render() {
    return (
      <div>
        <h2>Hello {this.props.name} a.k.a {this.props.heroName}.</h2>
      </div>
    )
  }
}
