import React from 'react';
import './FormInput.styles.scss';

export default function FormInput({onChange, label, ...otherProps}) {
    return (
        <div className='group'>
            <input className='form-input' onChange={onChange} {...otherProps} />
            {
                label? 
            (<label className={`${otherProps.value.lenght? 'shrink' : ''} form-input-label`}>{label}</label>) 
                : null
            }      

        </div>
    )
}