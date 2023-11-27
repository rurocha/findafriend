import { api } from '..'
import { Pet } from './types'


export const getPets = async (userId?: string | number): Promise<Pet[]> => {
	const configs = {
		url: 'http://localhost:4000/pets',
		method: 'GET',
		params: {
			...userId && {user_id: userId}
		}
	}
	const res = await api(configs)

	return res.data
}

export const getPet = async (id: string | number): Promise<Pet> => {
	const configs = {
		url: `http://localhost:4000/pets/${id}`,
		method: 'GET'
	}

	const res = await api(configs)
	return res.data
}