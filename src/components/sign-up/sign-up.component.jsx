import React, { Component } from 'react';
import { connect } from 'react-redux';

import { signupStart } from '../../redux/user/user.actions';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

import './sign-up.styles.scss';


class SignUp extends Component{

    constructor(props){
        super(props);
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
    }

    handleSubmit = async (event) => {
        const {signupStart} = this.props;
        event.preventDefault();

        const {displayName, email, password, confirmPassword } = this.state

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

    handleChange = event => {
        // destructure off the event
       const { name, value } = event.target;

       this.setState({ [name]: value })
    }
    render(){
        const { displayName, email, password, confirmPassword } = this.state
        return(
            <div className='sign-up'>
                <h2 className='title'>I don't have an account</h2>
                <span>Sign up with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput type='text' name='displayName' value={displayName} label='Display Name' required onChange={this.handleChange} />

                    <FormInput type='email' name='email' value={email} label='Email' required onChange={this.handleChange} />

                    <FormInput type='password' name='password' value={password} label='Password' required onChange={this.handleChange} />

                    <FormInput type='password' name='confirmPassword' value={confirmPassword} label='Confirm Password' required onChange={this.handleChange} />

                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </div>
        )
    }

};

const mapDispatchToProps = dispatch => ({
    signupStart: (usercredentials) => dispatch(signupStart(usercredentials))
})
export default connect(null, mapDispatchToProps)(SignUp);