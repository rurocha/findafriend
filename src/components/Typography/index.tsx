import * as S from './styles'
import type * as Stitches from '@stitches/react'

interface Props {
  tag: string
  children: React.ReactNode
  size?: '100' | '200' | '300'
	css?: Stitches.CSS
}

const elements = {
	h1: 'h1',
	h2: 'h2',
	h3: 'h3',
	h4: 'h4',
	h5: 'h5',
	h6: 'h6',
	p: 'p',
	span: 'span',
}

export default function Typography({ tag, children, size }: Props) {

	return (
		<S.Tag 
			as={elements[tag]} 
			size={size}
		>
			{children}
		</S.Tag>
	)
}
