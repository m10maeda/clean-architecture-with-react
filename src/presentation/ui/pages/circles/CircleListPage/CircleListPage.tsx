import React, { useCallback, useEffect, VFC } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, PageHeader } from '../../../components';
import CircleList from './CircleList';

const CircleListPage: VFC = () => {
  useEffect(() => {
    document.title = 'Circle List';
  }, []);

  const history = useHistory();

  const handleClick = useCallback(() => {
    history.push('/circles/new');
  }, [history]);

  return (
    <>
      <PageHeader>Circle List</PageHeader>

      <Button onClick={handleClick}>Register New Circle</Button>

      <CircleList />
    </>
  );
};

export default CircleListPage;
