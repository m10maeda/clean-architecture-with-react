import styled from '@emotion/styled';
import React, { ComponentPropsWithRef, ElementType, VFC } from 'react';

type Props = ComponentPropsWithRef<'label'> & {
  as?: ElementType;
};

const Label: VFC<Props> = ({
  className,
  children,
  as: Component = 'label',
  ...props
}) => (
  <Component className={className} {...props}>
    {children}
  </Component>
);

const StyledLabel = styled(Label)`
  display: block;
  float: left;
  width: 160px;
  padding-top: calc(0.375rem + 1px);
  line-height: 1.5;
  text-align: right;
`;

export default StyledLabel;
