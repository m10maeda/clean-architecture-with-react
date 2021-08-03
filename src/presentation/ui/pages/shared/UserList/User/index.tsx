import React, { VFC } from 'react';
import { useUser } from './hooks';
import User from './User';

type Props = {
  id: string;
};

const UserContainer: VFC<Props> = ({ id }) => {
  const user = useUser(id);

  if (user === undefined) {
    return null;
  }

  return <User id={id} name={user.name} />;
};

export default UserContainer;
