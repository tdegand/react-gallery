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
  withRouter
} from "react-router-dom";

class App extends Component{

  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  //API call for the images to get it started
  componentDidMount(){
      axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=622ac78a6d9e7d1350206211b652a6af&tags=${window.location.pathname}&text=${window.location.pathname}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          data: response.data.photos.photo
        })
      })
      .catch(error => {
        console.log(error);
      })
  }
       
  searchHandler = (input) => {
    // axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=622ac78a6d9e7d1350206211b652a6af&tags=${input}&text=${input}&per_page=24&format=json&nojsoncallback=1`)
    // .then(response => {
    //   this.setState({
    //     data: response.data.photos.photo
    //   })
    // })
    // .catch(error => {
    //   console.log(error);
    // }) 
  }

  render() {
    let pathName = (window.location.pathname)
    console.log(pathName)
    return ( 
      <Router>
      <div className="App">
        <div className="container">  
          <SearchForm  search={this.searchHandler()}/>
          <NavRouter  />
        </div>
        <div className="photo-container">
          {/* //renders the information based on what the route is  */}
          <Switch>
            <Route exact path="/" render={props => (
              <PhotoList data={this.state.data} />
            )} />
            <Route exact path="/:page" render={props => (
              <PhotoList data={this.state.data} />
            )} />
            {/* <Route path="/:page?search=" 
              <Redirect
            /> */}
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
