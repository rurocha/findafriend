import * as S from './styles'
import type * as Stitches from '@stitches/react';

interface Props {
  children?: React.ReactNode,
  css: Stitches.CSS
}
export default function Button ({ children, css }: Props) {
  return (
    <S.Button css={css}>
      {children}
    </S.Button>
  )
}