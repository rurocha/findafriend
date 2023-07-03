import { createStitches } from "@stitches/react";

const breakingPoints = {
  xs: 576,
  sm: 768,
  md: 992,
  lg: 1200,
  xl: 1400,
}

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme
} = createStitches({
  theme: {
    colors: {
      white: '#fff',
      red100: '#F15156',
      red200: '#E44449',
      blue100: '#0D3B66',
      yellow: '#F4D35E',
      beige100: '#FDECED',
      beige200: '#FBE1E2',
    }
  },

  media: {
    aboveMobile: `(min-width: ${breakingPoints.xs}px)`,
    aboveTablet: `(min-width: ${breakingPoints.sm}px)`,
    aboveDesktop: `(min-width: ${breakingPoints.lg}px)`,
    aboveDesktopXl: `(min-width: ${breakingPoints.lg}px)`,
  },
})