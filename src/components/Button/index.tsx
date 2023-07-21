import * as S from './styles'
import type * as Stitches from '@stitches/react'
interface Props {
  children?: React.ReactNode
  css?: Stitches.CSS
	theme?: 'gray'
	size?: 'small' | 'medium'
	iconComponent?: React.ComponentType
}

export default function Button ({ children, css, theme, size, iconComponent: Icon }: Props) {
	return (
		<S.Button 
			css={css} 
			theme={theme} 
			size={size}
			hasIcon={!!Icon}
		>
			{ Icon && <Icon /> }
			{children}
		</S.Button>
	)
}