import React, { Component } from 'react'

class GreetUser extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn : true
      }
    }
  render() {
    return (
      this.state.isLoggedIn ? 
      <h1>Welcome Abrar Fahim</h1> :
      <div>Welcome Guest</div>
    )
  }
}

export default GreetUser