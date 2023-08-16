import { styled } from '@styles/index'


export const Input = styled('input', {
	appearance: 'none',
	borderRadius: 10,
	border: '1px solid $gray200',
	backgroundColor: '$gray300',
	padding: 18,
	width: '100%',
	color: '$blue100',
	fontWeight: 700,

	'&::placeholder': {
		color: 'inherit',
		fontWeight: 600,
	},
})

export const Label = styled('label', {
	display: 'block',
	marginBottom: 8,
	color: '$blue100'
})