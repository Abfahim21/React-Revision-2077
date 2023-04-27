import React, { Component } from 'react'

export class State extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: "Click here to Subscribe!"
      }
    }
    changeMessage(){
        this.setState({
            message: "Thanks for Subscribing"
        })
    }
  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <button onClick={() => this.changeMessage()}>Click Me</button>
      </div>
    )
  }
}

export default State