import styled from '@emotion/styled';
import React, { ReactNode, VFC } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
};

const ListGroup: VFC<Props> = ({ children, className }) => (
  <div className={className}>{children}</div>
);

const StyledListGroup = styled(ListGroup)`
  padding-left: 0;
  margin-bottom: 0;
  border-radius: 0.25rem;
`;

export default StyledListGroup;
