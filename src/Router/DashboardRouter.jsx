import React from 'react'
import DashboardPage from '../Pages/Dashboard/DashboardPage'
import ExamplePage from '../Pages/Example/ExamplePage'


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