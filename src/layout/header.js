import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <div>
                <Link to='/camera'>Camera</Link>
                <Link to='/gallery'>Gallery</Link>
            </div>
        );
    }
};

export default Header;