import { Grid, Group, Text, Title } from '@mantine/core';
import { useAboutMeStyles } from '../styles/useAboutMeStyles';
import { useGridContainer } from '../styles/useGridContainer';
import AlexPhoto from '../assets/aky.png';
import { AiOutlineMail } from 'react-icons/ai';

const message =
  'Determined and hard-working person, detail oriented self-learner, problem solver and capable to work in a team to obtain the best outcome possible. Looking forward to broaden my skills and aptitudes in Web Development and make a contribution towards this field. ';

const AboutMe = () => {
  const { classes } = useAboutMeStyles();
  const { classes: grid } = useGridContainer();
  return (
    <section className={classes.section} id="contact">
      <Grid className={grid.container}>
        <Grid.Col sm={12}>
          <div className={classes.aboutBox}>
            <Title order={2} className={classes.aboutHeading} weight="lighter">
              About me
            </Title>
            <img
              src={AlexPhoto}
              alt="Alexandru Nechifor"
              className={classes.cvImg}
            />

            <Text align="left">{message}</Text>

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
};

export default AboutMe;
