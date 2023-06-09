import {
	Avatar,
	Box,
	Button,
	ButtonGroup,
	Container,
	Flex,
	HStack,
	IconButton,
	useBreakpointValue,
	useColorMode,
} from '@chakra-ui/react'
import { FiHelpCircle, FiMenu, FiSearch, FiSettings } from 'react-icons/fi'
import { Logo } from '../Logo'

export const NavBarWithAvatarComponent = () => {
	const { colorMode, toggleColorMode } = useColorMode()

	const isDesktop = useBreakpointValue({ base: false, lg: true })
	return (
		<Box pb={{ base: '12', md: '24' }}>
			<Box as="nav" bg="bg-surface" boxShadow="sm">
				<Container py={{ base: '3', lg: '4' }} maxW='7xl'>
					<Flex justify="space-between">
						<HStack spacing="4">
							<Logo />
							{isDesktop && (
								<ButtonGroup variant="ghost" spacing="1">
									<Button>Home</Button>
									<Button aria-current="page">Dashboard</Button>
									<Button>Tasks</Button>
									<Button>Bookmarks</Button>
									<Button>Users</Button>
								</ButtonGroup>
							)}
						</HStack>
						{isDesktop ? (
							<HStack spacing="4">
								<ButtonGroup variant="ghost" spacing="1">
									<IconButton icon={<FiSearch fontSize="1.25rem" />} aria-label="Search" />
									<IconButton icon={<FiSettings fontSize="1.25rem" />} aria-label="Settings" />
									<IconButton icon={<FiHelpCircle fontSize="1.25rem" />} aria-label="Help Center" />
								</ButtonGroup>
								<Button onClick={toggleColorMode}>
									Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
								</Button>
								<Avatar boxSize="10" name="Christoph Winston" src="https://tinyurl.com/yhkm2ek8" />
							</HStack>
						) : (
							<IconButton
								variant="ghost"
								icon={<FiMenu fontSize="1.25rem" />}
								aria-label="Open Menu"
							/>
						)}
					</Flex>
				</Container>
			</Box>
		</Box>
	)
}