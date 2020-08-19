import React, {Component} from 'react';
import './css/index.css'
import axios from 'axios';
import SearchForm from './components/Search';
import NavRouter from './components/NavRouter';
import PhotoList from './components/PhotoList'
import NotFound from './components/NotFound';
import apiKey from './config'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

class App extends Component{

  constructor() {
    super();
    this.state = {
      recent: [],
      cats: [],
      dogs: [],
      computers: [],
      name: []
    };
  }

  componentDidMount() {
    this.fetchRecent();
    this.fetchCats();
    this.fetchDogs();
    this.fetchComputers();
    this.searchHandler();
  }

  //API call for the images to get it started
  fetchRecent(){
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=Any&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({
        recent: response.data.photos.photo
      })
    })
    .catch(error => {
      console.log(error);
    })
}
// cat call
  fetchCats(){
      axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=Cats&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          cats: response.data.photos.photo
        })
      })
      .catch(error => {
        console.log(error);
      })
  }
// dog call
  fetchDogs(){
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=dogs&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({
        dogs: response.data.photos.photo
      })
    })
    .catch(error => {
      console.log(error);
    })
}
// computer call
fetchComputers(){
  axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=Computers&per_page=24&format=json&nojsoncallback=1`)
  .then(response => {
    this.setState({
      computers: response.data.photos.photo
    })
  })
  .catch(error => {
    console.log(error);
  })
}
    // search call (Only called when a user submits the search)
  searchHandler = (input) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${input}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({
        data: response.data.photos.photo,
        name: input
      })
    })
    .catch(error => {
      console.log(error);
    }) 
  }

  render() {
    return ( 
      <Router>
        <div className="App">
          <div className="container">  

            <SearchForm  
            search={this.searchHandler}
            />

            <NavRouter  />
          </div>
            {/* //renders the information based on what the route is  */}
            <Switch>

              {/* Home path */}
              <Route 
              exact path="/" 
              render={() => ( <PhotoList data={this.state.recent} name={'Recent'} /> )} 
              />

              <Route 
              exact path="/cats" 
              render={() => ( <PhotoList data={this.state.cats} name={'Cats'}  /> )} 
              />

              <Route 
              exact path="/dogs" 
              render={() => ( <PhotoList data={this.state.dogs} name={'Dogs'}  /> )} 
              />

              <Route 
              exact path="/computers" 
              render={() => ( <PhotoList data={this.state.computers} name={'Computers'}  /> )} 
              />

              <Route 
              exact path="/search/:query" 
              render={() => ( <PhotoList data={this.state.data} name={this.state.name} /> )} 
              />

              <Route component={NotFound} />
            </Switch>
          </div>
      </Router>
    );
  }
}

export default App;
