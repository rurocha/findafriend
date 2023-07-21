import { styled } from '@styles/index'
import Image from 'next/image'

export const Container = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	gap: 32,
})

export const Images = styled('div', {
	display: 'flex',
	gap: 16,
	justifyContent: 'center'
})

export const Img = styled(Image, {
	height: 60,
	width: 60,
	objectFit: 'cover',
	borderRadius: 15,
	opacity: '0.5',
	cursor: 'pointer',
	transition: 'all 1s ease',
	border: '4px solid transparent',
	variants: {
		active: {
			true: {
				border: '4px solid $blue100',
				opacity: 1
			}
		}
	}
})

export const CurrentImage = styled(Image, {
	height: 366,
	objectFit: 'cover'
})