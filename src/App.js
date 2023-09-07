/*
  rsc --> 函数组件(不带props)
  rsi --> 函数组件(不带props)
  rcc --> 类组件

*/

import React, { Component } from 'react';
import User from "./Component/User";
import './App.css'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <User name = {'Rubibi'} age ={23} gender={'F'}/>
      </div>
    )
  }
}

export default App;



