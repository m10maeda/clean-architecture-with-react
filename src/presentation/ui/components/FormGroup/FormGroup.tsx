import styled from '@emotion/styled';
import React, { ComponentPropsWithRef, ElementType, VFC } from 'react';
import Controls from './Controls';
import Label from './Label';

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

export default Object.assign(StyledFormGroup, {
  Label,
  Controls,
});
