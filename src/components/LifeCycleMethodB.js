import React, { Component } from 'react'

class LifeCycleMethodB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name : "Abrar"
      }
      console.log("Component B constructor")
    }
    static getDerivedStateFromProps() {
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
        <p>LifeCycleMethodB</p>
        
      </div>
    )
  }
}

export default LifeCycleMethodB