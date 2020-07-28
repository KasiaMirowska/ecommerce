import React from 'react';
//import './Directory.styles.scss';
import {DirectorySectionsContainer} from './Directory.styles';
import MenuItem from '../menu-item/MenuItem';
import {selectDirectorySections} from '../../redux/directory/directory.selectors'
import { connect } from 'react-redux';


export const Directory = (props) => {
    const sections = props.sections.map(section => (
        <MenuItem
            key={section.id}
            title={section.title}
            img={section.imageUrl}
            id={section.id}
            size={section.size}
            linkUrl={section.linkUrl}
        />
    ));

    return (
        <DirectorySectionsContainer>
            {sections}
        </DirectorySectionsContainer>
    );
}

const mapStateToProps = state => ({
    sections: selectDirectorySections(state)
})


export default connect(mapStateToProps)(Directory);