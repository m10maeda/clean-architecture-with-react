import React, { useEffect, VFC } from 'react';
import { PageHeader } from '../../components';

const NotFoundPage: VFC = () => {
  useEffect(() => {
    document.title = 'Not found';
  }, []);

  return (
    <>
      <PageHeader>Not Found</PageHeader>
    </>
  );
};

export default NotFoundPage;
