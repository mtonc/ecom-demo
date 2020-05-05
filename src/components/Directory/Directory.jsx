import React from 'react';
import MenuItem from '../MenuItem/MenuItem';
import { connect } from 'react-redux'
import { selectDirectortSections } from '../../redux/directory/director.selectors'
import { createStructuredSelector } from 'reselect'
import './directory.scss';

const Directory = ({sections}) => (
            <div className="directory-menu">
                {
                    sections.map( ({id, ...otherProps}) => (
                        <MenuItem key={id} {...otherProps} />
                    ))
                }
            </div>
)

const mapStateToProps = createStructuredSelector({
    sections: selectDirectortSections
})

export default connect(mapStateToProps)(Directory)