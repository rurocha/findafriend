import Image from 'next/image'
import * as S from '../../styles/pages/pets'
import Logo from '@assets/logo.svg'
import SearchIcon from '@assets/icons/search.svg'
import { GetStaticProps } from 'next'
import Select from '@components/Select'
import { useState } from 'react'
import Button from '@components/Button'
import Card from '@components/Card'

import Link from 'next/link'
import { getPets } from 'src/api/pets/services'

interface Props {
  ufs: {
    label: string
    value: string
  }[]
  states: {
    label: string
    value: string
  }[]
  items: {
    label: string
    src: string
    alt: string
    id: number
  }[]
}

export default function Pet({ ufs, states, items }: Props) {
	const [uf, setUf] = useState('')
	const [state, setState] = useState('')
	const [selectedFilters, setSelectedFilters] = useState<string[]>([])

	const filters = [
		{ 
			label: 'Idade', 
			options: [{label: 'Filhote', value: 'filhote'}], 
		},
		{ 
			label: 'Nivel de energia', 
			options: [{label: '03', value: '03'}], 
		},
		{ 
			label: 'Porte do animal', 
			options: [{label: 'Pequenino', value: 'pequenino'}], 
		},
		{ 
			label: 'Nível de independência', 
			options: [{label: 'Médio', value: 'medio'}], 
		},
	]

	function handleSelectUF(value: string) {
		setUf(value)
	}
	function handleSelectState(value: string) {
		setState(value)
	}
	function handleSelectFilters (value: string) {
		setSelectedFilters([...selectedFilters, value])
	}

	return (
		<S.Container>
			<S.Aside>
				<S.AsideHeader>
					<Logo />
					<S.SearchContainer>
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
								outlined
							/>
						</S.StateSelectContainer>
						<Button
							css={{
								backgroundColor: '$yellow'
							}}
						>
							<SearchIcon />
						</Button>
					</S.SearchContainer>
				</S.AsideHeader>

				<S.AsideBody>
					<S.AsideBodyTitle>Filtros</S.AsideBodyTitle>
					<S.AsideFilters>
						{
							filters.map((filter) => (
								<S.AsideFilter key={filter.label}>
									<label htmlFor="">{filter.label}</label>
									<Select 
										options={filter.options}
										onSelect={handleSelectFilters}
										css={{backgroundColor: '$red300'}}
									/>
								</S.AsideFilter>
                
							))
						}
					</S.AsideFilters>

				</S.AsideBody>
			</S.Aside>
      
			<S.Content>
				<S.ContentHeader>
					<span>
						Encontre <strong>{items.length}</strong> amigos na sua cidade
					</span>
					<S.SelectContainer>
						<Select 
							options={states}
							onSelect={handleSelectState}
							outlined
							css={{
								backgroundColor: '$beige200', 
								border: 'none',
								height: 48,
								borderRadius: 15,
								color: '$blue100',
								fontWeight: 400,
							}}
						/>
					</S.SelectContainer>
				</S.ContentHeader>


				<S.ContainerCards>
					{
						items.map((pet, i) => (
							<Link
								key={i}
								href={`/pets/${pet.id}`}
							>              
								<Card 
									src={pet.src} 
									alt={pet.alt} 
									label={pet.label} 
								/>
							</Link>
						))
					}
				</S.ContainerCards>
			</S.Content>
		</S.Container>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const data = await getPets()
  
	const items = data.map(({ name, id}) => ({
		label: name,
		src: 'https://res.cloudinary.com/rrocha/image/upload/v1688397590/thumbnail_Rectangle_29_27eb0288bc.png',
		alt: name,
		id
	}))

	return {
		props: {
			ufs: [
				{ value: 'SP', label: 'SP'},
				{ value: 'RJ', label: 'RJ'}
			],
			states: [
				{ label: 'São Paulo', value: 'SP'},
				{ label: 'Rio de Janeiro', value: 'RJ'}
			],
			items
		}
	}
}