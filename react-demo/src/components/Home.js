import React, { Component } from 'react'
class Home extends Component{
  constructor (props) {
    super(props)
    // 定义数据
    this.state = {
      name: 'leexiaoyong',
      age: 28,
      sex: 'male',
      list: [1, 2, 3],
      styleObj: {
        color: '#ff5252',
      }
    }
  }
  render() {
    return (
      <div id="home">
        <p>我是home组件里面的子元素</p>
        <ul>
          <li style={this.state.styleObj}>{this.state.name}</li>
          <li>{this.state.age}</li>
          <li>{this.state.sex}</li>
        </ul>
        <hr/>
        <ul>
          {
            this.state.list.map(item => {
              return <li key={item}>{item}</li>
            })
          }
        </ul>
      </div>
    )
  }
}
export default Home