import React from 'react';
import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
import { css } from '../src';

export default {
  title: 'css function',
};

const Box = styled('div')((props: any) => css(props.css)(props.theme));

const styles = {
  button: {
    bg: 'red',
    px: 4,
    transform: 'auto',
    rotate: '4',
    py: 2,
    rounded: 8,
    fontWeight: 700,
    outline: 0,
    _hover: {
      bg: 'pink',
      rotate: 0,
    },
    _focusVisible: {
      ring: '2px',
      ringOffset: '2px',
    },
  },
};

export const CssVars = () => {
  return (
    <ThemeProvider theme={{}}>
      <Box>
        <Box as="button" css={styles.button}>
          Welcome
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export const HoverFocus = () => {
  return (
    <Box
      as="button"
      css={{
        _focus: {
          bg: 'pink',
        },
        _hover: {
          bg: 'red',
        },
      }}
    >
      Welcome
    </Box>
  );
};

export const Ring = () => {
  return (
    <Box
      as="button"
      css={{
        bg: '#eaeaea',
        border: 'none',
        rounded: 999,
        px: 20,
        py: 10,
        outline: 'none',
        cursor: 'pointer',
        _active: {
          ring: 4,
          ringOffset: 2,
        },
      }}
    >
      Welcome
    </Box>
  );
};

export const PeerSelector = () => {
  return (
    <div>
      <input data-peer />
      <Box css={{ _peerFocus: { color: 'red' } }}>Test 1</Box>
      <Box css={{ _peerFocus: { color: 'green', fontWeight: 'bold' } }}>
        Test 2
      </Box>
    </div>
  );
};
