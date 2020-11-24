import React from 'react';
import img from './error.jpg';
import './errorMessage.scss';

const ErrorMessage = () => {
    return (
        <div className='random-block__error'>
            <img src={img} alt='error'/>
            <span className='random-block__message'>Something went wrong!!!</span>
        </div>
    )
}

export default ErrorMessage;