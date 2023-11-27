import { styled } from '@styles/index'

export const Container = styled('div', {
	maxWidth: 1112,
	padding: 32,
	margin: '0 auto',
	'@aboveDesktop': {
		display: 'grid',
		gridTemplateColumns: '1fr 1fr',
		justifyContent: 'space-between',
		gap: 139,
		paddingBlock: 80,
		height: '100vh',
		alignItems: 'center'
	}
})