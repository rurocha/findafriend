
import dynamic from 'next/dynamic'
import React, { useEffect, useState } from 'react'
import { getPets } from 'src/api/pets/services'
import { Pet } from 'src/api/pets/types'
import { useAuth } from 'src/hooks/useAuth'

function MyAccount() {
	const { user } = useAuth()
	const [myPets, setMyPets] = useState<Pet[]>([])

	async function getPetsByUser() {
		if(user.id) {
			const data = await getPets(user.id)
			setMyPets(data)
		}
	}

	useEffect(() => {
		getPetsByUser()
	}, [user])

	if(!user) {
		return (
			<div>loading...</div>
		)
	}

	return (
		<div>
			<h1>minha conta</h1>
			<h2>name: {user.name}</h2>
			{
				myPets.map((pet, i) => (
					<div key={i}>{ pet.name }</div>
				))
			}
		</div>
	)
}

export default dynamic(() => Promise.resolve(MyAccount), {
	ssr: false,
})