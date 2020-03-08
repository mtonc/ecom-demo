import React from 'react';
import MenuItem from '../MenuItem/MenuItem';
import SECTIONS_DATA from './sections'
import './directory.scss';

class Directory extends React.Component {
    constructor() {
        super();

        this.state={
            sections: SECTIONS_DATA
        }
    }

    render() {
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map( ({id, ...otherProps}) => (
                        <MenuItem key={id} {...otherProps} />
                    ))
                }
            </div>
        );
    }
}

export default Directory;