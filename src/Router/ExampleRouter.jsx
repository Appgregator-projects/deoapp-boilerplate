import { Box, Container } from '@chakra-ui/react'
import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { NavBarWithAvatarComponent } from '../Components/Navbar/NavbarWithAvatarComponent'
import ExamplePage from '../Pages/Example/ExamplePage'


// function ExampleRouter() {

// 	return (<>
// 		<Container maxW='full'>
// 			<NavBarWithAvatarComponent />
// 			<Routes>
// 				<Route path="/" element={<ExamplePage />} />
// 			</Routes>
// 		</Container>
// 	</>
// 	)
// }

const ExampleRouter = [
	{
		path: "/",
		element: <ExamplePage />
	},
]

export default ExampleRouter