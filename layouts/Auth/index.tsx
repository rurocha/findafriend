import BannerPet from '@components/BannerPet'
import * as S from './styles'

interface Props {
  children: React.ReactNode
}

export default function AuthLayout({ children }: Props) {
	return (
		<S.Container>
			<BannerPet />
			<div>
				{ children }
			</div>
		</S.Container>
	)
}
