import { css } from 'styled-components';

interface BreakPoints {
  [key: string]: string;
}

export const breakpoints: BreakPoints = {
  mobile: '480px',
  tablet: '768px',
  desktop: '1024px',
  wide: '1280px',
};

export const applyFromBreakPoint: any = (
  breakPoint: string,
  content: string
) => css`
  @media (min-width: ${breakPoint}) {
    ${content};
  }
`;
