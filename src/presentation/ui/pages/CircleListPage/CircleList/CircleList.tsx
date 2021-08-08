import React, { VFC } from 'react';
import { CircleList as PureCircleList } from '../../shared';

type Props = {
  ids: string[];
};

const CircleList: VFC<Props> = ({ ids }) => <PureCircleList ids={ids} />;

export default CircleList;
