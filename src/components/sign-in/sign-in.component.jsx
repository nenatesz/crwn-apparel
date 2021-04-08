import React, { Component } from 'react';
import { withRouter } from 'react-router';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import { signInWIthGoogle, signInWithGoogle } from '../../firebase/firebase.utils'


import './sign-in.styles.scss';

class SignIn extends Component{

    constructor(props){
        super(props)

        this.state = {
            email: '',
            password: '',
        }
    }
    
    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({email: '', password: ''})
    }

    handleChange = (event) => {
     
        const { value, name } = event.target;

        this.setState({ [name]: value }); 
        
    }

    handleClick = () => {
        this.props.history.push('/signup')
    }

     
    render(){
        return(
            <div>
            <div className='sign-in'>
                <h2>Already have an account?</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput type='email' name='email' value={this.state.email} handleChange={this.handleChange}  label='Email' required />
                   
                    <FormInput type='password' name='password' value={this.state.password} onChange={this.handleChange} label='Password' required />
                    <div className='sign-in-buttons'>
                    <CustomButton type='submit'>Sign In</CustomButton>
                    <CustomButton isGoogleSignin onClick={ signInWIthGoogle }>
                        {''}
                        Sign in with Google 
                        {''}
                    </CustomButton>
                    </div>
                </form>
                
            </div>
            <div className='register'>
                <h3>Don't have an account?</h3>
                <CustomButton onClick={this.handleClick}>Sign Up</CustomButton></div>  
            </div>
        )
    }
}

export default withRouter(SignIn);
