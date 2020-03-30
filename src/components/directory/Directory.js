import React from 'react';
import './Directory.styles.scss';
import MenuItem from '../menu-item/MenuItem';
import sections from '../../dummyData';

export default class Directory extends React.Component {
    constructor() {
        super()
        this.state = {
            sections: sections,
        }
    }
    render() {
        const sections = this.state.sections.map(section => (
            <MenuItem
                title={section.title}
                img={section.imageUrl}
                id={section.id}
                size={section.size}
            />
        ));
        return (
            <div className='directory-menu'>
                {sections}
            </div>
        );
    }

}