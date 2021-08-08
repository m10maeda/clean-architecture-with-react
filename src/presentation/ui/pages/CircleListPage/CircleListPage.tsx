import React, { VFC } from 'react';
import { PageHeader } from '../../components';
import CircleList from './CircleList';

const CircleListPage: VFC = () => (
  <>
    <PageHeader>Circle List</PageHeader>

    <CircleList />
  </>
);

export default CircleListPage;
