import React, { VFC } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  id: string;
  name: string;
};

const User: VFC<Props> = ({ id, name }) => (
  <tr>
    <th scope="row">{id}</th>
    <td>
      <Link to={`/users/${id}`}>{name}</Link>
    </td>
  </tr>
);

export default User;
