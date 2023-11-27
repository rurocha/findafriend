'use client'
import { useState } from 'react'
import Input from '@components/Input'
import * as S from '@styles/pages/login'
import Button from '@components/Button'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useAuth } from 'src/hooks/useAuth'
const AuthLayout = dynamic(() => import('layouts/Auth'), { ssr: false })

export default function Login () {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const { postLogin } = useAuth()

	function handleLogin (e) {
		e.preventDefault()
		postLogin(email, password)
	}

	return (
		<AuthLayout>
			<S.Title>Boas-vindas!</S.Title>      
			<S.Form>
				<div></div>
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
					css={{marginBottom: 61}}
				/>
				
				<Button 
					theme="blue"
					onClick={handleLogin}
				>
					Login
				</Button>
				<Button>
					Cadastrar
				</Button>
			</S.Form>      
		</AuthLayout>
	)
}