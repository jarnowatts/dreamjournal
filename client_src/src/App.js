import React, { Component } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Main from './components/Main';

class App extends Component {
  render() {
    return (
      <div>
      <Navbar/>
        <div class="container">
          <Main/>
      </div>
     </div>
    );
  }
}

export default App;
