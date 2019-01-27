import React, { Component } from 'react';
import ToDo from './ToDo/ToDo'

import Auth from './Auth/Auth';
import Todo from './ToDo/ToDo';
// import Router from './Navigation/Router'

class App extends Component {

  render() {
    return (
      <Auth >
        <Todo />
      </Auth>
    );
  }
}

export default App;
