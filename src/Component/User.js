import React, { Component } from 'react'

class User extends Component {

  /*
    类组件的props是存储到类的实例对象中，
      可以直接通过实例对象访问
      this.props
    类组件中的state统一存储到了实例对象的state属性中
      可以通过this.state访问
      通过this.setSate()对其进行修改
    函数组件中，响应函数直接以函数的形式定义在组件中，
      当时在类组件中，响应函数是以类的方法来定义
  */

  //在类里面写不需要加this，在函数里写需要加this
  state ={
    count: 0
  };

  clickAdd = ()=>{
    this.setState(prevState=>{
      return{
        count:prevState.count+1
      }
    });
    //将一个新对象替换
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onclick={this.clickAdd}>BUTTON</button>
        <ul>
          <li>Name: {this.props.name}</li>
          <li>Age: {this.props.age}</li>
          <li>Gender: {this.props.gender}</li>
        </ul>
      </div>
    )
  }
}

export default User;
