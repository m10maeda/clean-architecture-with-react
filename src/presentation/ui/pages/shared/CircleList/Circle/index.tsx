import React, { VFC } from 'react';
import Circle from './Circle';
import { useCircle } from './hooks';

type Props = {
  id: string;
};

const CircleContainer: VFC<Props> = ({ id }) => {
  const circle = useCircle(id);

  if (circle === undefined) {
    return null;
  }

  return (
    <Circle
      id={id}
      name={circle.name}
      ownerName={circle.ownerName}
      membersCount={circle.membersCount}
    />
  );
};

export default CircleContainer;
