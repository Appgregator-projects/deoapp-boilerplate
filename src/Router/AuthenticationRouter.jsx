import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from '../Pages/Authentication/LoginPage'
import SigunUpPage from '../Pages/Authentication/SignUpPage'



const AuthenticationRouter = [
	{
		path: '/',
		element: <LoginPage />,
	},
	{
		path: '/login',
		element: <LoginPage />,
	},
	{
		path: '/signup',
		element: <SigunUpPage />,
	}
];

export default AuthenticationRouter