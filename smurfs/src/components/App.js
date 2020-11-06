import React, { Component } from "react";
import "./App.css";
import SmurfsForm from './SmurfForm'
import SmurfList from './SmurfList'
class App extends Component {


  render() {
    return (
      <div className="App">
       <SmurfsForm/>
       <SmurfList/>
      </div>
    );
  }
}

export default App;
