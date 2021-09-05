import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { UserType } from '../../../../../../state/features/users';
import {
  makeUserNameSelector,
  makeUserTypeSelector,
} from '../../../../../selectors';

type User = {
  name: string;
  isPremium: boolean;
};

const useUser = (id: string): User | undefined => {
  const userNameSelector = useSelector(makeUserNameSelector);
  const name = useMemo(() => userNameSelector(id), [userNameSelector, id]);
  const userTypeSelector = useSelector(makeUserTypeSelector);
  const isPremium = useMemo(
    () => userTypeSelector(id) === UserType.Premium,
    [userTypeSelector, id],
  );

  if (name === undefined) {
    return undefined;
  }

  return {
    name,
    isPremium,
  };
};

export default useUser;
