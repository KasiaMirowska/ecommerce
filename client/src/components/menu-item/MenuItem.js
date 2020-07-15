import React from 'react';
import {MenuItemContainer, BackgroundImageContainer, ContentContainer, TitleContainer, SubtitleContainer} from './MenuItem.styles';
//import './MenuItem.styles.scss';
import {withRouter} from 'react-router-dom';

// export default withRouter(function MenuItem({ title, img, size, linkUrl, history, match}) {
//     return (
//         //if the menu item has size it will get the size class or be ignored
//         <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
//             <div className='background-image' style={{backgroundImage: `url(${img})`}} />
//             <div className='content'>
//                 <h1 className='title'>{title.toUpperCase()}</h1>
//                 <span className='subtitle'>SHOP NOW</span>
//             </div>
//         </div>

//     );
// })

export default withRouter(function MenuItem({ title, img, size, linkUrl, history, match}) {
    return (
        //if the menu item has size it will get the size class or be ignored
        <MenuItemContainer size={size} onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <BackgroundImageContainer style={{backgroundImage: `url(${img})`}} />
            <ContentContainer>
                <TitleContainer>{title.toUpperCase()}</TitleContainer>
                <SubtitleContainer>SHOP NOW</SubtitleContainer>
            </ContentContainer>
        </MenuItemContainer>

    );
})