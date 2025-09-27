import { Metadata } from 'next';
import React from 'react';
import AddProduct from '../../../../../components/server/AddProduct';

export const metadata: Metadata = {
  title: "NextCommerce | Orders",
  description: "Add product in NextCommerce",
};

const Page = () => {
  return <AddProduct />;
};

export default Page;
