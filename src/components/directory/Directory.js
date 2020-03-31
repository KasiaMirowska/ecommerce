import React from 'react';
import './Directory.styles.scss';
import MenuItem from '../menu-item/MenuItem';
import DATA from '../../dummyData';

export default class Directory extends React.Component {
    constructor() {
        super()
        this.state = {
            sections: DATA.sections,
        }
    }
    render() {
        const sections = this.state.sections.map(section => (
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
            <div className='directory-menu'>
                {sections}
            </div>
        );
    }

}