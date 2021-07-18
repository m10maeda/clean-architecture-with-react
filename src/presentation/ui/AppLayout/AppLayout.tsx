import styled from '@emotion/styled';
import React, { ReactNode, VFC } from 'react';
import { Container } from '../components';
import NavBar from './NavBar';

type Props = {
  children: ReactNode;
  className?: string;
};

const AppLayout: VFC<Props> = ({ children, className }) => (
  <div className={className}>
    <header className={`${className}__header`}>
      <NavBar />
    </header>

    <main className={`${className}__main`}>
      <Container>{children}</Container>
    </main>
  </div>
);

const StyledAppLayout = styled(AppLayout)`
  &__header {
    margin-bottom: 1rem;
  }

  &__main {
  }

  &__content {
  }
`;

export default StyledAppLayout;
