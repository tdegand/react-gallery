import React, {Component} from 'react';
import './css/index.css'
import SearchForm from './components/Search';
import Nav from './components/Nav'
import Photo from './components/Photo'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

class App extends Component{
  render() {
    return (
      <div className="App">
        <div class="container">  
          <h1>All items will go here</h1>
          <SearchForm />
          <Nav />
        </div>
        <div class="photo-container">
          <Photo />
        </div>
      </div>
    );
  }
}

export default App;
