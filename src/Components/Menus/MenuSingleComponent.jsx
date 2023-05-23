import {
	Button,
	Center,
	Container,
	Icon,
	Link,
	Popover,
	PopoverContent,
	PopoverTrigger,
	Stack,
	Text,
	useDisclosure,
} from '@chakra-ui/react'
import { FiBarChart, FiChevronDown, FiFileText, FiGrid, FiRepeat, FiShield } from 'react-icons/fi'

export const MenuSingleComponent = () => {
	const { isOpen, onClose, onOpen } = useDisclosure({
		defaultIsOpen: false,
	})

	const items = [
		{
			title: 'Analytics',
			description: 'Danish lollipop marzipan dragée gingerbread tart wafer sweet lemon.',
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
			title: 'Integrations',
			description: 'Dragée jujubes brownie pastry biscuit croissant wafer halvah apple pie',
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
			description: 'Bear claw topping toffee tiramisu cake fruitcake marzipan icing halvah.',
			href: '#',
			icon: FiShield,
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
		<Container
			as="section"
			minH="2xl"
			py={{
				base: '4',
				md: '5',
			}}
		>
			<Center>
				<Popover
					trigger="hover"
					onClose={onClose}
					onOpen={onOpen}
					isOpen={isOpen}
					placement="bottom"
					gutter={12}
				>
					{({ isOpen }) => (
						<>
							<PopoverTrigger>
								<Button variant="link" rightIcon={<PopoverIcon isOpen={isOpen} />}>
									Resources
								</Button>
							</PopoverTrigger>
							<PopoverContent width="sm" p="5">
								<Stack>
									{items.map((item, id) => (
										<Link variant="menu" href={item.href} key={id}>
											<Stack spacing="4" direction="row" p="3">
												<Icon as={item.icon} boxSize="6" color="accent" />
												<Stack spacing="1">
													<Text fontWeight="medium">{item.title}</Text>
													<Text fontSize="sm" color="muted">
														{item.description}
													</Text>
												</Stack>
											</Stack>
										</Link>
									))}
								</Stack>
							</PopoverContent>
						</>
					)}
				</Popover>
			</Center>
		</Container>
	)
}