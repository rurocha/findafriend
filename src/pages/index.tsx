import { useState } from 'react'

import Logo from '@assets/logo.svg'
import Pets from '@assets/pets.svg'
import * as S from '@styles/pages/home'
import Select from '@components/Select'
import { GetStaticProps } from 'next'

interface UFs {
  value: string
  label: string
}
interface State {
  value: string
  label: string
}
interface Props {
  ufs: UFs[],
  states: State[]
}

export default function Home({ ufs, states }: Props) {
	const [uf, setUf] = useState('')
	const [state, setState] = useState('')

	function handleSelectUF(value: string) {
		setUf(value)
	}
	function handleSelectState(value: string) {
		setState(value)
	}

	return (
		<S.Page>
			<S.Container>
				<S.LogoContainer>
					<Logo />
					<span>FindAFriend</span>
				</S.LogoContainer>
        
				<S.ContentHeading>
					<S.Heading>Leve a felicidade para o seu lar</S.Heading>
					<Pets viewBox="0 0 592 305" />
				</S.ContentHeading>
				<S.Footer>
					<S.Subtitle> Encontre o animal de estimação ideal para seu estilo de vida! </S.Subtitle>
					<S.SearchContainer>
						<span>Busque um amigo:</span>
						<S.UfSelectContainer>
							<Select 
								options={ufs}
								onSelect={handleSelectUF}
								outlined
							/>
						</S.UfSelectContainer>
						<S.StateSelectContainer>
							<Select 
								options={states}
								onSelect={handleSelectState}
							/>
						</S.StateSelectContainer>
					</S.SearchContainer>
				</S.Footer>
			</S.Container>
		</S.Page>
	)
}

export const getStaticProps: GetStaticProps = () => {

	return {
		props: {
			ufs: [
				{ value: 'SP', label: 'SP'},
				{ value: 'RJ', label: 'RJ'}
			],
			states: [
				{ label: 'São Paulo', value: 'SP'},
				{ label: 'Rio de Janeiro', value: 'RJ'}
			]
		}
	}
}
