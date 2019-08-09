import React, { Component } from 'react';
import './App.css';
import Display from './components/Display'
import Controls from './components/Dashboard'

class App extends Component {
  render() {
    return (
      <div className="App"> 
        <Display strikes={2} balls={3}/> 
        <Controls strike={()=> console.log('strike')}/>
      </div>
    );
  }
}export default App;
