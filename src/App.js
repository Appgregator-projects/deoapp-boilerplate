import { Button, Center } from '@chakra-ui/react';
import { onAuthStateChanged } from 'firebase/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from './Config/firebase';
import AuthenticationRouter from './Router/AuthenticationRouter';
import DashboardRouter from './Router/DashboardRouter';
import ExampleRouter from './Router/ExampleRouter';
import MainRouter from './Router/MainRouter';

function App() {
	const [isLoggedin,setIsLoggedin]=useState(false)

	onAuthStateChanged(auth, (user) => {
		if (user) {

		  setIsLoggedin(true)
		} else {
	  setIsLoggedin(false)
		}
	  })

  return (
	<>


	{isLoggedin?
		<MainRouter/>
	:
		<AuthenticationRouter/>
	}
	</>
);
}

export default App;
