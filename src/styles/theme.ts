const breakpoints = {
  extraLargeDesktop: 1400,
  largeDesktop: 1140,
  desktop: 992,
  tablet: 768,
  landscapeMobile: 550,
  mobile: 320,
};

export interface Theme {
  palette: {
    primary: string;
    secondary: string;
    background: string;
  };
  shadow: string;
  media: {
    mobile: string;
    landscapeMobile: string;
    tablet: string;
    desktop: string;
    largeDesktop: string;
    extraLargeDesktop: string;
  };
  maxWidth: string;
  breakpoints: {
    [key: string]: number;
  };
}

const theme: Theme = {
  palette: {
    primary: '#FF5858',
    secondary: '#F09819',
    background: '#F5F5F5',
  },
  shadow: '0 0 15px 0 #8B719C',
  media: {
    mobile: `screen and (min-width: ${breakpoints.mobile}px)`,
    landscapeMobile: `screen and (min-width: ${breakpoints.landscapeMobile}px)`,
    tablet: `screen and (min-width: ${breakpoints.tablet}px)`,
    desktop: `screen and (min-width: ${breakpoints.desktop}px)`,
    largeDesktop: `screen and (min-width: ${breakpoints.largeDesktop}px)`,
    extraLargeDesktop: `screen and (min-width: ${breakpoints.extraLargeDesktop}px)`,
  },
  maxWidth: '1200px',
  breakpoints,
};

export default theme;
