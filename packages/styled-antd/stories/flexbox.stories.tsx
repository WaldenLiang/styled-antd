import React from 'react';
import { Box, ConfigProvider, Flex } from '../src';

export default {
  title: 'Flexbox',
};

export const withBox = () => (
  <ConfigProvider>
    <Box>
      <Box bgColor="red-5" color="white" _hover={{ bg: 'red-4' }}>
        Welcome to Box
      </Box>
      <Box
        pos="relative"
        bg="red-4"
        _before={{
          height: 0,
          content: `""`,
          display: 'block',
          paddingBottom: ['40px', '100px'],
        }}
      />
    </Box>
  </ConfigProvider>
);

export const VerticalFlex = () => (
  <Flex gap={4} direction="column">
    <span>ooooooo</span>
    <span>ahhhhh</span>
    <span>Woah!</span>
  </Flex>
);

export const HorizontalFlex = () => (
  <Flex gap={4}>
    <span>ooooooo</span>
    <span>ahhhhh</span>
    <span>Woah!</span>
  </Flex>
);

export const VerticalWithMargin = () => (
  <ConfigProvider>
    <Flex gap={4} direction="column">
      <Box boxSize="40px" bg="red-4" borderRadius="full" />
      <Box boxSize="40px" bg="red-4" borderRadius="full" />
      <Box boxSize="40px" bg="red-4" borderRadius="full" mt={4} />
    </Flex>
  </ConfigProvider>
);
