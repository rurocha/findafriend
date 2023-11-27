import { createStitches } from '@stitches/react'

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
			red300: '#F75F64',
			blue100: '#0D3B66',
			yellow: '#F4D35E',
			beige100: '#FDECED',
			beige200: '#FBE1E2',
			gray100: '#E7EBF0',
			gray200: '#D3E2E5',
			gray300: '#F5F8FA',
			green100: '#3CDC8C',
		}
	},

	media: {
		aboveMobile: `(min-width: ${breakingPoints.xs}px)`,
		aboveTablet: `(min-width: ${breakingPoints.sm}px)`,
		aboveDesktop: `(min-width: ${breakingPoints.lg}px)`,
		aboveDesktopXl: `(min-width: ${breakingPoints.xl}px)`,


		belowMobile: `(max-width: ${breakingPoints.xs}px)`,
		belowTablet: `(max-width: ${breakingPoints.sm}px)`,
		belowDesktop: `(max-width: ${breakingPoints.lg}px)`,
		belowDesktopXl: `(max-width: ${breakingPoints.xl}px)`,
	},

	utils: {
	}
})