import React from 'react'
import { AppProps } from 'next/app'
import 'react-toastify/dist/ReactToastify.css'
import dynamic from 'next/dynamic'
import { AuthProvider } from 'src/hooks/useAuth'

const ToastContainer = dynamic(() => import('react-toastify')
	.then((module) => module.ToastContainer), {
	ssr: false,
})

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<AuthProvider>
				<Component {...pageProps} /> 
			</AuthProvider>
			<ToastContainer />
		</>
	)
}

export default MyApp
