// 双向数据绑定
import React, { Component } from 'react';
class MyModel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: 'lixiaoyong',
      styleObj: {
        paddingTop: '20px'
      }
    };
  }
  handleChange = e => {
    this.setState({
      msg: this.refs.el.value
    })
  }
  handleClick = () => {
    this.setState({
      msg: 'suwenli'
    })  
  }
  render() {
    return (
      <div id="my-model" style={this.state.styleObj}>
        <label htmlFor="myInput">输入框:</label><input ref='el' onChange={this.handleChange} value={this.state.msg}/>
        <p>{this.state.msg}</p>
        <button onClick={this.handleClick}>设置input的值</button>
      </div>
    );
  }
}

export default MyModel