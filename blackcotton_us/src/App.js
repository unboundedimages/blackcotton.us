import React from 'react';
import Banner from './Banner';
import Cottondiv from './cottonbackground';
import Cottongirl from './CottonGirl';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">       
        <Banner/>
        <Cottondiv />
        <Cottongirl />
      </div>
    );

  }
}

export default App;
