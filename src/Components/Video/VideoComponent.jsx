import React from 'react';
import { Box, ChakraProvider, Center, Text } from '@chakra-ui/react';
import { Player, BigPlayButton } from 'video-react';
import 'video-react/dist/video-react.css';

const VideoComponent = ({ videoUrl, poster }) => {
  return (
    <Box w="100%" maxW="800px" mx="auto">
      <Center h="500px" bg="gray.200" borderRadius="md" overflow="hidden">
        <Player fluid poster={poster}>
          <source src={videoUrl} />
          <BigPlayButton position="center" />
        </Player>
      </Center>
    </Box>
  );
};

export default VideoComponent