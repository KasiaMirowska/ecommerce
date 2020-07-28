import React from 'react';
import './FormInput.styles.scss';
import {
    GroupContainer,
    FormInputContainer,
    FormInputLabel
} from './FormInput.styles';

export default function FormInput({ handleChange, label, ...otherProps }) {
    return (
        <div className='group'>
            <input className='form-input' onChange={handleChange} {...otherProps} />
            {
                label? 
            (<label className={`${otherProps.value.lenght? 'shrink' : ''} form-input-label`}>{label}</label>) 
                : null
            }      

        </div>
        // <GroupContainer>
        //     <FormInputContainer onChange={onChange} {...props} />
        //     {label ? (
        //         <FormInputLabel className={props.value.length ? 'shrink' : ''}>
        //             {label}
        //         </FormInputLabel>
        //     ) : null}
        // </GroupContainer>
    )
}