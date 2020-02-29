import React from 'react'
import fromInput from '../FormInput/FormInput'
import Button from '../Button/Button'
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils'

import './signup.scss'
import FormInput from '../FormInput/FormInput'

class SignUp extends React.Component {
	constructor() {
		super();

		this.state = {
			displayName: '',
			email: '',
			password: '',
			confirmPassword: ''
		}
	}

	render() {
		const {displayName, email, password, confirmPassword} = this.state
		return (
			<div className="sign-up">
				<h2 className="title">I do not have an account</h2>
				<span>Sign up with your email and password</span>
				<form className="sign-up-form" onSubmit={this.handleSubmit}>
					<FormInput
						type="text"
						name="displayName"
						value={displayName}
						onChange={this.handleChange}
						label="Display Name"
						required
					/>
					<FormInput
						type="email"
						name="email"
						value={displayName}
						onChange={this.handleChange}
						label="Email"
						required
					/>
					<FormInput
						type="password"
						name="password"
						value={password}
						onChange={this.handleChange}
						label="Password"
						required
					/>
					<FormInput
						type="password"
						name="confirmPassword"
						value={confirmPassword}
						onChange={this.handleChange}
						label="Display Name"
						required
					/>
				</form>
			</div>
		)
	}
}