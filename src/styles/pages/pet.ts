import { styled } from '..'

export const Background = styled('div', {
	backgroundColor: '$beige100',
	padding: '48px 0'
})

export const Container = styled('div', {
	maxWidth: 700,
	margin: '0 auto',
	backgroundColor: '$white',
	borderRadius: 20,
	overflow: 'hidden'
})

export const Content = styled('div', {
	padding: '0 72px 72px 72px',
})

export const Title = styled('h1', {
	fontSize: 54,
	fontWeight: 800,
	marginBottom: 26,
})

export const Description = styled('h1', {
	fontSize: 18,
	fontWeight: 600,
	marginBottom: 43,
})

export const ContainerContact = styled('div', {
	display: 'flex',
	alignItems: 'flex-start',
	gap: 18,
	marginBottom: 50,
	'& img': {
		objectFit: 'contain'
	}
})

export const Contact = styled('div', {
	display: 'flex',
	gap: 18,
})

export const Name = styled('h6', {
	fontSize: 30,
	fontWeight: 700,
	marginBottom: 6,
})

export const Address = styled('p', {
	marginBottom: 17,
	fontWeight: 600,
})

export const RequirementsTitle = styled('h6', {
	fontSize: 30,
	marginBottom: 40,
	fontWeight: 700,
})

export const ContainerRequirements = styled('div', {
	paddingInline: 40,
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
})

export const RequirementsCard = styled('div', {

})

