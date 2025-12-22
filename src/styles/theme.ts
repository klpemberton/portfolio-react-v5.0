/**
 * Theme configuration - Reference only
 * Actual styles are in globals.css using CSS variables
 * This file is kept for TypeScript type checking and reference
 */

export interface Theme {
  breakpoints: {
    desktop: {
      minWidth: number;
    };
    mobile: {
      maxWidth: number;
    };
  };
  colors: {
    [key: string]: string;
  };
  fontStacks: {
    [key: string]: string;
  };
}

export const theme: Theme = {
  breakpoints: {
    desktop: { minWidth: 875 },
    mobile: { maxWidth: 874 },
  },
  colors: {
    contact: '#FF1493',
    about: '#00BFFF',
    portfolio: '#ffe900',
    home: '#836fff',
    error: 'red',
    success: '#22D900',
    midPurple: '#cbc2fd',
    lightPurple: '#ebe8f3',
  },
  fontStacks: {
    montserrat: "'Montserrat', 'helvetica-neue', 'arial', sans-serif",
  },
};
