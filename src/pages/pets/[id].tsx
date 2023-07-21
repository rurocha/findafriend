import { useRouter } from 'next/router'
import Image from 'next/image'

import { getPet, getPets } from 'src/api/pets/services'
import { Pet } from 'src/api/pets/types'

import * as S from '@styles/pages/pet'
import Slider from '@components/Slider'
import CardsPetDetails from '@components/CardsPetDetails'
import Button from '@components/Button'

import photo from '@assets/img/photo.png'
import photo2 from '@assets/img/photo-2.webp'
import maps from '@assets/img/maps.png'
import EnergyIcon from '@assets/icons/energy.svg'
import EllipseIcon from '@assets/icons/ellipse.svg'
import MaximizeIcon from '@assets/icons/maximize.svg'
import avatar from '@assets/img/avatar.png'
import WhatsAppIcon from '@assets/icons/whatsapp.svg'
import alert from '@assets/icons/alert.svg'


const imgs = [
	{
		src: photo,
		alt: 'lalalal',
	},
	{
		src: photo2,
		alt: 'asadasds',
	}
]

interface Props {
  data: Pet
}

export default function PetId({ data }: Props) {
	const { isFallback } = useRouter()

	if(isFallback) {
		return (
			<S.Background>
				<p>loading...</p>
			</S.Background>
		)
	}

	return (
		<S.Background>
			<S.Container>
				<Slider
					imgs={imgs}
					css={{ marginBottom: 70}}
				/>
				<S.Content>
					<S.Title>{ data.data.attributes.name }</S.Title>
					<S.Description>{ data.data.attributes.description }</S.Description>
					<CardsPetDetails
						cards={[
							{ label: 'Muita energia', icon: EnergyIcon },
							{ label: 'Ambiente amplo', icon: MaximizeIcon },
							{ label: 'Pequenino', icon: EllipseIcon }
						]}
						css={{
							marginBottom: 70,
						}}
					/>
					{/* todo: integrate google maps */}
					<Image src={maps} alt="mapa" style={{ marginBottom: 40 }}/>

					<S.ContainerContact>
						<Image src={avatar} alt="avatar" />
						<div>
							<S.Name>Seu Cãopanheiro</S.Name>
							<S.Address>Rua do meio, 123 , Boa viagem, Recife - PE </S.Address>
							<Button theme="gray" size="small" iconComponent={WhatsAppIcon}>
                81 1234.4567
							</Button>
						</div>
					</S.ContainerContact>

					<S.ContainerRequirements>
						<S.RequirementsTitle>Requisitos para adoção</S.RequirementsTitle>
						<S.RequirementsCard> 
							<Image src={alert} alt="icone de alerta" />
						</S.RequirementsCard>
					</S.ContainerRequirements>
				</S.Content>
			</S.Container>
		</S.Background>
	)
}

export async function getStaticPaths() {
	const data = await getPets()
	const paths = data.data.map(({ id }) => ({
		params: { id: String(id) }
	}))

	return {
		paths,
		fallback: false
	}
}

export const getStaticProps = async ({ params }) => {
	const { id } = params
	const data = await getPet(id)

	return {
		props: {
			data
		}
	}
}