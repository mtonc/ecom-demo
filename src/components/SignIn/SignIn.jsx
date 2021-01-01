import React, { useState } from 'react';
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions'
import { connect } from 'react-redux'

import {
	SignInContainer,
	SignInTitle,
	ButtonsBarContainer
} from './SignIn.styles'

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
	const [userCredentials, setCredentials] = useState({ email: '', password: '' })
	const { email, password } = userCredentials

	const handleSubmit = async event => {
		event.preventDefault();

		emailSignInStart(email, password)
	}

	const handleChange = event => {
		const {value, name} = event.target

		setCredentials({ ...userCredentials, [name]: value})
	}

	return (
		<SignInContainer>
			<SignInTitle>I already have an account</SignInTitle>
			<span>Sing in with your email and password.</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					name='email'
					type='email'
					value={email}
					handleChange={handleChange}
					label='email'
					required 
				/>

				<FormInput 
					name='password' 
					type='password' 
					value={password} 
					handleChange={handleChange}
					label='password'
					required 
				/>
				<ButtonsBarContainer>
					<Button type='submit' value='Submit Form' >SIGN IN</Button>
					<Button type='button' onClick={googleSignInStart} isGoogleSignIn>SIGN IN WITH GOOGLE</Button>
				</ButtonsBarContainer>
			</form>
		</SignInContainer>
	)
}


const mapDispatchToProps = dispatch => ({
	googleSignInStart: () => dispatch(googleSignInStart()),
	emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn);