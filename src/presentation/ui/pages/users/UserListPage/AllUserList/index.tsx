import React, { VFC } from 'react';
import { useSelector } from 'react-redux';
import { allUserIdsSelector } from '../../../../selectors';
import AllUserList from './AllUserList';

const AllUserListContainer: VFC = () => {
  const ids = useSelector(allUserIdsSelector);

  return <AllUserList ids={ids} />;
};

export default AllUserListContainer;
