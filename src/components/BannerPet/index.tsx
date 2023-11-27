import Pets from '@assets/pets.svg'
import Logo from '@assets/logo.svg'
import * as S from './styles'

export default function BannerPet() {
	return (
		<S.Banner>
			<Logo />
			<Pets viewBox="0 0 592 305" />
		</S.Banner>
	)
}
