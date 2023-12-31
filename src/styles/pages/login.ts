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
