import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       userName : '',
       comments : '',
       topic : "React.JS"
    }
  }
  handleUserNameChange = (event) =>{
    this.setState({
      userName : event.target.value
    })
  }
  handleCommentChange =(event) =>{
    this.setState({
      comments : event.target.value
    })
  }
  handleTopicChange = (event) =>{
    this.setState({
      topic: event.target.value
    })
  }
  handleSubmit = (event) =>{
    alert(`${this.state.userName} ${this.state.comments} ${this.state.topic}`)
    event.preventDefault()
  }
  render() {
    return (
      <div onSubmit={this.handleSubmit}>
        <div>
          <form>
            <label>Enter Username: </label>
            <input type="text" value={this.state.userName} onChange={this.handleUserNameChange}/>
          </form>
        </div>
        <div>
          <label>Comment: </label>
          <textarea value={this.state.comments} onChange={this.state.handleCommentChange}></textarea>
        </div>
        <div>
          <label>Select: </label>
            <select value={this.state.topic} onChange={this.handleTopicChange}>
            <option value="React.JS">React.js</option>
            <option value="Laravel">Laravel</option>
            <option value="Angular.JS">Angular.Js</option>
            <option value="Next.JS">Next.JS</option>
            </select>
        </div>
        <button type='submit'>Submit</button>
      </div>
    )
  }
}

export default Form