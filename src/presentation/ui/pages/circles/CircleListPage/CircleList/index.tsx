import React, { VFC } from 'react';
import { useSelector } from 'react-redux';
import { allCircleIdsSelector } from '../../../../selectors';
import CircleList from './CircleList';

const CircleListContainer: VFC = () => {
  const ids = useSelector(allCircleIdsSelector);

  return <CircleList ids={ids} />;
};

export default CircleListContainer;
