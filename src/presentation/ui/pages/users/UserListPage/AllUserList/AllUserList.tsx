import React, { VFC } from 'react';
import { UserList } from '../../../shared';

type Props = {
  ids: string[];
};

const AllUserList: VFC<Props> = ({ ids }) => <UserList ids={ids} />;

export default AllUserList;
