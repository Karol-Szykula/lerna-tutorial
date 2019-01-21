import React, { Component } from 'react';
import ToDo from './ToDo/ToDo'

import Auth from './Auth/Auth';
import Todo from './ToDo/ToDo';

class App extends Component {

  render() {
    return (
      <Auth >
        <ToDo />
      </Auth>
    );
  }
}

export default App;
