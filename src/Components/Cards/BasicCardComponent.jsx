import { ArrowRightIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons'
import { Box, color, Heading, HStack, Image, Spacer, Text } from '@chakra-ui/react'
import moment from 'moment'
import React from 'react'
import { Link } from 'react-router-dom'
import { convertMilisecond } from '../../Utils/timeUtil'

function BasicCardComponent(props) {

	let data = {}
	if (props.data)
		data = props.data
	else
		data = {
			image: 'https://bit.ly/dan-abramov',
			title: 'ini title',
			subTitle: [],
			time: 124124124,
			linkTo: '',
			editLink: '',
			deleteLink: '',
		}

	return (
		<HStack maxH='32' borderRadius='md' p='1' m='1' border='1px' borderColor='brand.10' width='full' >
			<Image width='100px' src={data.image} alt={data.title} />
			<Box>
				<Heading fontSize='md'>{data.title}</Heading>
				<HStack>
					{data?.subTitle ? data.subTitle.map((x) => <Text>{x}</Text>)
						:
						<></>}
					<Text>{convertMilisecond(data.time)}</Text>
				</HStack>
			</Box>
			<Spacer />
			<Link to={data.deleteLink}>
				<DeleteIcon />
			</Link>
			<Link to={data.editLink}>
				<EditIcon />
			</Link>
			<Link to={data.linkTo}>
				<ArrowRightIcon />
			</Link>
		</HStack >
	)
}

export default BasicCardComponent