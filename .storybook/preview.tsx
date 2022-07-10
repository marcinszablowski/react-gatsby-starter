import { GlobalStyle, ThemeProvider } from '@/styles';
import React, { ReactNode, ReactElement } from "react";

const viewports = {
  Mobile: {
    name: 'mobile',
    styles: {
      width: '375px',
      height: '667px',
    },
  },
  Tablet: {
    name: 'tablet',
    styles: {
      width: '770px',
      height: '1000px',
    },
  },
  Desktop: {
    name: 'desktop',
    styles: {
      width: '1366px',
      height: '768px',
    },
  },
  LargeDesktop: {
    name: 'large desktop',
    styles: {
      width: '1440px',
      height: '1024px',
    },
  },
};

export const decorators = [
  (storyFn: () => ReactNode): ReactElement => (
      <ThemeProvider>
        <GlobalStyle />
        {storyFn()}
      </ThemeProvider>
  ),
];

export const parameters = {
  decorators: decorators,
  viewports: { viewports },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
