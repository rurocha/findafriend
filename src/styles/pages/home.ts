import { styled } from '..'

export const Page = styled('div', {
	backgroundColor: '$red100',
})

export const Container = styled('div', {
	maxWidth: 1200,
	margin: '0 auto',
	padding: '0 16px',
	height: '100vh',
	display: 'grid',

	'@aboveDesktop': {
		gridTemplateRows: '1fr auto 1fr',
	}
})

export const LogoContainer = styled('div', {
	display: 'flex',
	gap: 12,
	alignItems: 'center',
	'& span': {
		color: '$white',
		fontWeight: 600,
	},

	'@aboveMobile': {
	}
})

export const ContentHeading = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',

	'@aboveDesktop': {
		justifyContent: 'space-between',
		flexDirection: 'row',
	}
})


export const Heading = styled('h1', {
	color: '$white',
	fontSize: 52,
	letterSpacing: -1.44,
	marginBottom: 32,
	lineHeight: '90%',
	maxWidth: 487,
	'@aboveDesktop': {
		margin: 0,
		fontSize: 72,
		maxWidth: 487,
	}
})

export const Footer = styled('footer', {
	'@aboveDesktop': {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		flex: 1,
	},
})

export const Subtitle = styled('p', {
	fontSize: 18,
	fontWeight: 600,
	maxWidth: 407,
	'@belowDesktop': {
		marginBottom: 8,
	},
	color: '$white',
	'@aboveDesktop': {
		fontSize: 24,
	}
})

export const SearchContainer = styled('div', {
	color: '$white',
	display: 'flex',
	flexDirection: 'column',
	gap: 12,

	'@aboveDesktop': {
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
		'& span': {
			gap: 23,
		}
	}
})

export const UfSelectContainer = styled('div', {
	'@aboveDesktop': {
		maxWidth: 72,
		marginRight: 10,
	}
})

export const StateSelectContainer = styled('div', {
	'@aboveDesktop': {
		width: 280,
		marginRight: 32,
	}
})

