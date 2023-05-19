import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       userName : '',
       comment : '',
       select : 'react.js'
    }
  }
  handleUserNameChange = (event) =>{
    this.setState({
      userName : event.target.value
    })
  }
  handleCommentChange =(event) =>{
    this.setState({
      comment : event.target.value
    })
  }
  render() {
    return (
      <div>
        <div>
          <form action="">
            <label>Enter Username: </label>
            <input type="text" value={this.state.userName} onChange={this.handleUserNameChange}/>
          </form>
        </div>
        <div>
          <label>Comment: </label>
          <textarea name="" id="" value={this.state.handleCommentChange}></textarea>
        </div>
        <div>
          <label>Select: </label>
            <select name="" id="">
            <option value="">React.js</option>
            <option value="">Laravel</option>
            <option value="">Angular.Js</option>
            <option value="">Next.JS</option>
            </select>
        </div>
      </div>
      
      
    )
  }
}

export default Form