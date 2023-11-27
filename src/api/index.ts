import axios from 'axios'
import { UserService } from 'src/hooks/useAuth'

const isServer = typeof window === 'undefined'
console.log(isServer)
const api = axios.create({
	baseURL: process.env.API_BASE_URL
})


// api.interceptors.request.use(
// 	(config) => {
// 		const user = {}
// 		if (user.token) {
// 			config.headers.authorization = `Bearer ${user.token}`
// 		}
// 		return config
// 	},
// 	(error) => {
// 		return Promise.reject(error)
// 	}
// )


// api.interceptors.response.use(
// 	(response) => {
// 		return response
// 	},
// 	(error) => {
// 		const isLoginCurrentPage = location.pathname === '/login'
		
// 		if(error.response.status === 401 && !isLoginCurrentPage) {
// 			location.href = '/login'
// 		}
// 		return Promise.reject(error)
// 	}
// )

// Add a request interceptor
api.interceptors.request.use(function (config) {
	// Do something before request is sent
	console.log('intercepted')
	// if (!isServer) {
	// 	const user = JSON.parse(UserService.get())
	// 	if(user) {
	// 		config.headers.authorization = `Bearer ${user.token}`
	// 	}
	// }
	return config
}, function (error) {
	return Promise.reject(error)
})

api.interceptors.response.use(function (response) {
	return response
}, function (error) {
	// if (!isServer) {
	// 	console.log('if')
	// 	const isLoginCurrentPage = location.pathname === '/login'
	// 	if(error.response.status === 401 && !isLoginCurrentPage) {
	// 		location.href = '/login'
	// 	}
	// }
	return Promise.reject(error)
})


export { api }