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
      images: []
    };
  }

  componentDidMount(){
    axios.get('https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=622ac78a6d9e7d1350206211b652a6af&tags=Cats&text=Cats&per_page=24&format=json&nojsoncallback=1')
    .then(response => {
      console.log(response.data.photos)
      this.setState({
        images: response.data.photos
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
        <Router />
      </div>
    );
  }
}

export default App;
