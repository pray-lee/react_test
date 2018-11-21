import React, { Component } from 'react'

class Demo extends Component {
  constructor (props) {
    super(props)
    this.state = {
      son: 'liyuhong',
    }
    this.getData = this.getData.bind(this)
    this.setData = this.setData.bind(this)
  }
  getData () {
    console.log('get', this.state.son)
  }
  setData () {
    console.log('set')
    this.setState({
      son: Math.random()
    })
  }
  render () {
    return (
      <div className="state-content">
        <p>{this.state.son}</p>
        <button onClick={this.setData}>设置son</button>
        <button onClick={this.getData}>获取son</button>
      </div>
    )
  }
}

export default Demo
