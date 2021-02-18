import React, { useState } from 'react'
import '../../../App.css';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess'
import './Form.css';

const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false)

    function submitForm() {
        setIsSubmitted(true)
    }
    return (
        <>
        <div className='form-container'>
            <span className='close-btn'>X</span>
            <div className='form-content-left'>
                <img className='form-img' />
            </div>
            {!isSubmitted ? (
            <FormSignup submitForm={submitForm} />
            ) : (
                <FormSuccess />
            )}
        </div>
        </>
    )
}

export default Form

