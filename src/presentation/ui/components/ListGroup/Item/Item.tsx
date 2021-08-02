import styled from '@emotion/styled';
import React, { ComponentPropsWithRef, VFC } from 'react';

type Props = ComponentPropsWithRef<'li'>;

const Item: VFC<Props> = ({ children, className, ...props }) => (
  <li className={className} {...props}>
    {children}
  </li>
);

Item.displayName = 'ListGroup.Item';

const StyledItem = styled(Item)`
  display: block;
  padding: 0.5rem 1rem;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
  color: rgba(0, 0, 0, 0.9);

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
