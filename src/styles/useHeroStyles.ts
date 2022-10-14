import { createStyles } from '@mantine/core';

export const useHeroStyles = createStyles((theme) => ({
  hero: {
    position: 'relative',
    minHeight: '100vh',
    paddingBottom: '2rem',
    margin: 'auto',
    display: 'flex',
    alignItems: 'center',
  },

  heading: {
    fontSize: '4.5rem',

    [theme.fn.smallerThan('md')]: {
      fontSize: '2rem',
      marginTop: '3rem',
    },
  },
  headingName: {
    fontFamily: '"Dancing Script"',
    color: theme.colors.accent,
  },

  svg: {
    width: '100%',
    height: '100%',

    [theme.fn.smallerThan('md')]: {
      width: '80%',
    },

    [theme.fn.smallerThan('sm')]: {
      width: '90%',
    },
  },

  button: {
    position: 'relative',
    overflow: 'hidden',
    width: 'fit-content',
    padding: '1rem',
    borderRadius: 8,
    background: 'transparent',
    border: `1px solid ${theme.colors.accent}`,
    color: 'white',
    fontSize: 20,
    cursor: 'pointer',
    marginTop: '2rem',

    [theme.fn.smallerThan('md')]: {
      margin: '2rem auto',
    },

    '&:before': {
      content: '""',
      background: theme.colors.accent,
      display: 'block',
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      transform: 'TranslateX(-100%)',
      transition: 'transform 0.3s ease-in-out',
      zIndex: -1,
    },

    '&:hover': {
      '&:before': {
        transform: 'TranslateX(0%)',
      },
    },
  },
  wave: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    fill: theme.colors.secondary,
  },
}));
