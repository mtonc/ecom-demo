import React from 'react';
import MenuItem from '../MenuItem/MenuItem';
import { connect } from 'react-redux'
import { selectDirectorySections } from '../../redux/directory/directory.selectors'
import { createStructuredSelector } from 'reselect'
import {DirectoryMenuContainer } from './Directory.styles'

const Directory = ({sections}) => (
            <DirectoryMenuContainer>
                {
                    sections.map( ({id, ...otherProps}) => (
                        <MenuItem key={id} {...otherProps} />
                    ))
                }
            </DirectoryMenuContainer>
)

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory)