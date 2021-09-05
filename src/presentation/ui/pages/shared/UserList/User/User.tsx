import React, { VFC } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  id: string;
  name: string;
  isPremium: boolean;
};

const User: VFC<Props> = ({ id, name, isPremium }) => (
  <tr>
    <th scope="row">{id}</th>
    <td>
      <Link to={`/users/${id}`}>{name}</Link>
    </td>
    <td>{isPremium ? 'Premium' : 'Normal'}</td>
  </tr>
);

export default User;
