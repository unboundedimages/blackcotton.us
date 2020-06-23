import React from 'react';
import Banner from './Banner';
import Whitediv from './whitebackground';
import Cottongirl from './CottonGirl';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">       
        <Banner/>
        <Whitediv />
        <Cottongirl />
      </div>
    );

  }
}

export default App;
