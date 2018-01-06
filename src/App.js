import React, { Component } from 'react';
import Webcam from 'react-webcam';

class App extends Component {
  render() {
    return (
      <div>
        <Webcam audio={false}/>
      </div>
    );
  }
}

export default App;
