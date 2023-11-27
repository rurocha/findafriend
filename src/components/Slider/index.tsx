import Image, { StaticImageData } from 'next/image'
import { useState } from 'react'
import * as S from './styles'
import type * as Stitches from '@stitches/react'

interface Image {
  src: string | StaticImageData
  alt?: string
  id?: number
}
interface Props {
  imgs: Image[]
  css?: Stitches.CSS
}

export default function Slider ({ imgs, css }: Props) {
	const [currentImage, setCurrentImage] = useState({...imgs[0], id: 0})

	return (
		<S.Container css={css}>
			<S.CurrentImage
				src={currentImage.src} 
				alt="lalala"
			/>
			<S.Images>
				{
					imgs.map(({ src, alt }, id) => (
						<S.Img
							key={id}
							src={src} 
							alt={alt}
							onClick={() => setCurrentImage({ src, alt, id })}
							active={id === currentImage.id}
						/>
					))
				}
			</S.Images>
		</S.Container>
	)
}