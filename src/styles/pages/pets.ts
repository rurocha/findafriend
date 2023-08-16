import { styled } from '..'

export const Container = styled('div', {
	'@aboveDesktop': {
		display: 'grid',
		gridTemplateColumns: '392px 1fr',
		height: '100vh'
	}
})

export const Aside = styled('aside', {
	display: 'flex',
	flexDirection: 'column'
})

export const AsideHeader = styled('header', {
	backgroundColor: '$red200',
	padding: '81px 40px 27px 56px',
})

export const AsideBody = styled('div', {
	backgroundColor: '$red100',
	height: '100%',
	padding: '35px 56px 40px 56px',
})

export const SearchContainer = styled('div', {
	display: 'flex',
	gap: 12,
	marginTop: 26,
})

export const UfSelectContainer = styled('div', {
	flex: 1,
})

export const StateSelectContainer = styled('div', {
	flex: 2,
})

export const Content = styled('div', {
	backgroundColor: '$beige100',
	padding: 32,
})

export const ContentHeader = styled('div', {
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	marginBottom: 49,
})

export const SelectContainer = styled('div', {
	width: 210,
})

export const ContainerCards = styled('div', {
	display: 'grid',
	gridTemplateColumns: '1fr 1fr',
	gap: 16,
	'@aboveTablet': {
		gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 280px))',
		gap: 32,
	}
})

export const AsideBodyTitle = styled('h6', {
	fontSize: 20,
	color: '$white',
	marginBottom: 27,
})

export const AsideFilters = styled('div', {
	'label': {
		color: '$white',
		marginBottom: 12,
		display: 'block'
	}
})

export const AsideFilter = styled('div', {
	marginBottom: 32,
})
