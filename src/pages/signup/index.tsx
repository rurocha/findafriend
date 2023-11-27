import Typography from '@components/Typography'
import dynamic from 'next/dynamic'

const AuthLayout = dynamic(() => import('layouts/Auth'), { ssr: false })

import { useForm, SubmitHandler } from 'react-hook-form'

type Inputs = {
  nombre: string
  email: string
}

export default function Signup() {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<Inputs>()


	const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

	return (
		<AuthLayout>
			<Typography 
				css={{ textAlign: 'center'}} 
				tag="h2" 
				size="200"
			>
				Cadastre sua organização 
			</Typography>


			<form onSubmit={handleSubmit(onSubmit)}>

				<input  name="nombre" {...register('nombre', { required: true })} />
				<input {...register('email', { required: true })} />

				<input type="submit" />
			</form>
		
		</AuthLayout>
	)
}
