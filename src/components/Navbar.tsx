import { useState } from 'react';
import { links, socialMedia } from '../constants/navigation';
import { Navbar, Center, Stack } from '@mantine/core';
import Logo from '../assets/logo.png';

import { useNavbarStyles } from '../styles/useNavbarStyles';
import { NavbarLink } from '../utils/NavbarLink';
import { Link } from 'react-scroll';

const SideNavbar = () => {
  const [active, setActive] = useState(0);
  const { classes } = useNavbarStyles();

  return (
    <>
      <Navbar className={classes.navbar} p="md">
        <Navbar.Section>
          <Center>
            <img src={Logo} alt="Alexandru Nechifor Logo" width={40} />
          </Center>
        </Navbar.Section>

        <Navbar.Section grow sx={{ display: 'flex', justifyContent: 'center' }}>
          <Stack
            justify="center"
            spacing={20}
            align="center"
            sx={{ margin: 'auto 0' }}
          >
            {links.map((item, index) => {
              return (
                <Link
                  to={item.name.toLowerCase()}
                  smooth={true}
                  key={item.name}
                >
                  <NavbarLink
                    icon={item.icon}
                    label={item.name}
                    active={index === active}
                    onClick={() => setActive(index)}
                  />
                </Link>
              );
            })}
          </Stack>
        </Navbar.Section>

        <Navbar.Section>
          <Stack justify="center" spacing={10} align="center">
            {socialMedia.map((platform) => {
              return (
                <a href={platform.url} key={platform.id}>
                  <NavbarLink icon={platform.icon} label={platform.name} />
                </a>
              );
            })}
          </Stack>
        </Navbar.Section>
      </Navbar>
    </>
  );
};

export default SideNavbar;
