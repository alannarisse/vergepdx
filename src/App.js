import React, { Component } from 'react';
import './styles/App.css';
import HeaderNavigation from './HeaderNavigation';
import Features from './Features';
import Venues from './Venues';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
      <HeaderNavigation />
        <div className="App-header">
          <header>Verge: Art Curation</header>
        </div>

        <Features />
        <Venues />
        <Footer />
      </div>
    );
  }
}

export default App;
