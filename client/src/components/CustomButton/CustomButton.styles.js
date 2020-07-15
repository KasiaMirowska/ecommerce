import styled, {css} from 'styled-components';

//instead of conditionally rendering classes in the component to implement different rendering needs we will condionally render css bloks here inside the styled component
const getButtonStyles = props => {
    if(props.googleSignInS) {
        return googleSignInStyles;
    } 
    return props.inverted? invertedButtonStyles : buttonStyles;
}


const invertedButtonStyles = css `
    background-color: white;
    color: black;

    &:hover {
    background-color:black;
    color: white;
    }
`

const googleSignInStyles = css `
    background-color: #4285f4;
    color: white;

    &:hover {
        background-color:#357ae8;
        border: none;
    }
`

const buttonStyles = css `
    background-color: black;
    color: white;

    &:hover {
        background-color: rgb(210, 250, 81);
        color: black;
        }
`
export const CustomButtonContaner = styled.button `
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    border: none;
    cursor: pointer;
    display:flex;
    justify-content: center;

    ${getButtonStyles} 
    // calling the above function determining which style to render

`