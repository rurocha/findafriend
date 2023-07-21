import type * as Stitches from '@stitches/react'
import { styled } from '@styles/index'

export const Button = styled('button', {
	padding: 19,
	borderRadius: 20,
	border: 'none',
	cursor: 'pointer',
	fontSize: 18,
	color: '$blue100',

	variants: {
		theme: {
			gray: {
				backgroundColor: '$gray100',
				fontWeight: 700,
				borderRadius: 10,
			}
		},
		
		fullWidth: {
			true: {
				width: '100%'
			}
		},
		
		size: {
			small: {
				padding: '13px 27px',
			},
			medium: {
				padding: 19,
			}
		},
		
		hasIcon: {
			true: {
				display: 'flex',
				alignItems:'center',
				gap: 8,
			}
		}
	}
})

export type StyledButtonVariants = Stitches.VariantProps<typeof Button>