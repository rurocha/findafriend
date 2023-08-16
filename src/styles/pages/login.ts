import { styled } from '..'

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

export const Content = styled('div', {

})

export const Form = styled('form', {
	display: 'flex',
	flexDirection: 'column',
	gap: 16,
})

export const Title = styled('h2', {
	fontSize: 54,
	marginBottom: 102,
})
