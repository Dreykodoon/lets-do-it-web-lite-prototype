import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Webcam from 'react-webcam';
import { connect } from 'react-redux';
import { addPhoto } from './photo-actions';

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
        this.props.addPhoto({src: webcam.getScreenshot()})
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

Camera.propTypes = {
    addPhoto: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => {
    return {
        addPhoto: (photo) => dispatch(addPhoto(photo)),
    };
};

export default connect(null, mapDispatchToProps)(Camera);