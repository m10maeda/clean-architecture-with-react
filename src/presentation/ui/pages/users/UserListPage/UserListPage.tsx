import React, { useCallback, useEffect, VFC } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, PageHeader } from '../../../components';
import AllUserList from './AllUserList';

const UserListPage: VFC = () => {
  useEffect(() => {
    document.title = 'User List';
  }, []);

  const history = useHistory();

  const handleClick = useCallback(() => {
    history.push('/users/new');
  }, [history]);

  return (
    <>
      <PageHeader>User List</PageHeader>

      <Button onClick={handleClick}>Register New User</Button>

      <AllUserList />
    </>
  );
};

export default UserListPage;
