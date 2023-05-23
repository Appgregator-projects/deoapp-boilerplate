import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react'
import { auth } from '../../Config/firebase';

function SigunUpPage() {

	const handleSignUp = (email, password) => {
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const user = userCredential.user;
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
			});
	}

	return (
		<div>SigunUpPage</div>
	)
}

export default SigunUpPage