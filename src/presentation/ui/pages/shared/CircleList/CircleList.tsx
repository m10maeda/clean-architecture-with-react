import React, { VFC } from 'react';
import { Table } from '../../../components';
import Circle from './Circle';

type Props = {
  ids: string[];
};

const CircleList: VFC<Props> = ({ ids }) => (
  <Table>
    <colgroup>
      <col style={{ width: '5em' }} />
      <col />
      <col />
      <col />
    </colgroup>

    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Name</th>
        <th scope="col">Owner</th>
        <th scope="col">Members Count</th>
      </tr>
    </thead>

    <tbody>
      {ids.map((id) => (
        <Circle id={id} key={id} />
      ))}
    </tbody>
  </Table>
);

export default CircleList;
