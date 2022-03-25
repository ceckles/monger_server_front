import React from 'react';
import { SimpleGrid } from '@mantine/core';
import MediaCard  from '../MediaCard';

const LatestPosts = () => {
  return (
    <SimpleGrid cols={3} spacing="sm">
    <div><MediaCard/></div>
    <div><MediaCard/></div>
    <div><MediaCard/></div>
  </SimpleGrid>
  );
}
export default LatestPosts;
