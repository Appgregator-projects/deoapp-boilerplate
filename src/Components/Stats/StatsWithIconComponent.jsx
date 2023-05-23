import { Box, Container, HStack, SimpleGrid, Icon, Square, Heading, Stack, Text } from '@chakra-ui/react'
import { FiArrowDownRight, FiArrowUpRight, FiMail, FiMoreVertical, FiSend, FiUser } from 'react-icons/fi'

export const StatsWithIconComponent = (props) => {
	//dont forget to send data from PAGE to props here
	// <StatsWithIcon data={data}/> || from parent
	// const stats = data.data || here

	const stats = [
		{
			icon: FiUser,
			label: 'Total Subscribers',
			value: '71,887',
			delta: {
				value: '320',
				isUpwardsTrend: true,
			},
		},
		{
			icon: FiMail,
			label: 'Avg. Open Rate',
			value: '56.87%',
			delta: {
				value: '2.3%',
				isUpwardsTrend: true,
			},
		},
		{
			icon: FiSend,
			label: 'Avg. Click Rate',
			value: '12.87%',
			delta: {
				value: '0.1%',
				isUpwardsTrend: false,
			},
		},
	]

	const Stat = (props) => {
		const { label, value, icon, delta, ...boxProps } = props
		return (
			<Box
				px={{
					base: '4',
					md: '6',
				}}
				py={{
					base: '5',
					md: '6',
				}}
				bg="bg-surface"
				borderRadius="lg"
				boxShadow="sm"

				{...boxProps}
			>
				<Stack
					spacing={{
						base: '5',
						md: '6',
					}}
				>
					<Stack direction="row" justify="space-between">
						<HStack spacing="4">
							<Square size="12" bg="bg-accent-subtle" borderRadius="md">
								<Icon as={icon} boxSize="6" color="on-accent" />
							</Square>
							<Text fontWeight="medium">{label}</Text>
						</HStack>
						<Icon as={FiMoreVertical} boxSize="5" color="muted" />
					</Stack>
					<Stack spacing="4">
						<Heading
							size={{
								base: 'sm',
								md: 'md',
							}}
						>
							{value}
						</Heading>
						<HStack spacing="1" fontWeight="medium">
							<Icon
								color={delta.isUpwardsTrend ? 'green' : 'red'}
								as={delta.isUpwardsTrend ? FiArrowUpRight : FiArrowDownRight}
								boxSize="5"
							/>
							<Text color={delta.isUpwardsTrend ? 'green' : 'red'}>{delta.value}</Text>
							<Text color="muted">vs last week</Text>
						</HStack>
					</Stack>
				</Stack>
			</Box>
		)
	}

	return (
		<Box
			as="section"
			py={{
				base: '4',
				md: '8',
			}}
		>
			<Container maxW='full'>
				<SimpleGrid
					columns={{
						base: 1,
						md: 3,
					}}
					gap={{
						base: '5',
						md: '6',
					}}
				>
					{stats.map((stat, id) => (
						<Stat key={id} {...stat} />
					))}
				</SimpleGrid>
			</Container>
		</Box>
	)
}