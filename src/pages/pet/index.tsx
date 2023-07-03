import Image from 'next/image'
import * as S from '../../styles/pages/pet'
import logo from '@assets/logo.svg'
import searchIcon from '@assets/icons/search.svg'
import { GetStaticProps } from 'next'
import Select from '@components/Select'
import { useState } from 'react'
import Button from '@components/Button'
import Card from '@components/Card'

import dogImg from '@assets/img/pet-1.png' // remover

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
  }[]
}

export default function Pet({ ufs, states, items }: Props) {
  const [uf, setUf] = useState('')
  const [state, setState] = useState('')

  function handleSelectUF(value: string) {
    setUf(value)
  }
  function handleSelectState(value: string) {
    setState(value)
  }

  return (
    <S.Container>
      <S.Aside>
        <S.AsideHeader>
          <Image src={logo} alt="logo"/>
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
              <Image src={searchIcon} alt="search icon" />
            </Button>
          </S.SearchContainer>
        </S.AsideHeader>
        <S.AsideBody>
        </S.AsideBody>
      </S.Aside>
      
      <S.Content>
        <S.ContentHeader>
          <span>Encontre 324 amigos na sua cidade</span>
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
                <Card 
                  key={i}
                  src={pet.src} 
                  alt={pet.alt} 
                  label={pet.label} 
                />
            ))
          }
        </S.ContainerCards>
      </S.Content>
    </S.Container>
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
      ],
      items: [
        { label: 'Alfredo', src: dogImg, alt: 'cachorro chamado alfredo'},
        { label: 'Juscelino', src: dogImg, alt: 'cachorro chamado alfredo'},
        { label: 'Juscelino', src: dogImg, alt: 'cachorro chamado alfredo'},
        { label: 'Juscelino', src: dogImg, alt: 'cachorro chamado alfredo'},
        { label: 'Juscelino', src: dogImg, alt: 'cachorro chamado alfredo'},
        { label: 'Juscelino', src: dogImg, alt: 'cachorro chamado alfredo'},
      ]
    }
  }
}