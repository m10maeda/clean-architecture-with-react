import styled from '@emotion/styled';
import React, { ComponentPropsWithRef, VFC } from 'react';
import Item from './Item';

type Props = ComponentPropsWithRef<'ul'>;

const ListGroup: VFC<Props> = ({ children, className, ...props }) => (
  <ul className={className} {...props}>
    {children}
  </ul>
);

const StyledListGroup = styled(ListGroup)`
  padding-left: 0;
  margin-bottom: 0;
  border-radius: 0.25rem;
`;

export default Object.assign(StyledListGroup, {
  Item,
});
