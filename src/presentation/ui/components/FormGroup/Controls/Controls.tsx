import styled from '@emotion/styled';
import React, { ComponentPropsWithRef, ElementType, VFC } from 'react';

type Props = ComponentPropsWithRef<'div'> & {
  as?: ElementType;
};

const Controls: VFC<Props> = ({
  className,
  children,
  as: Component = 'div',
  ...props
}) => (
  <Component className={className} {...props}>
    {children}
  </Component>
);

const StyledControls = styled(Controls)`
  margin-left: 180px;

  & + & {
    margin-top: 0.5rem;
  }
`;

export default StyledControls;
