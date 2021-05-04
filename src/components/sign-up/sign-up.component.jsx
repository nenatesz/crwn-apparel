import React, { useState } from 'react';
import { connect } from 'react-redux';

import { signupStart } from '../../redux/user/user.actions';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

import './sign-up.styles.scss';

const SignUp  = ({signupStart}) => { 
    
    const [userCredentials, setCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',})
    
    const {displayName, email, password, confirmPassword } = userCredentials

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(password !== confirmPassword){
            alert("passwords don't match");
            return;
        }
        signupStart({displayName, email, password})

        // try{
        //     const { user } = await auth.createUserWithEmailAndPassword(email, password);

        //     await createUserProfileDocument(user, {displayName})
            
        //     this.setState({
        //     displayName: '',
        //     email: '',
        //     password: '',
        //     confirmPassword: ''          
        //     })

        // }catch(error){
        //     console.error(error);
        // }
    }

    const handleChange = event => {
        // destructure off the event
       const { name, value } = event.target;

       setCredentials({...userCredentials, [name]: value })
    }
    
        
        return(
            <div className='sign-up'>
                <h2 className='title'>I don't have an account</h2>
                <span>Sign up with your email and password</span>
                <form onSubmit={handleSubmit}>
                    <FormInput type='text' name='displayName' value={displayName} label='Display Name' required onChange={handleChange} />

                    <FormInput type='email' name='email' value={email} label='Email' required onChange={handleChange} />

                    <FormInput type='password' name='password' value={password} label='Password' required onChange={handleChange} />

                    <FormInput type='password' name='confirmPassword' value={confirmPassword} label='Confirm Password' required onChange={handleChange} />

                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </div>
        )
    };

const mapDispatchToProps = dispatch => ({
    signupStart: (usercredentials) => dispatch(signupStart(usercredentials))
})
export default connect(null, mapDispatchToProps)(SignUp);