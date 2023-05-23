import React, { Component } from 'react'
import LifeCycleMethodB from './LifeCycleMethodB'

class LifeCycleMethodA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name : "Abrar"
      }
      console.log("Component A constructor")
    }
    static getDerivedStateFromProps() {
        console.log("Component A getDerivedStateFromProps")
        return null
    }
    componentDidMount(){
        console.log("Component A componentDidMount")
    }
  render() {
    console.log("Component A render")
    return (
      <div>
        <p>LifeCycleMethodA</p>
        <LifeCycleMethodB/>
      </div>
    )
  }
}

export default LifeCycleMethodA