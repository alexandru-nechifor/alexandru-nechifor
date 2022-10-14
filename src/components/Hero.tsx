import { Grid, Stack, Title } from '@mantine/core';
import { Link } from 'react-scroll';
import { ReactComponent as Herosvg } from '../assets/herosvg.svg';
import { useGridContainer } from '../styles/useGridContainer';
import { useHeroStyles } from '../styles/useHeroStyles';

const Hero = () => {
  const { classes } = useHeroStyles();
  const { classes: grid } = useGridContainer();
  return (
    <>
      <section className={classes.hero} id="home">
        <Grid className={grid.container} align="center">
          <Grid.Col lg={8} sm={12} order={2} orderLg={1}>
            <Stack>
              <Title
                order={1}
                color="white"
                weight={'lighter'}
                className={classes.heading}
              >
                I am{' '}
                <span className={classes.headingName}>Alexandru Nechifor</span>
                ,
                <br />
                Frontend Developer.
              </Title>
              <Link to="contact" smooth={true}>
                <button className={classes.button}>Contact me</button>
              </Link>
            </Stack>
          </Grid.Col>

          <Grid.Col lg={4} sm={12} order={1} orderLg={2}>
            <Herosvg className={classes.svg} />
          </Grid.Col>
        </Grid>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 150"
          className={classes.wave}
        >
          <path d="M0,96L80,85.3C160,75,320,53,480,42.7C640,32,800,32,960,42.7C1120,53,1280,75,1360,85.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </section>
    </>
  );
};

export default Hero;
