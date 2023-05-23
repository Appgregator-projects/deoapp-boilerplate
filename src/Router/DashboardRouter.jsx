import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DashboardPage from '../Pages/Dashboard/DashboardPage'

function DashboardRouter() {
	return (
		<Routes>
			<Route path="/" element={<DashboardPage />} />
			<Route path="/dashboard" element={<DashboardPage />} />
			<Route path="/dashboard/:id" element={<DashboardPage />} />
		</Routes>
	)
}

export default DashboardRouter