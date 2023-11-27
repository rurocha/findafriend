import { ButtonHTMLAttributes } from 'react'
import * as S from './styles'
import type * as Stitches from '@stitches/react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  css?: Stitches.CSS
	theme?: 'gray' | 'green' | 'blue'
	size?: 'small' | 'medium'
	iconComponent?: React.ComponentType,
	fullWidth?: boolean
}

export default function Button ({ children, css, theme, size, iconComponent: Icon, fullWidth, ...rest }: Props) {
	return (
		<S.Button 
			css={css} 
			theme={theme} 
			size={size}
			hasIcon={!!Icon}
			fullWidth={fullWidth}
			{...rest}
		>
			{ Icon && <Icon /> }
			{children}
		</S.Button>
	)
}