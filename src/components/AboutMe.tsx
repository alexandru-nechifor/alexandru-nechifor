import { Grid, Group, Text, Title } from '@mantine/core';
import { useAboutMeStyles } from '../styles/useAboutMeStyles';
import { useGridContainer } from '../styles/useGridContainer';
import AlexPhoto from '../assets/aky.png';
import { AiOutlineMail } from 'react-icons/ai';
import { forwardRef } from 'react';

const message =
  'Determined and hard-working person, detail oriented self-learner, problem solver and capable to work in a team to obtain the best outcome possible. Looking forward to broaden my skills and aptitudes in Web Development and make a contribution towards this field. ';

const AboutMe = forwardRef<HTMLElement>((props, ref) => {
  const { classes } = useAboutMeStyles();
  const { classes: grid } = useGridContainer();
  return (
    <section className={classes.section} id="contact" ref={ref}>
      <Grid className={grid.container} data-aos="zoom-in">
        <Grid.Col sm={12}>
          <div className={classes.aboutBox}>
            <Title order={2} className={classes.aboutHeading} weight="lighter">
              About me
            </Title>

            <Grid align="center" gutter="xl">
              <Grid.Col sm={12} lg={4}>
                <img
                  src={AlexPhoto}
                  alt="Alexandru Nechifor"
                  className={classes.cvImg}
                />
              </Grid.Col>
              <Grid.Col sm={12} lg={7}>
                <Text align="left">{message}</Text>
              </Grid.Col>
            </Grid>

            <a href="mailto:alexandru.nechifor1999@gmail.com">
              <Group className={classes.mail} position="center">
                <AiOutlineMail size={35} />
                <Text color="white">alexandru.nechifor1999@gmail.com</Text>
              </Group>
            </a>
          </div>
        </Grid.Col>
      </Grid>
    </section>
  );
});

export default AboutMe;
