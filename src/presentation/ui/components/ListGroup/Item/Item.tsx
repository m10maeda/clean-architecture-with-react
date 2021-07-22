import styled from '@emotion/styled';
import React, { ReactNode, VFC } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
};

const Item: VFC<Props> = ({ children, className }) => (
  <div className={className}>{children}</div>
);

const StyledItem = styled(Item)`
  display: block;
  padding: 0.5rem 1rem;
  text-decoration: none;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
  color: rgba(0, 0, 0, 0.9);

  &:focus,
  &:hover {
    background-color: #f8f9fa;
  }

  & + & {
    border-top-width: 0;
  }

  &:first-of-type {
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
  }

  &:last-of-type {
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;
  }
`;

export default StyledItem;
