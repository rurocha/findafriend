import type * as Stitches from '@stitches/react'
import { styled } from '@styles/index'

export const Button = styled('button', {
	padding: 19,
	borderRadius: 20,
	border: 'none',
	cursor: 'pointer',
	fontSize: 18,
	color: '$blue100',
	fontWeight: 700,

	variants: {
		theme: {
			gray: {
				backgroundColor: '$gray100',
				borderRadius: 10,
			},
			green: {
				borderRadius: 20,
				backgroundColor: '$green100',
				color: '$white',
			},
			blue: {
				backgroundColor: '$blue100',
				color: '$white',
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
				justifyContent: 'center',
				gap: 8,
			}
		}
	}
})

export type StyledButtonVariants = Stitches.VariantProps<typeof Button>