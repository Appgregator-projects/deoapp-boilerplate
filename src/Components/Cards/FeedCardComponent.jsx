import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Flex, Avatar, Box, Heading, Text, IconButton, Image, Button } from '@chakra-ui/react'
import { SiThreedotjs } from 'react-icons/si'
import { FaComment, FaShare, FaThumbsUp } from 'react-icons/fa'

function FeedCardComponent(props) {
	let data = {}
	if (props.data)
		data = props.data
	else
		data = {
			avatar: 'https://bit.ly/sage-adebayo',
			image: 'https://bit.ly/dan-abramov',
			name: 'Segun Adebayo',
			title: 'ini title',
			subTitle: [],
			time: 124124124,
			linkTo: '',
			editLink: '',
			deleteLink: '',
		}
	return (
		<Card maxW='md'>
			<CardHeader>
				<Flex spacing='4'>
					<Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
						<Avatar name='Segun Adebayo' src={data.avatar} />

						<Box>
							<Heading size='sm'>{data.name}</Heading>
							<Text>Creator, Chakra UI</Text>
						</Box>
					</Flex>
					<IconButton
						variant='ghost'
						colorScheme='gray'
						aria-label='See menu'
						icon={<SiThreedotjs />}
					/>
				</Flex>
			</CardHeader>
			<CardBody>
				<Text>
					With Chakra UI, I wanted to sync the speed of development with the speed
					of design. I wanted the developer to be just as excited as the designer to
					create a screen.
				</Text>
			</CardBody>
			<Image
				objectFit='cover'
				src='https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
				alt='Chakra UI'
			/>

			<CardFooter
				justify='space-between'
				flexWrap='wrap'
				sx={{
					'& > button': {
						minW: '136px',
					},
				}}
			>
				<Button flex='1' variant='ghost' leftIcon={<FaThumbsUp />}>
					Like
				</Button>
				<Button flex='1' variant='ghost' leftIcon={<FaComment />}>
					Comment
				</Button>
				<Button flex='1' variant='ghost' leftIcon={<FaShare />}>
					Share
				</Button>
			</CardFooter>
		</Card>)
}

export default FeedCardComponent