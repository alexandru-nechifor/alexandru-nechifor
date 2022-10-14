import { createStyles } from '@mantine/core';

export const useSkillStyles = createStyles((theme) => ({
  section: {
    backgroundColor: theme.colors.secondary,
    width: '100%',
    height: '360px',

    [theme.fn.smallerThan('md')]: {
      height: '100%',
      paddingBottom: '4rem',
    },
  },

  box: {
    width: '80%',
    minHeight: '415px',
    padding: '2rem',
    textAlign: 'center',
    borderRadius: 8,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    background: theme.colors.primary,
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxShadow: 'rgba(0, 0, 0, 0.25) 0px 1px 4px',
    [theme.fn.smallerThan('md')]: {
      width: '100%',
    },
  },

  icon: {
    fontSize: 100,
    padding: '1rem',
    background: theme.colors.accent,
    borderRadius: '50%',
    color: 'white',
  },

  imageGroup: {
    marginTop: 'auto',

    [theme.fn.smallerThan('sm')]: {
      marginTop: '1.5rem',
    },
  },

  skillImage: {
    width: 50,
    borderRadius: 10,
  },
}));
