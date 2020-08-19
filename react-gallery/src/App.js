import React, {Component} from 'react';
import './css/index.css'
import axios from 'axios';
import SearchForm from './components/Search';
import NavRouter from './components/NavRouter';
import PhotoList from './components/PhotoList'
import NotFound from './components/NotFound';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

class App extends Component{

  constructor() {
    super();
    this.state = {
      cats: [],
      dogs: [],
      computers: [],
    };
  }

  componentDidMount() {
    this.fetchCats();
    this.fetchDogs();
    this.fetchComputers();
    this.searchHandler();
  }

  //API call for the images to get it started
  fetchCats(){
      axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=622ac78a6d9e7d1350206211b652a6af&tags=Cats&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          cats: response.data.photos.photo
        })
      })
      .catch(error => {
        console.log(error);
      })
  }

  fetchDogs(){
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=622ac78a6d9e7d1350206211b652a6af&tags=dogs&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({
        dogs: response.data.photos.photo
      })
    })
    .catch(error => {
      console.log(error);
    })
}

fetchComputers(){
  axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=622ac78a6d9e7d1350206211b652a6af&tags=Computers&per_page=24&format=json&nojsoncallback=1`)
  .then(response => {
    this.setState({
      computers: response.data.photos.photo
    })
  })
  .catch(error => {
    console.log(error);
  })
}
       
  searchHandler = (input) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=622ac78a6d9e7d1350206211b652a6af&tags=${input}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({
        data: response.data.photos.photo
      })
    })
    .catch(error => {
      console.log(error);
    }) 
  }

  render() {
    let pathname = window.location.pathname
    console.log(pathname)
    return ( 
      <Router>
        <div className="App">
          <div className="container">  

            <SearchForm  
            search={this.searchHandler}
            />

            <NavRouter  />
          </div>
          <div className="photo-container">
            {/* //renders the information based on what the route is  */}
            <Switch>

              <Route 
              exact path="/" 
              render={() => ( <PhotoList data={this.state.cats} /> )} 
              />

              <Route 
              exact path="/cats" 
              render={() => ( <PhotoList data={this.state.cats} /> )} 
              />

              <Route 
              exact path="/dogs" 
              render={() => ( <PhotoList data={this.state.dogs} /> )} 
              />

              <Route 
              exact path="/computers" 
              render={() => ( <PhotoList data={this.state.computers} /> )} 
              />

              <Route 
              exact path="/search/:query" 
              render={() => ( <PhotoList data={this.state.data} /> )} 
              />

              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
