import styled from '@emotion/styled';
import React, { VFC } from 'react';

type Props = {
  className?: string;
  isHome?: boolean;
};

const Brand: VFC<Props> = ({ className, isHome = false }) => {
  const Component = isHome ? 'h1' : 'div';

  return (
    <Component className={className}>Clean Architecture with React</Component>
  );
};

const StyledBrand = styled(Brand)`
  display: block;
  margin: 0;
  padding: 0.5rem;
  font-size: 1rem;
  font-weight: normal;
  color: rgba(0, 0, 0, 0.9);
`;

export default StyledBrand;
