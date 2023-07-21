import { api } from '..'
import { Pets, Pet } from './types'


export const getPets = async (): Promise<Pets> => {
	const configs = {
		url: '/pets?populate=*',
		method: 'GET'
	}

	const res = await api(configs)
	return res.data
}

export const getPet = async (id: string | number): Promise<Pet> => {
	const configs = {
		url: `/pets/${id}?populate=*`,
		method: 'GET'
	}

	const res = await api(configs)
	return res.data
}