import styled from '@emotion/styled';
import React, { ReactNode, VFC } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
};

const PageHeader: VFC<Props> = ({ children, className }) => (
  <div className={className}>
    <h1 className={`${className}__title`}>{children}</h1>
  </div>
);

const StyledPageHeader = styled(PageHeader)`
  padding: 1rem 0;

  &__title {
    margin: 0;
    font-size: 2rem;
    font-weight: normal;
  }
`;

export default StyledPageHeader;
