import styled from '@emotion/styled';
import React, { ComponentPropsWithoutRef, VFC } from 'react';

type Props = ComponentPropsWithoutRef<'div'>;

const Container: VFC<Props> = ({ children, ...props }) => (
  <div {...props}>{children}</div>
);

const StyledContainer = styled(Container)`
  --gutter: 1rem;

  max-width: 960px;
  padding-right: var(--gutter);
  padding-left: var(--gutter);
  margin-right: auto;
  margin-left: auto;
`;

export default StyledContainer;
