import {
	Box,
	Button,
	Checkbox,
	Container,
	Divider,
	FormControl,
	FormLabel,
	Heading,
	HStack,
	Input,
	Stack,
	Text,
} from '@chakra-ui/react'
import { useState } from 'react'
import { loginUser } from '../../Apis/firebaseApi'
import { Logo } from '../../Components/Logo'
import { useGlobalDispatch } from '../../Hooks/Contexts'
// import { OAuthButtonGroup } from './OAuthButtonGroup'
// import { PasswordField } from './PasswordField'

function LoginPage() {
	// ** Hooks
	const dispatch = useGlobalDispatch();

	// ** States
	const [data, setData] = useState({})
	const [loading, setLoading] = useState(false)

	// ** Handle
	const handleLogin = async () => {
		setLoading(true)
		await loginUser(data.email, data.password, dispatch)
		setLoading(false)
	}

	return (
		<Container
			maxW="lg"
			py={{
				base: '12',
				md: '24',
			}}
			px={{
				base: '0',
				sm: '8',
			}}
		>
			<Stack spacing="8">
				<Stack spacing="6">
					<Logo />
					<Stack
						spacing={{
							base: '2',
							md: '3',
						}}
						textAlign="center"
					>
						<Heading
							size={{
								base: 'xs',
								md: 'sm',
							}}
						>
							Log in to your account
						</Heading>
						<HStack spacing="1" justify="center">
							<Text color="muted">Don't have an account?</Text>
							<Button variant="link" colorScheme="blue">
								Sign up
							</Button>
						</HStack>
					</Stack>
				</Stack>
				<Box
					py={{
						base: '0',
						sm: '8',
					}}
					px={{
						base: '4',
						sm: '10',
					}}
					bg={{
						base: 'transparent',
						sm: 'bg-surface',
					}}
					boxShadow={{
						base: 'none',
						sm: 'md',
					}}
					borderRadius={{
						base: 'none',
						sm: 'xl',
					}}
				>
					<Stack spacing="6">
						<Stack spacing="5">
							<FormControl>
								<FormLabel htmlFor="email">Email</FormLabel>
								<Input id="email" type="email" onChange={(e) => setData({ ...data, email: e.target.value })} />
							</FormControl>
							<FormControl>
								<FormLabel htmlFor="password">Password</FormLabel>
								<Input id="password" type="password" onChange={(e) => setData({ ...data, password: e.target.value })} />
							</FormControl>
						</Stack>
						<HStack justify="space-between">
							<Checkbox defaultChecked>Remember me</Checkbox>
							<Button variant="link" colorScheme="blue" size="sm">
								Forgot password?
							</Button>
						</HStack>
						<Stack spacing="6">
							{!loading ?
								<Button variant="primary" onClick={() => handleLogin()}>Sign in</Button>
								:
								<Button isLoading variant="primary" onClick={() => handleLogin()}>Sign in</Button>

							}
							<HStack>
								<Divider />
								<Text fontSize="sm" whiteSpace="nowrap" color="muted">
									or continue with
								</Text>
								<Divider />
							</HStack>
							{/* <OAuthButtonGroup /> */}
						</Stack>
					</Stack>
				</Box>
			</Stack>
		</Container>
	)
}






export default LoginPage