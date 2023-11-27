import { api } from '..'
import { Auth } from './types'

export const login = async (email: string, password: string): Promise<Auth> => {
	const configs = {
		url: 'http://localhost:4000/auth',
		method: 'POST',
		data: {
			email,
			password
		}
	}

	const res = await api(configs)
	return res.data
}