import type * as Stitches from '@stitches/react'
import * as S from './styles'

interface Card {
  label: string
  icon: any
}
interface Props {
  cards: Card[]
  css?: Stitches.CSS
}

export default function CardsPetDetails ({ cards, css }: Props) {
	return (
		<S.Cards css={css}>
			{
				cards.map(({ label, icon: Icon }, i) => (
					<S.Card key={i}>
						<S.ContainerIcons>
							{
								[...Array(3)].map((_, i) => (
									<Icon key={i} />
								))
							}
						</S.ContainerIcons>
						<S.Label>{ label }</S.Label>
					</S.Card>
				))
			}
		</S.Cards>
	)
}