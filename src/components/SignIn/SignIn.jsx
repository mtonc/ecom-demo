import React from 'react';
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';
import {auth, signInWithGoogle} from '../../firebase/firebase.utils';

import {
	SignInContainer,
	SignInTitle,
	ButtonsBarContainer
} from './SignIn.styles'

class SignIn extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: ''
		}
	}

	handleSubmit = async event => {
		event.preventDefault();
		
		const { email, password } = this.state

		try {
			await auth.signInWithEmailAndPassword(email, password)
			this.setState({email: ', password: '})
		} catch (error) {
			console.error(error)
		}

		this.setState({email: '', password: ''});
	}

	handleChange = event => {
		const {value, name} = event.target

		this.setState({ [name]: value})
	}

	render() {
		return (
			<SignInContainer>
				<SignInTitle>I already have an account</SignInTitle>
				<span>Sing in with your email and password.</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						name='email'
						type='email'
						value={this.state.email}
						handleChange={this.handleChange}
						label='email'
						required 
					/>

					<FormInput 
						name='password' 
						type='password' 
						value={this.state.password} 
						handleChange={this.handleChange}
						label='password'
						required 
					/>
					<ButtonsBarContainer>
						<Button type='submit' value='Submit Form' >SIGN IN</Button>
						<Button onClick={signInWithGoogle} isGoogleSignIn>SIGN IN WITH GOOGLE</Button>
					</ButtonsBarContainer>
				</form>
			</SignInContainer>
		)
	}
}

export default SignIn;