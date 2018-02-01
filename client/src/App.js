import React, { Component } from 'react';
import NavigationBar from './components/NavigationBar';
import MainHeader from './components/MainHeader';
import MainContent from './components/MainContent';

class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <MainHeader />
        <MainContent />
      </div>
    );
  }
}

export default App;
