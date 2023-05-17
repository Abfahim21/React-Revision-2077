import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       userName : ''
    }
  }
  render() {
    return (
      <div>
        <form action="">
          <label>Enter Username: </label>
          <input type="text" value={this.state.userName}/>
        </form>
      </div>
    )
  }
}

export default Form