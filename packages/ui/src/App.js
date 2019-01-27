import React, { Component } from 'react';

import Auth from './Auth/Auth';
import Router from './Navigation/Router'

class App extends Component {

  render() {
    return (
      <Auth >
        <Router />
      </Auth>
    );
  }
}

export default App;
