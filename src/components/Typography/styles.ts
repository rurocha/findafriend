import { styled } from '@styles/index'

export const Tag = styled('span', {

	variants: {
		size: {
			'100': {
				fontSize: 40,
			},
			'200': {
				fontSize: 54,
			},
			'300': {
				fontSize: 72,
			},
		},

		weight: {
			fontWeight: {
				'400': {
					fontWeight: '400'
				},
				'600': {
					fontWeight: '600'
				},
				'700': {
					fontWeight: '700'
				},
				'800': {
					fontWeight: '800'
				}
			}
		}
	}
})