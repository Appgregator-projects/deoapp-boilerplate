import {
	AspectRatio,
	Box,
	Button,
	Center,
	Container,
	Icon,
	Image,
	Link,
	SimpleGrid,
	SlideFade,
	Stack,
	Text,
	useDisclosure,
} from '@chakra-ui/react'
import { FiChevronDown, FiPlayCircle } from 'react-icons/fi'
import { FiBarChart, FiFileText, FiGrid, FiMousePointer, FiRepeat, FiShield } from 'react-icons/fi'

export const MenuFullComponent = () => {
	const { isOpen, onToggle } = useDisclosure({
		defaultIsOpen: true,
	})

	const items = [
		{
			title: 'Resources',
			links: [
				{
					title: 'Analytics',
					description: 'Danish lollipop marzipan dragée gingerbread tart wafer sweet.',
					href: '#',
					icon: FiBarChart,
				},
				{
					title: 'Automations',
					description: 'Macaroon tiramisu tart bonbon apple pie jujubes brownie.',
					href: '#',
					icon: FiRepeat,
				},
				{
					title: 'Engagement',
					description: 'hupa chups donut caramels chocolate cake toffee.',
					href: '#',
					icon: FiMousePointer,
				},
			],
		},
		{
			title: 'Resources',
			links: [
				{
					title: 'Integrations',
					description: 'Dragée jujubes brownie pastry biscuit croissant wafer halva apple.',
					href: '#',
					icon: FiGrid,
				},
				{
					title: 'Reports',
					description: 'Candy oat cake caramels shortbread gummies.',
					href: '#',
					icon: FiFileText,
				},
				{
					title: 'Security',
					description: 'Bear claw topping toffee tiramisu cake fruitcake marzipan icing.',
					href: '#',
					icon: FiShield,
				},
			],
		},
	]

	const tutorials = [
		{
			title: 'Tutorials',
			links: [
				{
					title: 'Get started with Chakra UI',
					description: 'Danish lollipop marzipan dragée gingerbread tart wafer sweet.',
					previewImage: 'https://tinyurl.com/2p95wh2z',
					href: '#',
				},
				{
					title: 'Create your first component',
					description: 'Macaroon tiramisu tart bonbon apple pie jujubes brownie.',
					previewImage: 'https://tinyurl.com/4hhtd52m',
					href: '#',
				},
			],
		},
	]

	const PopoverIcon = (props) => {
		const iconStyles = {
			transform: props.isOpen ? 'rotate(-180deg)' : undefined,
			transition: 'transform 0.2s',
			transformOrigin: 'center',
		}
		return <Icon aria-hidden as={FiChevronDown} __css={iconStyles} />
	}
	return (
		<Box as="section" minH="md">
			<Container
				py={{
					base: '4',
					md: '5',
				}}
			>
				<Center>
					<Button variant="link" rightIcon={<PopoverIcon isOpen={isOpen} />} onClick={onToggle}>
						Resources
					</Button>
				</Center>
			</Container>
			<SlideFade in={isOpen}>
				<Box
					bg="bg-surface"
					boxShadow="md"
					pt={{
						base: '4',
						md: '8',
					}}
					pb="8"
				>
					<Container>
						<Stack
							direction={{
								base: 'column',
								lg: 'row',
							}}
							spacing={{
								base: '14',
								lg: '16',
							}}
						>
							<SimpleGrid
								columns={{
									base: 1,
									md: 2,
								}}
								maxW={{
									lg: '2xl',
								}}
								gap={6}
							>
								{items.map((item, id) => (
									<Stack key={id} spacing="3">
										<Text fontSize="sm" fontWeight="medium" color="accent">
											{item.title}
										</Text>
										<Stack>
											{item.links.map((link, id) => (
												<Link variant="menu" href={link.href} key={id}>
													<Stack spacing="4" direction="row" p="3">
														<Icon as={link.icon} boxSize="6" color="accent" />
														<Stack spacing="1">
															<Text fontWeight="medium">{link.title}</Text>
															<Text fontSize="sm" color="muted">
																{link.description}
															</Text>
														</Stack>
													</Stack>
												</Link>
											))}
										</Stack>
									</Stack>
								))}
							</SimpleGrid>
							{tutorials.map((item, id) => (
								<Stack key={id} spacing="6">
									<Text fontSize="sm" fontWeight="medium" color="accent">
										{item.title}
									</Text>
									<Stack
										spacing="8"
										direction={{
											base: 'column',
											md: 'row',
											lg: 'column',
										}}
									>
										{item.links.map((link, id) => (
											<Stack
												direction={{
													base: 'column',
													lg: 'row',
												}}
												spacing="6"
												key={id}
											>
												<Box>
													<AspectRatio
														ratio={3 / 2}
														width={{
															base: '60',
															lg: '40',
														}}
													>
														<Image
															borderRadius="md"
															objectFit="cover"
															src={link.previewImage}
															alt={link.title}
														/>
													</AspectRatio>
												</Box>

												<Stack spacing="3" shouldWrapChildren>
													<Stack spacing="1">
														<Text fontWeight="medium">{link.title}</Text>
														<Text fontSize="sm" color="muted">
															{link.description}
														</Text>
													</Stack>
													<Button
														variant="link"
														colorScheme="blue"
														leftIcon={<FiPlayCircle fontSize="1.25rem" />}
													>
														Watch video
													</Button>
												</Stack>
											</Stack>
										))}
									</Stack>
								</Stack>
							))}
						</Stack>
					</Container>
				</Box>
			</SlideFade>
		</Box>
	)
}