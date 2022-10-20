import { createStyles } from '@mantine/core';

export const useNavbarStyles = createStyles((theme) => ({
  navbar: {
    height: '100vh',
    backgroundColor: theme.colors.nav,
    width: 80,
    position: 'fixed',
    left: 0,

    [theme.fn.smallerThan('md')]: {
      width: 60,
    },

    [theme.fn.smallerThan('sm')]: {
      width: 50,
    },
  },

  icon: {
    fontSize: 25,
    color: theme.colors.accent,
    padding: 10,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',

    '&:hover': {
      color: theme.colors.blue[6],
    },

    [theme.fn.smallerThan('md')]: {
      fontSize: 20,
      padding: 5,
    },
  },

  active: {
    '&, &:hover': {
      backgroundColor: theme.colors.dark[6],
      color: theme.colors.blue[6],
    },
  },
}));
