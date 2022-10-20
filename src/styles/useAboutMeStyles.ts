import { createStyles } from '@mantine/core';

export const useAboutMeStyles = createStyles((theme) => ({
  section: {
    padding: '4rem 0',
    background: theme.colors.secondary,
  },

  aboutHeading: {
    textTransform: 'uppercase',
    letterSpacing: 3,
    color: theme.colors.accent,
  },

  aboutBox: {
    background: theme.colors.primary,
    padding: 25,
    borderRadius: 8,
    margin: '0 auto',
    width: '100%',
    textAlign: 'center',

    [theme.fn.largerThan('lg')]: {
      width: '70%',
    },
    [theme.fn.largerThan('xl')]: {
      width: '60%',
    },
  },

  cvImg: {
    width: 150,
    background: theme.colors.secondary,
    borderRadius: '50%',
    margin: '2rem auto',
  },

  mail: {
    margin: 'auto',
    padding: '0.8rem',
    borderRadius: 8,
    width: 'fit-content',
    color: theme.colors.accent,

    [theme.fn.smallerThan('md')]: {
      padding: '0.2rem',
      margin: '2rem auto 0 auto',
    },
    '&:hover': {
      background: theme.colors.accent,
      color: 'white',
      transition: 'all 0.5s',
    },
  },
}));
