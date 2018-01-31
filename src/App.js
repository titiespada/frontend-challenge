import React, { Component } from 'react';
import NavigationBar from './components/NavigationBar';
import MainHeader from './components/MainHeader';
import MainContent from './components/MainContent';
import jsonComputerSystems from './static/systems-short-list.json';

class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <MainHeader />
        <MainContent data={jsonComputerSystems[0].systems} />
      </div>
    );
  }
}

export default App;
