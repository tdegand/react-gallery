import React, {Component} from 'react';
import './css/index.css'
import axios from 'axios';
import SearchForm from './components/Search';
import Nav from './components/Nav'
import Router from './components/Router';


class App extends Component{

  constructor() {
    super();
    this.state = {
      cats: [],
      dogs: [],
      computers: [],
      search: []
    };
  }

  //API call for the images to get it started
  componentDidMount(){
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=622ac78a6d9e7d1350206211b652a6af&tags=Cats&text=Cats&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      console.log(response.data.photos)
      this.setState({
        cats: response.data.photos
      })
    })
    .catch(error => {
      console.log(error);
    })
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=622ac78a6d9e7d1350206211b652a6af&tags=Dogs&text=Dogs&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      console.log(response.data.photos)
      this.setState({
        dogs: response.data.photos
      })
    })
    .catch(error => {
      console.log(error);
    })
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=622ac78a6d9e7d1350206211b652a6af&tags=Computers&text=Computers&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      console.log(response.data.photos)
      this.setState({
        computers: response.data.photos
      })
    })
    .catch(error => {
      console.log(error);
    })
  }

  render() {
    return (
      <div className="App">
        <div className="container">  
          <h1>All items will go here</h1>
          <SearchForm />
          <Nav />
        </div>
        <div className="photo-container">
        <Router  
          cats={this.state.cats}
          dogs={this.state.dogs}
          computers={this.state.computers}
        />
        </div>
      </div>
    );
  }
}

export default App;
