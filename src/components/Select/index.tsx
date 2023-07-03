import * as S from './styles'
import type * as Stitches from '@stitches/react'

interface Props {
  options: {
    label: string
    value: string
  }[]
  onSelect: (value: any) => void
  outlined?: boolean
  css?: Stitches.CSS
}

export default function Select({options, onSelect, outlined, css}: Props) {
  return (
    <S.Select 
      onChange={(e) => onSelect(e.target.value)} 
      outlined={outlined}
      css={css}
    >
      {
        options.map(({ label, value }) => (
          <S.Option 
            key={value} 
            value={value}
          >
            { label }
          </S.Option>
        ))
      }
    </S.Select>
  )
}
