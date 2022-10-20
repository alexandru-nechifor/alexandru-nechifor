import { useNavbarStyles } from '../styles/useNavbarStyles';
import { NavbarLinkProps } from '../types/INavbarLinkProps';
import { Tooltip, UnstyledButton } from '@mantine/core';

export const NavbarLink = ({ icon: Icon, label, active }: NavbarLinkProps) => {
  const { classes, cx } = useNavbarStyles();

  return (
    <Tooltip label={label} position="right" transitionDuration={0}>
      <UnstyledButton
        className={cx(classes.icon, { [classes.active]: active })}
      >
        <Icon />
      </UnstyledButton>
    </Tooltip>
  );
};
