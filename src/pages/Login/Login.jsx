import React from 'react'
import SignIn from '../../components/SignIn/SignIn'
import SignUp from '../../components/SignUp/SignUp'
import { LoginContainer } from './Login.styles'

const Login = () => (
	<LoginContainer>
		<SignIn/>
		<SignUp/>
	</LoginContainer>
)

export default Login