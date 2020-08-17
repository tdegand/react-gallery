import React, {Component} from 'react';
import './css/index.css'
import SearchForm from './components/Search';
import Nav from './components/Nav'
import Photo from './components/Photo'
import { Route, BrowserRouter } from 'react-router-dom';


class App extends Component{
  render() {
    return (
      <div className="App">
        <div class="container">  
          <h1>All items will go here</h1>
          <SearchForm />
          <Nav />
        </div>
        <BrowserRouter>
          <div class="photo-container">
            <Route exact path="/" component={Photo} />
            <Route path="/cats" component={Photo} />
            <Route path="/cats" component={Photo} />
            <Route path="/cats" component={Photo} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
