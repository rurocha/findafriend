import { styled } from '@styles/index'

export const Cards = styled('div', {
	display: 'flex',
	justifyContent: 'space-between',
	gap: 14,
})

export const Card = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	border:' 2px solid $gray100',
	padding: 26,
	borderRadius: 20,
	flex: 1,
})

export const ContainerIcons = styled('div', {
	display: 'flex',
	marginBottom: 16,
})

export const Label = styled('span', {
	display: 'block',
	fontSize: 18,
	fontWeight: 600,
	color: '$blue100',
	whiteSpace: 'nowrap'
})