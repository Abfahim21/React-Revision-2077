import React, { Component } from 'react'

class LifeCycleMethodB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name : "Abrar"
      }
      console.log("Component B constructor")
    }
    static getDerivedStateFromProps(props, state) {
        console.log("Component B getDerivedStateFromProps")
        return null
    }
    componentDidMount(){
        console.log("Component B componentDidMount")
    }
  render() {
    console.log("Component B render")
    return (
      <div>
        <p>LifeCycleMethod B</p>
      </div>
    )
  }
}

export default LifeCycleMethodB