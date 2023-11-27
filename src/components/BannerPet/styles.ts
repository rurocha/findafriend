import { styled } from '@styles/index'

export const Banner = styled('div', {
	backgroundColor: '$red100',
	borderRadius: 20,
	height: '100%',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'space-between',
	padding: 32,
	marginBottom: 32,
	gap: 32,
	maxHeight: 661,
	
	'@aboveDesktop': {
		padding: '50px 52px 39px 52px'
	},

	'@aboveDesktopXl': {
		padding: '107px 52px 39px 52px'
	}
})