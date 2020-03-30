import React from 'react';
import './MenuItem.styles.scss';
import sections from '../../dummyData';


export default function MenuItem({ title, img, size }) {
   
    return (
        //if the menu item has size it will get the size class or be ignored
        <div className={`${size} menu-item`}>
            <div className='background-image' style={{backgroundImage: `url(${img})`}} />
            <div className='content'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>

    )
}