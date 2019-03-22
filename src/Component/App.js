import React, { Component } from 'react';
import '../Styles/App.css';
import Tasks from './Task/Tasks';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Tasks/>
      </div>
    );
  }
}

export default App;
