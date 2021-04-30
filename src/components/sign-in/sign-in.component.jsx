import React, { Component } from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

import { Link } from 'react-router-dom';
import { emailSigninStart, googleSigninStart } from '../../redux/user/user.actions';
import { connect } from 'react-redux';
import { Register, SigninButtons, SigninContainer } from './sign-in.styles';

// import './sign-in.styles.scss';

class SignIn extends Component{

    constructor(props){
        super(props)

        this.state = {
            email: '',
            password: '',
        }
    }
    
    handleSubmit =async event => {
        event.preventDefault();

        const {email, password} = this.state;
        const {emailSigninStart} = this.props;

        emailSigninStart({email, password})       
    }

    handleChange = (event) => {    
        const { value, name } = event.target;
        this.setState({ [name]: value });       
    }
     
    render(){
        const { googleSigninStart }  = this.props
        return(
            <>
            <SigninContainer>
                <h2>Already have an account?</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput type='email' name='email' value={this.state.email} handleChange={this.handleChange}  label='Email' required />
                   
                    <FormInput type='password' name='password' value={this.state.password} handleChange={this.handleChange} label='Password' required />
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
};

const mapDispatchToProps = dispatch => ({
    googleSigninStart: () => dispatch(googleSigninStart()),
    emailSigninStart: (usercredentials) => dispatch(emailSigninStart(usercredentials))
});


export default connect(null, mapDispatchToProps)(SignIn);
