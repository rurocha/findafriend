import * as S from './styles'
import type * as Stitches from '@stitches/react'

interface Props extends React.InputHTMLAttributes<HTMLInputElement>{
  type: string
  value: string
  label: string
	css?: Stitches.CSS
}

export default function Input({ type, value, label, css, ...rest }: Props) {

	return (
		<fieldset>
			<S.Label>{label}</S.Label>
			<S.Input 
				type={type}
				value={value}
				css={css}
				{...rest}
			/>
		</fieldset>
	)
}