import styled from '@emotion/styled';
import React, { VFC } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../../components';
import Brand from './Brand';
import Nav from './NavList';

type Props = {
  className?: string;
};

const NavBar: VFC<Props> = ({ className }) => (
  <div className={className}>
    <Container className={`${className}__container`}>
      <Link className={`${className}__brand`} to="/">
        <Brand />
      </Link>

      <Nav className={`${className}__nav`}>
        <Nav.Item to="/users">Users</Nav.Item>
        <Nav.Item to="/circles">Circles</Nav.Item>
      </Nav>
    </Container>
  </div>
);

const StyledNavBar = styled(NavBar)`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  background: #f8f9fa;

  &__container {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: flex-start;
  }

  &__brand {
    margin-right: 1rem;
  }

  &__nav {
  }

  a {
    text-decoration: none;
  }
`;

export default StyledNavBar;
