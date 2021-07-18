import React, { VFC } from 'react';
import Brand from './Brand';
import { useRouteMatch } from './hooks';

type Props = {
  className?: string;
};

const BrandContainer: VFC<Props> = ({ className }) => {
  const { isHome } = useRouteMatch();

  return <Brand className={className} isHome={isHome} />;
};

export default BrandContainer;
