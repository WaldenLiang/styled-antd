import { type CSSProperties } from 'react';
import { type SystemStyleObject } from '../src';

test('should be assignable style props', () => {
  const styles: SystemStyleObject = {
    isolation: 'isolate',
    pe: '4',
    '---test': 'dfd',
    margin: [40, 50],
    padding: { sm: '40', md: '50', xxl: '60' },
    '--var2': ['1', '2', '3'],
    mb: 'ref',
    color: 'pink',
    _hover: {
      content: '',
      background: 'red',
    },
    '.dfdfd': {
      margin: '40px',
      color: ['red', 'pink'],
      _hover: {
        background: 'red',
      },
    },
  };

  expect(styles).toBeTruthy();
});

test('should be assignable to react css properties', () => {
  const base: CSSProperties = {
    margin: 4,
  };

  const styles: SystemStyleObject = {
    ...base,
    isolation: 'isolate',
    pe: '4',
    margin: [40, 50],
    padding: { sm: '40', md: '50' },
    mb: 'ref',
    color: 'pink',
    _hover: {
      content: '',
      background: 'red',
    },
    '.dfdfd': {
      margin: '40px',
      color: ['red', 'pink'],
      _hover: {
        background: 'red',
      },
    },
  };

  expect(styles).toBeTruthy();
});

test('should support deep nesting', () => {
  const styles: SystemStyleObject = {
    display: 'block',
    position: 'relative',
    margin: '32px 0',
    maxWidth: '480px',
    minHeight: '132px',
    borderRadius: 'borderRadius',
    bg: 'ref',
    color: 'inherit',
    '@media (max-width: 480px)': {
      fontSize: '0.875em',
    },
    a: {
      textDecoration: 'none',
      color: 'colorSuccess',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
    '.carbon-wrap': {
      display: 'flex',
      padding: '16px',
    },
    '.carbon-img': {
      marginRight: '16px',
      img: {
        display: 'block',
      },
    },
    '.carbon-text': {
      fontSize: '0.8rem',
      lineHeight: 1.4,
    },
    '.carbon-poweredby': {
      position: 'absolute',
      bottom: '16px',
      left: '162px',
      display: 'block',
      fontSize: '10px',
      fontWeight: 'semibold',
      textTransform: 'uppercase',
      lineHeight: 1,
      letterSpacing: '0.2px',
    },
  };

  expect(styles).toBeTruthy();
});

test('should allow arbitrary breakpoint names by default', () => {
  const styles: SystemStyleObject = {
    mt: {
      base: '130px',
      tablet: '152px',
    },
  };

  expect(styles).toBeTruthy();
});
