interface PhotoApi {
  url: string
}

interface Photo {
  src: string
}

export interface PetApi {
  id: number
  name: string
  about: string
  size: string
  energy: string
  dependency_level: string
  user_id: number
  photos: PhotoApi[]
}

export interface Pet {
  id: number
  name: string
  about: string
  size: string
  energy: string
  dependencyLevel: string
  userId: number
  photos: Photo[]
}