export interface Pets {
  data: Root[]
  meta: Meta
}

export interface Pet {
  data: Root
  meta: Meta
}

export interface Root {
  id: number
  attributes: Attributes
}

export interface Attributes {
  name: string
  description: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  cover: Cover
}

export interface Cover {
  data: CoverData
}

export interface CoverData {
  id: number
  attributes: CoverAttributes
}

export interface CoverAttributes {
  name: string
  alternativeText?: string
  caption: any
  width: number
  height: number
  formats: Formats
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: any
  provider: string
  provider_metadata: ProviderMetadata2
  createdAt: string
  updatedAt: string
}

export interface Formats {
  thumbnail: Thumbnail
}

export interface Thumbnail {
  ext: string
  url: string
  hash: string
  mime: string
  name: string
  path: any
  size: number
  width: number
  height: number
  provider_metadata: ProviderMetadata
}

export interface ProviderMetadata {
  public_id: string
  resource_type: string
}

export interface ProviderMetadata2 {
  public_id: string
  resource_type: string
}

export interface Meta {
  pagination: Pagination
}

export interface Pagination {
  page: number
  pageSize: number
  pageCount: number
  total: number
}
