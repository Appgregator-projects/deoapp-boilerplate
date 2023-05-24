import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DashboardPage from '../Pages/Dashboard/DashboardPage'

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
		element: <DashboardPage />
	},
	{
		path: "/dashboard/:id",
		element: <DashboardPage />
	}
]

export default DashboardRouter