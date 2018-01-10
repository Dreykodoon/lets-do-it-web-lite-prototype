import React, { Component } from 'react';
import Webcam from 'react-webcam';

const styles = {
    container: {
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '50%',
      height: '500px',
    },
    camera: {
      position: 'absolute',
    },
    button: {
      position: 'relative',
      top: '80%',
      left: '50%',
      width: '100px',
      marginLeft: '-50px'
    },
  };

class Camera extends Component {
    render() {
        return (
            <div style={styles.container}>
                <Webcam style={styles.camera} audio={false}/>
                <button style={styles.button}>Click me</button>
            </div>
        );
    }
};

export default Camera;