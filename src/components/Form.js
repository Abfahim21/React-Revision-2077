import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       userName : '',
       comment : '',
       select : 'react.js',
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
  handleTopicChange = (event) =>{
    this.setState({
      topic: event.target.value
    })
  }
  handleSubmit = event =>{
    alert(`${this.state.userName} ${this.state.comment} ${this.state.topic}`)
  }
  render() {
    return (
      <div onSubmit={this.handleSubmit}>
        <div>
          <form action="">
            <label>Enter Username: </label>
            <input type="text" value={this.state.userName} onChange={this.handleUserNameChange}/>
          </form>
        </div>
        <div>
          <label>Comment: </label>
          <textarea value={this.state.comment} onChange={this.state.handleCommentChange}></textarea>
        </div>
        <div>
          <label>Select: </label>
            <select value={this.state.select} onChange={this.handleTopicChange}>
            <option>React.js</option>
            <option>Laravel</option>
            <option>Angular.Js</option>
            <option>Next.JS</option>
            </select>
        </div>
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
      
      
    )
  }
}

export default Form