import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Photo from './photo';
import { getPhotos } from './photo-actions';

class Gallery extends Component {
    componentWillMount() {
        this.props.loadPhotos();
    }

    render() {
        const { photos } = this.props;
        return (
            <div>
                A series of trash photos.
                {photos.map((photo, index) => <Photo key={index} src={photo.src}/>)}
            </div>
        );
    }
}

Gallery.propTypes = {
    addPphotoshoto: PropTypes.array,
    loadPhotos: PropTypes.func,
    dispatch: PropTypes.func,
    photos: PropTypes.array,
};

const mapStateToProps = (state) => {
    return {
        photos: state.photos,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadPhotos: (photo) => dispatch(getPhotos(photo)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
