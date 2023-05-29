import { Stack, Text } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';

//Format startDate & endDate = 2023-05-13

const Countdown = ({ startDate, endDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const start = new Date(startDate).getTime();
      const end = new Date(endDate).getTime();
      const totalSeconds = (end - Date.now()) / 1000;

      if (totalSeconds <= 0) {
        clearInterval(interval);
      } else {
        const days = Math.floor(totalSeconds / 86400);
        const hours = Math.floor((totalSeconds % 86400) / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = Math.floor(totalSeconds % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [startDate, endDate]);

  return (
    <Stack>
      <Text fontWeight={'bold'} color='red.500' fontSize={'sm'}>{timeLeft.days} days {timeLeft.hours} hours {timeLeft.minutes} minutes {timeLeft.seconds} seconds</Text>
    </Stack>
  );
};

export default Countdown;