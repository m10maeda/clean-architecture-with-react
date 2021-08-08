import React, { useEffect, VFC } from 'react';
import { PageHeader } from '../../components';
import CircleList from './CircleList';

const CircleListPage: VFC = () => {
  useEffect(() => {
    document.title = 'User List';
  }, []);

  return (
    <>
      <PageHeader>Circle List</PageHeader>

      <CircleList />
    </>
  );
};

export default CircleListPage;
