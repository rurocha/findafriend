import { Pet, PetApi } from './types'

export const mapAuth = ({
	id,
	name,
	about,
	size,
	energy,
	dependency_level,
	user_id,
	photos,
}: PetApi): Pet => ({
	id,
	name,
	about,
	size,
	energy,
	dependencyLevel: dependency_level,
	userId: user_id,
	photos: photos.map(({ url }) => ({
		src: url,
	}))
})