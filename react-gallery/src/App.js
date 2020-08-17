import React, {Component} from 'react';
import './css/index.css'
import SearchForm from './components/Search';
import Nav from './components/Nav'
import Router from './components/Router';


class App extends Component{
  render() {
    return (
      <div className="App">
        <div className="container">  
          <h1>All items will go here</h1>
          <SearchForm />
          <Nav />
        </div>
        <Router />
      </div>
    );
  }
}

export default App;
