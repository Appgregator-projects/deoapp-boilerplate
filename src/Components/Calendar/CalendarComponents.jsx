import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Avatar, AvatarBadge, Flex, HStack, Spacer, Stack, Text } from '@chakra-ui/react';

const localizer = momentLocalizer(moment);

const CalendarComponents = () => {
  const [events, setEvents] = useState([]);

  const height = window.innerHeight;

  useEffect(() => {
    // Data events hardcode
    const data = [
      {
        title: 'Event 1',
        start: moment().toDate(),
        end: moment().add(1, 'hour').toDate(),
        imageUrl: 'https://example.com/image1.jpg',
        platform: 'youtube',
        post: 'Post 1',
        status: 'Status 1',
      },
      {
        title: 'Event 2',
        start: moment().add(1, 'day').toDate(),
        end: moment().add(1, 'day').add(1, 'hour').toDate(),
        imageUrl: 'https://example.com/image2.jpg',
        platform: 'twitter',
        post: 'Post 2',
        status: 'Status 2',
      },
      // Tambahkan data event lainnya
      // ...
    ];

    setEvents(
      data.map((item) => ({
        title: item.title,
        start: item.start,
        end: item.end,
        imageUrl: item.imageUrl,
        platform: item.platform,
        post: item.post,
        status: item.status,
      }))
    );
  }, []);

  const eventStyleGetter = (event, start, end, isSelected) => {
    const backgroundColor = '#3174ad';
    const style = {
      backgroundColor,
      borderRadius: '20px',
      opacity: 0.8,
      color: 'white',
      border: '0px',
      display: 'block',
    };
    return {
      style: style,
    };
  };

  const Event = ({ event }) => {

    return (
      <HStack alignItems={'center'} p={1} spacing={3}>
        <Avatar cursor={'pointer'} size="xs" src={event?.imageUrl} alt={event?.imageUrl}>
          <AvatarBadge boxSize='1.5em' bg='green.500' />
        </Avatar>

        <Stack spacing={0}>
          <HStack>
            <Text noOfLines={1} fontSize={'xx-small'}>
              {event?.title}
            </Text>
            {event?.status && (
              <Text noOfLines={1} fontSize={'xx-small'} color='gray.300'>
                ( {event?.status} )
              </Text>
            )}
          </HStack>
          <Text noOfLines={1} fontSize={'xx-small'}>
            {event?.post}
          </Text>
        </Stack>
      </HStack>
    );
  };

  return (
    <Flex bgColor={"gray.100"} flex={1} flexDirection="row" spacing={3}>
      <Stack w={'100%'} transition={"0.2s ease-in-out"} minH={height}>
        <Stack p={10}>
          <Text fontSize={'xl'} fontWeight='bold' color={'gray.600'}>
            Calendar
          </Text>
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: '100vh', backgroundColor: 'white', padding: 10, borderRadius: '10px' }}
            eventPropGetter={eventStyleGetter}
            components={{
              event: Event,
            }}
          />
        </Stack>
      </Stack>
    </Flex>
  );
};

export default CalendarComponents;
