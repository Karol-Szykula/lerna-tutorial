import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <button
          >
            Sign out
          </button>
        </div>
        <div>
          <div>
            <input
              placeholder="Task description"
            />
          </div>
          <div>
            <button>
              Add Task
          </button>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
