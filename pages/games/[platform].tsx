import { useRouter } from 'next/router';
import React from 'react';
import BasicLayout from '../../layouts/BasicLayout';

const Platform = () => {
  const { query } = useRouter();

  return (
    <BasicLayout>
      <h1>You are in page: {query.platform}</h1>
    </BasicLayout>
  );
};

export default Platform;
