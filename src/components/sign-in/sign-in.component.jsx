import React, { useState } from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

import { Link } from 'react-router-dom';
import { emailSigninStart, googleSigninStart } from '../../redux/user/user.actions';
import { connect } from 'react-redux';
import {Register, SigninButtons, SigninContainer } from './sign-in.styles';

// import './sign-in.styles.scss';

const SignIn = ({emailSigninStart, googleSigninStart}) => {

    const [userCredentials, setCredentials] = useState({email: '', password: ''});
   
    const {email, password} = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();

        
        emailSigninStart({email, password})       
    }

    const handleChange = (event) => {    
        const { value, name } = event.target;
        setCredentials({ ...userCredentials, [name]: value });       
    };
       
        return(
            <>
            <SigninContainer>
                <h2>Already have an account?</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={handleSubmit}>
                    <FormInput type='email' name='email' value={email} handleChange={handleChange}  label='Email' required />
                   
                    <FormInput type='password' name='password' value={password} handleChange={handleChange} label='Password' required />
                    <SigninButtons>
                    <CustomButton type='submit'>Sign In</CustomButton>
                    <CustomButton type='button' isGoogleSignin onClick={ googleSigninStart }>
                        {''}
                        Sign in with Google 
                        {''}
                    </CustomButton>
                    </SigninButtons>
                </form>
                
            </SigninContainer>
            <Register>
                <p>Don't have an account?<span><Link to='/signup'> Sign Up </Link></span></p>
            </Register>  
            </>
        )
    }
;

const mapDispatchToProps = dispatch => ({
    googleSigninStart: () => dispatch(googleSigninStart()),
    emailSigninStart: (usercredentials) => dispatch(emailSigninStart(usercredentials))
});


export default connect(null, mapDispatchToProps)(SignIn);
