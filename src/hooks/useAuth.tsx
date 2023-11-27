import { useContext, createContext, useState, useEffect } from 'react'
import { Auth } from 'src/api/auth/types'
import { login } from 'src/api/auth/services'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'

const AuthContext = createContext(null)

interface AuthProviderProps {
  children: React.ReactNode
}

const storageName = 'user'

let UserService = null
if(typeof window !== 'undefined') {
	UserService = {
		save: (user: Auth) => localStorage.setItem(storageName, JSON.stringify(user)),
		get: () => localStorage.getItem(storageName)
	
	}
}

function AuthProvider ({ children }: AuthProviderProps) {
	const [user, setUser] = useState<Auth>({} as Auth)
	const { push } = useRouter()

	function postLogin(email, password) {
		return login(email, password)
			.then((data) => setUser(() => {
				UserService.save(data)
				push('/my-account')
				return data
			}))
			.catch(({ response }) => toast.error(response?.data?.error))
	}

	useEffect(() => {
		const user = UserService.get()
		if(user) {
			setUser(JSON.parse(user))
		}
	}, [])

	return (
		<AuthContext.Provider value={{user, postLogin}}>
			{ children }
		</AuthContext.Provider>
	)
}

function useAuth () {
	return useContext(AuthContext)
}

export {
	useAuth,
	AuthProvider,
	UserService
}

