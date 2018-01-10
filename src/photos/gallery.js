import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Photo from './photo';

class Gallery extends Component {
    render() {
        const { photos } = this.props;
        return (
            <div>
                A series of trash photos.
                {photos.map((photo, index) => <Photo key={index} src={photo.src}/>)}
            </div>
        );
    }
};

Gallery.propTypes = {
    addPphotoshoto: PropTypes.array,
};

const mapStateToProps = (state) => {
    return {
        photos: state.photos,
    };
};

export default connect(mapStateToProps)(Gallery);