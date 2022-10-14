import { Box, createStyles } from '@mantine/core';

const duration = '20000ms';
const useStyles = createStyles((theme) => ({
  container: {
    position: 'absolute',
    overflow: 'hidden',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
    zIndex: -1,
  },

  night: {
    position: 'relative',
    transform: 'rotateZ(20deg)',
    animation: 'sky 100000ms linear infinite',
  },

  shootingStar: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    width: '100px',
    height: '2px',
    background: theme.fn.linearGradient(
      -45,
      'rgba(95, 145, 255, 1),  rgba(0, 0, 255, 0)'
    ),
    borderRadius: '999px',
    filter: 'drop-shadow(0 0 6px rgba(105, 155, 255, 1))',
    animation: `tail  ease-in-out infinite, shooting  ease-in-out infinite`,
    animationDuration: duration,
    MozAnimationFillMode: 'backwards',

    '&:before': {
      content: '""',
      position: 'absolute',
      top: 'calc(50% - 1px)',
      right: 0,
      height: '2px',
      background:
        'linear-gradient(-45deg, rgba(0, 0, 255, 0), rgba(95, 145, 255, 1), rgba(0, 0, 255, 0))',
      transform: 'translateX(50%) rotateZ(45deg)',
      borderRadius: '100%',
      animation: `shining ease-in-out infinite`,
      animationDuration: duration,
    },

    '&:after': {
      content: '""',
      position: 'absolute',
      top: 'calc(50% - 1px)',
      right: 0,
      height: '2px',
      background:
        'linear-gradient(-45deg, rgba(0, 0, 255, 0), rgba(95, 145, 255, 1), rgba(0, 0, 255, 0))',
      transform: 'translateX(50%) rotateZ(-45deg)',
      borderRadius: '100%',
      animation: `shining ease-in-out infinite`,
      animationDuration: duration,
    },
  },
}));

const ShootingStars = () => {
  const { classes } = useStyles();

  const getStars = (number: number) => {
    const arr = [];
    for (let i = 0; i <= number; i++) {
      arr.push(i);
    }

    return arr;
  };

  const stars = getStars(15);

  return (
    <Box className={classes.container}>
      <div className={classes.night}>
        {stars.map((star, index) => {
          const randomDelay = Math.ceil(Math.random() * 12000);
          const randomTop = Math.ceil(Math.random() * 400) - 200;
          const randomLeft = Math.ceil(Math.random() * 300);
          const randomOpacity = Math.random();

          return (
            <Box
              className={classes.shootingStar}
              sx={{
                animationDelay: `${randomDelay}ms`,
                top: randomTop,
                left: randomLeft,
                opacity: randomOpacity,
                '&:before, &:after': {
                  animationDelay: `${randomDelay}ms`,
                },
              }}
              key={star + index}
            ></Box>
          );
        })}
      </div>
    </Box>
  );
};

export default ShootingStars;
