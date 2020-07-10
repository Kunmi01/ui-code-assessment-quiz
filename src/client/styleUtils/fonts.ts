import { css } from "styled-components";

interface FontProperties {
  [key: string]: string;
}

export const fonts: FontProperties = {
  playRegular: "PlayRegular, sans-serif",
  playBold: "PlayBold, sans-serif",
};

export const fontSizes: FontProperties = {
  xxs: "10px",
  xs: "12px",
  s: "14px",
  m: "17px",
  ml: "20px",
  l: "24px",
  xl: "32px",
  xxl: "40px",
  xxxl: "48px",
};

export const fontFace: any = (name: string, filepath: string) =>
  css`
        @font-face {
            font-family: ${name};
            src: url('${filepath}.eot') /* IE9 Compat Modes */;
            src: url('${filepath}.eot?#iefix') format('embedded-opentype') /* IE6-IE8 */,
                url('${filepath}.woff2') format('woff2') /* Super Modern Browsers */,
                url('${filepath}.woff') format('woff') /* Pretty Modern Browsers */,
                url('${filepath}.ttf') format('truetype') /* Safari, Android, iOS */,
                url('${filepath}.svg') format('svg') /* Legacy iOS */;
            font-weight: normal;
            font-style: normal;
        }
    `;
