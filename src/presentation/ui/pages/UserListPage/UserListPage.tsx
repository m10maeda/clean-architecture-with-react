import React, { useEffect, VFC } from 'react';

const UserListPage: VFC = () => {
  useEffect(() => {
    document.title = 'User List';
  }, []);

  return <div>UserListPage</div>;
};

export default UserListPage;
