import React, { VFC } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  id: string;
  name: string;
  ownerName: string;
  membersCount: number;
};

const Circle: VFC<Props> = ({ id, name, ownerName, membersCount }) => (
  <tr>
    <th scope="row">{id}</th>
    <td>
      <Link to={`/circles/${id}`}>{name}</Link>
    </td>
    <td>{ownerName}</td>
    <td className="text-right">{membersCount}</td>
  </tr>
);

export default Circle;
