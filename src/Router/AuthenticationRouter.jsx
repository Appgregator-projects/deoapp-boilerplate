import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from '../Pages/Authentication/LoginPage'
import SigunUpPage from '../Pages/Authentication/SignUpPage'

function AuthenticationRouter() {
	return (
		<>
			<Routes>
				<Route path="/" element={<LoginPage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/signup" element={<SigunUpPage />} />
			</Routes>
		</>
	)
}

export default AuthenticationRouter