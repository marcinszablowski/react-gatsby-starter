import type { ReactElement } from 'react';
import React from 'react';
import { createGlobalStyle } from 'styled-components';

import type { Theme } from '@/styles/theme';

interface StyleProps {
  theme: Theme;
}

const Style = createGlobalStyle<StyleProps>`
  * {
    box-sizing: border-box;
  }
    
  html {
    scroll-behavior: smooth;
  }
  
  body {
    font-family: Roboto, Helvetica, Arial, sans-serif;
    background: ${({ theme }) => theme.palette.background};
    color: ${({ theme }) => theme.palette.primary};
    margin: 0;
    padding: 0;
    max-width: 100vw;
    height: 100%;
    overflow-x: hidden;
  }
  
  input:focus-visible, 
  button:focus-visible, 
  a:focus-visible, 
  textarea:focus-visible, 
  select:focus-visible {
  
  }

  ul, 
  li {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  a {
    cursor: pointer;
    text-decoration: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: Roboto, Helvetica, Arial, sans-serif;
    font-weight: normal;
    text-transform: uppercase;
    margin: 0;
    padding: 0;
  }
`;

const GlobalStyle = (): ReactElement => <Style />;

export default GlobalStyle;
