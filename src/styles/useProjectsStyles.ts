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
    width: 'fit-content',

    '&:before': {
      content: '""',
      borderBottom: '2px solid',
      borderColor: theme.colors.accent,
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      transition: 'all 0.5s ease',
    },

    '&:hover': {
      '&:before': {
        left: '30%',
        right: '30%',
      },
    },
  },

  projectImg: {
    display: 'block',
    width: '80%',
    borderRadius: 10,
    marginLeft: 'auto',
    [theme.fn.smallerThan('md')]: {
      marginTop: '1rem',
      width: '100%',
    },

    [theme.fn.largerThan('md')]: {
      transition: 'all 0.3s ease',
      '&:hover': {
        boxShadow: `1px 1px 20px ${theme.colors.accent} `,
      },
    },
  },
}));
