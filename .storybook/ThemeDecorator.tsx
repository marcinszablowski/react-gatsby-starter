import React from 'react';
import { GlobalStyle } from '@/styles';

export default (storyFn: () => React.ReactNode) => (
    <>
      <GlobalStyle />
      {storyFn()}
    </>
);
