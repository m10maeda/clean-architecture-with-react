import styled from '@emotion/styled';
import React, { ComponentPropsWithRef, VFC } from 'react';

type Props = ComponentPropsWithRef<'div'>;

const Feedback: VFC<Props> = ({ className, children, ...props }) => (
  <div className={className} {...props}>
    {children}
  </div>
);

const StyledFeedback = styled(Feedback)`
  width: 100%;
  margin-top: 0.25rem;
  font-size: 0.875em;
  color: #dc3545;
`;

export default StyledFeedback;
