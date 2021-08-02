import React, { VFC } from 'react';
import { Table } from '../../../components';
import User from './User';

type Props = {
  ids: string[];
};

const UserList: VFC<Props> = ({ ids }) => (
  <Table>
    <colgroup>
      <col style={{ width: '5em' }} />
      <col />
    </colgroup>

    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Name</th>
      </tr>
    </thead>

    <tbody>
      {ids.map((id) => (
        <User id={id} key={id} />
      ))}
    </tbody>
  </Table>
);

export default UserList;
