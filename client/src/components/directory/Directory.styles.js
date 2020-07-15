import styled from 'styled-components';

export const DirectorySectionsContainer = styled.div `

width: 100%;
display: flex;
flex-wrap: wrap;
justify-content: space-between;

    @media (max-width: 800px) {
        width: 100%;
        display: block
    }
    //somehow @media is reversed!
`