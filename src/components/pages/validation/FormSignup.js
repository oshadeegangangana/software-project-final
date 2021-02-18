import React from 'react';
import useForm from './useForm';
import validate from './validateInfo';
import './Form.css';
            

const FormSignup = ({ submitForm }) => {
    const {handleChange, values, handleSubmit, errors } 
    = useForm (
        submitForm, 
        validate
        );

    return (
        <div className="form-content-right">
            <form className="form" onSubmit={handleSubmit}>
               <h1>
                   Get started with us today! Create your
                   account by filling out the information below.
                </h1> 
                   <div className="form-inputs">
                       <lable htmlFor='firstname'
                       className='form-lable'>
                           First Name
                           </lable>
                           <input 
                           id='firstname'
                           type='text' 
                           name='firstname'
                           className='form-input'
                           placeholder="Enter your firstname"
                           value={values.firstname} 
                           onChange={handleChange}
                           />
                           {errors.firstname && <p>{errors.firstname}</p>}
                   </div>
                   <div className="form-inputs">
                       <lable htmlFor='lastname'
                       className='form-lable'>
                           Last Name
                       </lable>
                       <input
                           id='lastname'
                           type='text' 
                           name='lastname'
                           className='form-input'
                           placeholder="Enter your lastname"
                           value={values.lastname} 
                           onChange={handleChange} 
                           />
                           {errors.lastname && <p>{errors.lastname}</p>}
                   </div>
                   <div className="form-inputs">
                       <lable htmlFor='age'
                       className='form-lable'>
                           Age
                       </lable>
                       <input 
                           id='age'
                           type='text' 
                           name='age'
                           className='form-input'
                           placeholder="Enter your age" 
                           value={values.age} 
                           onChange={handleChange}
                           />
                   </div>
                   <div className="form-inputs">
                       <lable htmlFor='telephonenumber'
                       className='form-lable'>
                           Telephone Number
                          
                       </lable>
                       <input
                           id='telephonenumber' 
                           type='text' 
                           name='telephonenumber'
                           className='form-input'
                           placeholder="Enter your telephone number"
                           value={values.telephonenumber} 
                           onChange={handleChange} 
                           />
                   </div>
                   <div className="form-inputs">
                       <lable htmlFor='email'
                       className='form-lable'>
                           Email
                       </lable>
                       <input 
                           id='email'
                           type='email' 
                           name='email'
                           className='form-input'
                           placeholder="Enter your email" 
                           value={values.email} 
                           onChange={handleChange}
                           />
                           {errors.email && <p>{errors.email}</p>}

                   </div>
                   <div className="form-inputs">
                       <lable htmlFor='password'
                       className='form-lable'>
                          Password
                       </lable>
                       <input
                           id='password' 
                           type='password' 
                           name='password'
                           className='form-input'
                           placeholder="Enter your password"
                           value={values.password} 
                           onChange={handleChange} 
                           />
                           {errors.password && <p>{errors.password}</p>}
                   </div>
                   <div className="form-inputs">
                       <lable htmlFor='password2'
                       className='form-lable'>
                           Confirm Password
                       </lable>
                       <input
                           id='password2'  
            
                           type='password'  
                           name='password2'
                           className='form-input'
                           placeholder="Re-enter your password" 
                           value={values.password2} 
                           onChange={handleChange}
                           />
                           {errors.password2 && <p>{errors.password2}</p>}
                   </div>
                   <button className="form-input-btn" 
                   type='submit'>
                       Register
                   </button>
                   <span className="form-input-login">
                         Already have an account? Login <a href="#">here</a>
                   </span>
            </form>
        </div>
    )
}

export default FormSignup
