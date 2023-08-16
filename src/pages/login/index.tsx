import { useState } from 'react'
import Input from '@components/Input'
import * as S from '@styles/pages/login'

import Pets from '@assets/pets.svg'
import Logo from '@assets/logo.svg'
import Button from '@components/Button'

export default function Login () {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	return (
		<S.Container>
			<S.Banner>
				<Logo />
				<Pets viewBox="0 0 592 305" />
			</S.Banner>

			<S.Content>
				<S.Title>Boas-vindas!</S.Title>      
				<S.Form>
					<Input
						type="text"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder="Digite seu email"
						label="Email"
					/>
					<Input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						placeholder="Digite sua senha"
						label="Senha"
					/>
				
					<Button 
						theme="blue"
					>
						Login
					</Button>
				</S.Form>      
			</S.Content>
		</S.Container>  
	)
}