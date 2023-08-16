import * as S from './styles'

interface Props extends React.InputHTMLAttributes<HTMLInputElement>{
  type: string
  value: string
  label: string
}

export default function Input({ type, value, label, ...rest }: Props) {

	return (
		<div>
			<S.Label>{label}</S.Label>
			<S.Input 
				type={type}
				value={value}
				{...rest}
			/>
		</div>
	)
}