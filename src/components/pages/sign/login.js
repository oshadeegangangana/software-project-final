import React from 'react'
import './loginForm.css';
import '../../../App.css'

const login = () => {
    return (
       
        <div className='login-content'>
           <form className='form-login'>
               <h1>
                   Login
               </h1>
            
               <div className="login-inputs">
                   <table class="table-align">
                       <tr>
                           <td>
                                <lable htmlFor='email'
                       className='login-lable'>
                           Email
                                </lable>
                           </td>
                           <td>
                               <input 
                           id='email'
                           type='email' 
                           name='email'
                           className='login-input'
                           placeholder="Enter your email"
                                 />
                            </td>  
                     </tr>
                     <tr>
                         <td>
                         <lable htmlFor='password'
                       className='login-lable'>
                          Password
                    </lable>
                         </td>
                         <td>
                         <input
                           id='password' 
                           type='password' 
                           name='password'
                           className='login-input'
                           placeholder="Enter your password"
                            />
                         </td>
                     </tr>
                     <tr>
                         <td colspan="2">
                             <button className="submit-btn" 
                   type='submit'>
                       login
                            </button>
                          </td>
                     </tr>
                     
                   </table>
                </div>
                
            </form> 
        </div>
    )
}

export default login
