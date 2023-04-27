import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    }
    increase(){
        this.setState (prevState =>({
            count: prevState.count + 1

        }))
    }
    decrease(){
        this.setState (prevState =>({
            count : prevState.count - 1
        }))
    }
    reset(){
        this.setState(prevState=>({
            count : 0
        }))
    }
  render() {
    return (
      <div>
        <h2>Count : {this.state.count}</h2>
        <button onClick={()=> this.increase()}>Click to Increment</button>
        <button onClick={()=> this.decrease()}>Click to Decrease</button>
        <button onClick={()=> this.reset()}>Reset</button>
      </div>
    )
  }
}
