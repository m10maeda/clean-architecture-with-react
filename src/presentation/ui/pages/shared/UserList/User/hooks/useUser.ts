import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { makeUserNameSelector } from '../../../../../selectors';

type User = {
  name: string;
};

const useUser = (id: string): User | undefined => {
  const userNameSelector = useSelector(makeUserNameSelector);
  const name = useMemo(() => userNameSelector(id), [userNameSelector, id]);

  if (name === undefined) {
    return undefined;
  }

  return {
    name,
  };
};

export default useUser;
