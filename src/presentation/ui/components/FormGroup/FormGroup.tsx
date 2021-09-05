import styled from '@emotion/styled';
import React, { ComponentPropsWithRef, ElementType, VFC } from 'react';

type Props = ComponentPropsWithRef<'div'> & {
  as?: ElementType;
};

const FormGroup: VFC<Props> = ({
  className,
  children,
  as: Component = 'div',
  ...props
}) => (
  <Component className={className} {...props}>
    {children}
  </Component>
);

const StyledFormGroup = styled(FormGroup)`
  margin-bottom: 1rem;
  clear: both;
`;

export default StyledFormGroup;
