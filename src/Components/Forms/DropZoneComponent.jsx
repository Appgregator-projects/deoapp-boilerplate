import {
	Box, Container, FormControl, Button,
	Center,
	HStack,
	Icon,
	Square,
	Text,
	useColorModeValue,
	VStack, FormLabel
} from '@chakra-ui/react'
import { FiUploadCloud } from 'react-icons/fi'

export const DropZoneComponent = () => {

	const Dropzone = (props) => (
		<Center
			borderWidth="1px"
			borderRadius="lg"
			px="6"
			py="4"
			bg={useColorModeValue('white', 'gray.800')}
			{...props}
		>
			<VStack spacing="3">
				<Square size="10" bg="bg-subtle" borderRadius="lg">
					<Icon as={FiUploadCloud} boxSize="5" color="muted" />
				</Square>
				<VStack spacing="1">
					<HStack spacing="1" whiteSpace="nowrap">
						<Button variant="link" colorScheme="blue" size="sm">
							Click to upload
						</Button>
						<Text fontSize="sm" color="muted">
							or drag and drop
						</Text>
					</HStack>
					<Text fontSize="xs" color="muted">
						PNG, JPG or GIF up to 2MB
					</Text>
				</VStack>
			</VStack>
		</Center>
	)

	return (
		<Box
			as="section"
			bg="bg-surface"
			py={{
				base: '4',
				md: '8',
			}}
		>
			<Container maxW="lg">
				<FormControl id="file">
					<FormLabel>Dropzone</FormLabel>
					<Dropzone />
				</FormControl>
			</Container>
		</Box>
	)
}