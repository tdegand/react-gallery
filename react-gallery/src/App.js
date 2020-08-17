import React, {Component} from 'react';
import './css/index.css'
import SearchForm from './components/Search';
import Nav from './components/Nav'
import Photo from './components/Photo'
import NotFound from './components/NotFound'
import { Route, BrowserRouter, Switch } from 'react-router-dom';


class App extends Component{
  render() {
    return (
      <div className="App">
        <div className="container">  
          <h1>All items will go here</h1>
          <SearchForm />
          <Nav />
        </div>
        <BrowserRouter>
          <div className="photo-container">
            <Switch>
              <Route exact path="/" component={Photo} />
              <Route path="/cats" component={Photo} />
              <Route path="/dogs" component={Photo} />
              <Route path="/computers" component={Photo} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
