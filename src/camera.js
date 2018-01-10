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
    takePhoto() {
        const { webcam } = this.state;
        const imageSrc = webcam.getScreenshot();
        console.log(imageSrc);
    }

    setRef = (webcam) => {
        this.setState({ webcam });
    }

    render() {
        return (
            <div style={styles.container}>
                <Webcam style={styles.camera} audio={false} ref={this.setRef}/>
                <button style={styles.button} onClick={this.takePhoto.bind(this)}>Click me</button>
            </div>
        );
    }
};

export default Camera;