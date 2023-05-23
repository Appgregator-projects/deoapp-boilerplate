import { Box, Flex, Heading, Icon, Text } from '@chakra-ui/react'
import React from 'react'
import { FiYoutube } from 'react-icons/fi'
import { Link } from 'react-router-dom'

function IconCardComponent(props) {
	let data = {}
	if (props.data)
		data = props.data
	else
		data = { icon: FiYoutube, title: 'Youtube', description: 'this is the description', link: 'account' }

	// console.log(data)

	return (
		<Flex shadow='base' borderRadius='md' borderColor='brand.10' border='1px' p='2' m='2'>
			<Icon boxSize='10' as={data.icon} p='2' />
			<Link to={data.link}>
				<Box>
					<Heading fontSize='sm'>{data.title}</Heading>
					<Text>{data.description}</Text>
				</Box >
			</Link>

		</Flex >
	)
}

export default IconCardComponent