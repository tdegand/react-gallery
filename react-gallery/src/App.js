import React, {Component} from 'react';
import './css/index.css'
import SearchForm from './components/Search';
import Nav from './components/Nav'
import PhotoCon from './components/Photocon';

class App extends Component{
  render() {
    return (
      <div className="App">
        <div class="container">  
          <h1>All items will go here</h1>
          <SearchForm />
          <Nav />
        </div>[-]
        <div class="photo-container">
          
        </div>
      </div>
    );
  }
}

export default App;
