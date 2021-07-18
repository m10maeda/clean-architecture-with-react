import styled from '@emotion/styled';
import React, { ReactNode, VFC } from 'react';
import { NavLink } from 'react-router-dom';

type Props = {
  className?: string;
  children: ReactNode;
  to: string;
};

const Item: VFC<Props> = ({ className, to, children }) => (
  <li className={`${className}`}>
    <NavLink
      className={`${className}__anchor`}
      activeClassName={`${className}__anchor--active`}
      to={to}
    >
      {children}
    </NavLink>
  </li>
);

const StyledItem = styled(Item)`
  &__anchor {
    display: block;
    padding: 0.5rem;
    color: rgba(0, 0, 0, 0.5);
    transition: color 0.15s ease-in-out;
    text-decoration: none;

    &:hover,
    &:focus {
      color: rgba(0, 0, 0, 0.7);
    }

    &--active {
      &,
      &:hover,
      &:focus {
        color: rgba(0, 0, 0, 0.9);
      }
    }
  }
`;

export default StyledItem;
