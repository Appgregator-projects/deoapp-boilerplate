import { Box, Container, Icon, Heading, Stack, Text, useBreakpointValue, Table, Tbody, Tr, Td, Button, Thead, Th, HStack, Tooltip, Flex, Badge } from '@chakra-ui/react'
import { FiCheck, FiInfo, FiMinus } from 'react-icons/fi'


export const PricingTableComponent = () => {
	const isMobile = useBreakpointValue({
		base: true,
		md: false,
	})

	const products = [
		{
			name: 'Basic',
			description: 'Oat cake chocolate liquorice jelly shortbread cake oat.',
			price: '$19',
			features: {
				// Features,
				Cupcakes: '10',
				Marshmallow: true,
				Biscuit: false,
				Brownie: false,
				// Analytics,
				Lollipop: 'Strawberry',
				Muffin: true,
				Pudding: false,
				Cookie: false,
				// Support
				Chocolate: true,
				Marzipan: false,
				Gingerbread: false,
			},
		},
		{
			name: 'Pro',
			isPopular: true,
			description: 'Caramels cupcake topping cookie tootsie roll macaroon.',
			price: '$29',
			features: {
				// Features,
				Cupcakes: '20',
				Marshmallow: true,
				Biscuit: false,
				Brownie: false,
				// Analytics,
				Lollipop: 'Cherry',
				Muffin: true,
				Pudding: true,
				Cookie: false,
				// Support
				Chocolate: true,
				Marzipan: true,
				Gingerbread: false,
			},
		},
		{
			name: 'Ultimate',
			description: 'Chocolate macaroon liquorice cheesecake donut toffee.',
			price: '$49',
			features: {
				// Features,
				Cupcakes: 'Unlimited',
				Marshmallow: true,
				Biscuit: true,
				Brownie: true,
				// Analytics,
				Lollipop: 'Apple',
				Muffin: true,
				Pudding: true,
				Cookie: true,
				// Support
				Chocolate: true,
				Marzipan: true,
				Gingerbread: true,
			},
		},
	]
	const features = [
		{
			category: 'Features',
			items: [
				{
					name: 'Marshmallow',
				},
				{
					name: 'Cupcakes',
					tooltip: 'Tiramisu caramels topping donut oat cake chocolate bar cookie jujubes.',
				},
				{
					name: 'Biscuit',
					tooltip: 'Tiramisu caramels topping donut oat cake chocolate bar cookie jujubes.',
				},
				{
					name: 'Brownie',
				},
			],
		},
		{
			category: 'Analytics',
			items: [
				{
					name: 'Lollipop',
				},
				{
					name: 'Muffin',
					tooltip: 'Tiramisu caramels topping donut oat cake chocolate bar cookie jujubes.',
				},
				{
					name: 'Pudding',
				},
				{
					name: 'Cookie',
				},
			],
		},
		{
			category: 'Support',
			items: [
				{
					name: 'Chocolate',
				},
				{
					name: 'Marzipan',
				},
				{
					name: 'Gingerbread',
					tooltip: 'Tiramisu caramels topping donut oat cake chocolate bar cookie jujubes.',
				},
				{
					name: 'Brownie',
				},
			],
		},
	]
	const Feature = (props) =>
		typeof props.value === 'boolean' ? (
			<Icon
				as={props.value ? FiCheck : FiMinus}
				boxSize="6"
				color={props.value ? 'accent' : 'subtle'}
			/>
		) : (
			<>{props.value}</>
		)

	const ProductCallToActionTable = (props) => {
		const { products, ...tableProps } = props
		return (
			<Table
				sx={{
					tableLayout: 'fixed',
				}}
				{...tableProps}
			>
				<Tbody>
					<Tr>
						{products.length > 1 && <Td borderBottomWidth="0px" />}
						{products.map((_, id) => (
							<Td key={id} borderBottomWidth="0px">
								<Stack spacing="3">
									<Button variant="primary" width="full">
										Buy now
									</Button>
									<Button variant="secondary" width="full">
										Talk to sales
									</Button>
								</Stack>
							</Td>
						))}
					</Tr>
				</Tbody>
			</Table>
		)
	}

	const ProductFeaturesTable = (props) => {
		const { products, ...tableProps } = props
		return (
			<>
				{features.map((feature, featureId) => (
					<Table
						key={featureId}
						sx={{
							tableLayout: 'fixed',
						}}
						variant="striped"
						{...tableProps}
					>
						<Thead>
							<Tr>
								<Th colSpan={products.length + 1} color="accent" fontSize="sm">
									{feature.category}
								</Th>
							</Tr>
						</Thead>
						<Tbody>
							{feature.items.map((item, id) => (
								<Tr key={id}>
									<Td fontWeight="semibold">
										<HStack spacing="1">
											<Text fontWeight="semibold">{item.name}</Text>
											{item.tooltip && (
												<Tooltip label={item.tooltip} placement="bottom-start">
													<Flex justify="center">
														<Icon as={FiInfo} boxSize="4" color="muted" alignSelf="bottom" />
													</Flex>
												</Tooltip>
											)}
										</HStack>
									</Td>
									{products.map((product, id) => (
										<Td
											key={id}
											textAlign={products.length > 1 ? 'center' : 'right'}
											height="16"
											color="muted"
										>
											<Feature value={product.features[item.name]} />
										</Td>
									))}
								</Tr>
							))}
						</Tbody>
					</Table>
				))}
			</>
		)
	}

	const ProductOverviewTable = (props) => {
		const { products, ...tableProps } = props
		return (
			<Table
				sx={{
					tableLayout: 'fixed',
				}}
				{...tableProps}
			>
				<Thead>
					<Tr>
						{products.length > 1 && <Td />}
						{products.map((product, id) => (
							<Td key={id} fontSize="xl" fontWeight="semibold">
								<HStack>
									<Text>{product.name}</Text>
									{product.isPopular && <Badge colorScheme="blue">Popular</Badge>}
								</HStack>
							</Td>
						))}
					</Tr>
				</Thead>
				<Tbody>
					<Tr>
						{products.length > 1 && <Td borderBottomWidth="0px" />}
						{products.map((product, id) => (
							<Td key={id} whiteSpace="normal" borderBottomWidth="0px">
								<Stack spacing="6">
									<Stack spacing="4">
										<Stack direction="row" align="baseline" spacing="1">
											<Heading size="lg" color="default">
												{product.price}
											</Heading>
											<Text fontWeight="medium" fontSize="medium" color="muted">
												/mo
											</Text>
										</Stack>

										<Text color="muted" fontSize="sm" whiteSpace="normal">
											{product.description}
										</Text>
									</Stack>
									<Button variant="primary">Buy now</Button>
								</Stack>
							</Td>
						))}
					</Tr>
				</Tbody>
			</Table>
		)
	}

	return (
		<Box
			as="section"
			bg="bg-surface"
			py={{
				base: '16',
				md: '24',
			}}
		>
			<Stack
				spacing={{
					base: '16',
					md: '24',
				}}
				shouldWrapChildren
			>
				<Container maxW='7xl'>
					<Stack
						spacing={{
							base: '4',
							md: '6',
						}}
						textAlign="center"
						align="center"
					>
						<Stack spacing="3">
							<Text color="accent" fontWeight="semibold">
								Pricing
							</Text>
							<Heading
								size={{
									base: 'md',
									md: 'lg',
								}}
							>
								Simple and fair pricing
							</Heading>
						</Stack>
						<Text
							fontSize={{
								base: 'lg',
								md: 'xl',
							}}
							color="muted"
							maxW="3xl"
						>
							Get access to 210+ components and free updates. Customize it to your needs, and make
							it yours today!
						</Text>
					</Stack>
				</Container>
				{isMobile ? (
					<Stack spacing="16">
						{products.map((product, id) => (
							<Container maxW='7xl'
								px={{
									base: '0',
								}}
								key={id}
							>
								<Stack
									spacing={{
										base: '5',
										md: '7',
									}}
								>
									<ProductOverviewTable products={[product]} />
									<ProductFeaturesTable products={[product]} />
									<ProductCallToActionTable products={[product]} />
								</Stack>
							</Container>
						))}
					</Stack>
				) : (
					<Container
						px={{
							base: '0',
							lg: '8',
						}}
						maxW='7xl'
					>
						<Stack
							spacing={{
								base: '5',
								md: '7',
							}}
						>
							<ProductOverviewTable products={products} />
							<ProductFeaturesTable products={products} />
							<ProductCallToActionTable products={products} />
						</Stack>
					</Container>
				)}
			</Stack>
		</Box>
	)
}