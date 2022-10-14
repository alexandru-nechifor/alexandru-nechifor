import { createStyles } from '@mantine/core';

export const useProjectsStyles = createStyles((theme) => ({
  section: {
    padding: '10rem 0',
    [theme.fn.smallerThan('md')]: {
      padding: '2rem ',
    },
    overflow: 'hidden',
  },

  pHeading: {
    textTransform: 'uppercase',
    color: theme.colors.accent,
    fontSize: 16,
    letterSpacing: 2,

    [theme.fn.smallerThan('md')]: {
      marginTop: 0,
    },
  },

  col: {
    padding: 0,
    margin: '1rem 0',
    [theme.fn.smallerThan('md')]: {
      textAlign: 'left',
      margin: '2rem 0',
    },
  },

  projectTitle: {
    fontSize: '2.5rem',
    position: 'relative',
    overflow: 'hidden',

    '&:before': {
      content: '""',
      borderBottom: '2px solid',
      borderColor: theme.colors.accent,
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      transform: 'translateX(-400px)',
      transition: 'all 0.5s ease',
      [theme.fn.smallerThan('md')]: {
        transform: 'translateX(-100px)',
      },
    },

    '&:hover': {
      '&:before': {
        transform: 'translateX(-150px)',
      },
    },
  },

  projectImg: {
    width: '80%',
    position: 'relative',
    top: 0,
    right: '-100%',
    borderRadius: 10,
    [theme.fn.smallerThan('md')]: {
      marginTop: '1rem',
      position: 'inherit',
      width: '100%',
    },
  },
}));
