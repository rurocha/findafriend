import { globalCss } from './'

export const globalStyles = globalCss({
	'*': {
		margin: 0,
		padding: 0,
		boxSizing: 'border-box',
	},
	body: {
		fontFamily: 'Nunito',
		color: '$blue100'
	},
	'select, input, textarea, button': {
		fontFamily: 'Nunito',
		fontWeight: 400,
	},
	'img, svg': {
		maxWidth: '100%',
		height: 'auto'
	},
	svg: {
		overflow: 'visible'
	},
	a: {
		textDecoration: 'none'
	},
	fieldset: {
		border: 'none'
	}
})