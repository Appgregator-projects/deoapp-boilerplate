import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DashboardPage from '../Pages/Dashboard/DashboardPage'
import ExamplePage from '../Pages/Example/ExamplePage'

// function DashboardRouter() {
// 	return (
// 		<Routes>
// 			<Route path="/" element={<DashboardPage />} />
// 			<Route path="/dashboard" element={<DashboardPage />} />
// 			<Route path="/dashboard/:id" element={<DashboardPage />} />
// 		</Routes>
// 	)
// }

const DashboardRouter = [
	{
		path: "/",
		element: <DashboardPage />
	},
	{
		path: "/dashboard",
		element: <ExamplePage />
	},
	{
		path: "/dashboard/:id",
		element: <DashboardPage />
	}
]

export default DashboardRouter