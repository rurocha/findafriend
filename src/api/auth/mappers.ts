import { Auth, AuthApi } from './types'

export const mapAuth = ({
	id, email, zip_code, address, name, whatsapp, token
}: AuthApi): Auth => ({
	id, 
	email, 
	zipCode: zip_code, 
	address, 
	name,
	whatsapp,
	token,
})