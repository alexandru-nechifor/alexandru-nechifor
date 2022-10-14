import { createStyles } from '@mantine/core';

export const useGridContainer = createStyles((theme) => ({
  container: {
    width: '80%',
    margin: 'auto',

    [theme.fn.smallerThan('md')]: {
      height: 'auto',
      width: '95%',
      padding: '3rem 0 0 50px',
      textAlign: 'center',
    },
  },
}));
