import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import {
  makeCircleMembersCountSelector,
  makeCircleNameSelector,
  makeCircleOwnerNameSelector,
} from '../../../../../selectors';

type Circle = {
  name: string;
  ownerName: string;
  membersCount: number;
};

const useCircle = (id: string): Circle | undefined => {
  const circleNameSelector = useSelector(makeCircleNameSelector);
  const circleMembersCountSelector = useSelector(
    makeCircleMembersCountSelector,
  );
  const circleOwnerNameSelector = useSelector(makeCircleOwnerNameSelector);

  const name = useMemo(() => circleNameSelector(id), [circleNameSelector, id]);
  const ownerName = useMemo(
    () => circleOwnerNameSelector(id),
    [circleOwnerNameSelector, id],
  );
  const membersCount = useMemo(
    () => circleMembersCountSelector(id),
    [circleMembersCountSelector, id],
  );

  if (
    name === undefined ||
    ownerName === undefined ||
    membersCount === undefined
  ) {
    return undefined;
  }

  return {
    name,
    ownerName,
    membersCount,
  };
};

export default useCircle;
