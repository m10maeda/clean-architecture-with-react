import styled from '@emotion/styled';
import React, { ReactNode, VFC } from 'react';

type Props = {
  className?: string;
  children: ReactNode;
};

const NavList: VFC<Props> = ({ className, children }) => (
  <nav className={className}>
    <ul className={`${className}__list`}>{children}</ul>
  </nav>
);

const StyledNavList = styled(NavList)`
  &__list {
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;

export default StyledNavList;
