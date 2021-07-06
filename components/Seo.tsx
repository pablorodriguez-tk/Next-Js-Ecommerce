import React from 'react';
import Head from 'next/head';

const Seo = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta property="description" content={description} />
    </Head>
  );
};

Seo.defaultProps = {
  title: 'Gaming - Your Favorite Games',
  description:
    'Your favorite games for steam, playstation, xbox, switch at the best price',
};

export default Seo;
