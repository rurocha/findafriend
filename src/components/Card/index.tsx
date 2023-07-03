import Image from 'next/image'
import * as S from './styles'

interface Props {
  src: string
  alt: string
  label: string
}

export default function Card ({ src, alt, label }: Props) {
  return (
    <S.Card>
      <S.Header>
        <Image src={src} alt={alt} width={274} height={135}/>
      </S.Header>
      <S.Content>
        <S.Label>{ label }</S.Label>
      </S.Content>
    </S.Card>
  )
}