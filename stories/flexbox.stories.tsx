/* eslint-disable no-sparse-arrays */
import React from 'react';
import { Box, ConfigProvider, Flex } from '../src';

export default {
  title: 'Flexbox',
};

export const WithBox = () => (
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

export const Responsive = () => {
  return (
    <ConfigProvider>
      <Flex wrap="wrap">
        <Box
          bgColor="colorPrimary"
          h="24px"
          w={[1, , 1 / 2, 1 / 3, 1 / 4, 1 / 5]}
        />
        <Box
          bgColor="colorPrimary"
          h="24px"
          w={[1, , 1 / 2, 1 / 3, 1 / 4, 1 / 5]}
        />
        <Box
          bgColor="colorPrimary"
          h="24px"
          w={[1, , 1 / 2, 1 / 3, 1 / 4, 1 / 5]}
        />
        <Box
          bgColor="colorPrimary"
          h="24px"
          w={[1, , 1 / 2, 1 / 3, 1 / 4, 1 / 5]}
        />
        <Box
          bgColor="colorPrimary"
          h="24px"
          w={[1, , 1 / 2, 1 / 3, 1 / 4, 1 / 5]}
        />
      </Flex>
    </ConfigProvider>
  );
};
