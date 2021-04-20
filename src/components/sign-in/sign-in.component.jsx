import React, { Component } from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import { auth, signInWIthGoogle } from '../../firebase/firebase.utils'


import './sign-in.styles.scss';
import { Link } from 'react-router-dom';

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

        try{
            await auth.signInWithEmailAndPassword(email, password);

            this.setState({email: '', password: ''});
        }catch(error){
            console.error(error);
        }

        
    }

    handleChange = (event) => {
     
        const { value, name } = event.target;

        this.setState({ [name]: value }); 
        
    }

    
     
    render(){
        return(
            <div>
            <div className='sign-in'>
                <h2>Already have an account?</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput type='email' name='email' value={this.state.email} handleChange={this.handleChange}  label='Email' required />
                   
                    <FormInput type='password' name='password' value={this.state.password} handleChange={this.handleChange} label='Password' required />
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
                <p>Don't have an account?<span><Link to='/signup'> Sign Up </Link></span></p>
            </div>  
            </div>
        )
    }
}

export default (SignIn);
