import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       userName : ''
    }
  }
  handleUserNameChange = (event) =>{
    this.setState({
      userName : event.target.value
    })
  }
  render() {
    return (
      <div>
        <form action="">
          <label>Enter Username: </label>
          <input type="text" value={this.state.userName} onChange={this.handleUserNameChange}/>
        </form>
      </div>
    )
  }
}

export default Form