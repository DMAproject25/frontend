import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/Image'

// Вынесем массив картинок в константу
const CAROUSEL_IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1440589473619-3cde28941638',
    alt: 'First slide',
    q: 80,
    w: 2187
  },
  {
    src: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
    alt: 'Second slide'
  },
  {
    src: 'https://images.unsplash.com/photo-1610384466709-9b83df910cc5',
    alt: 'Third slide',
    q: 80,
    w: 2187
  }
]

const CarouselComponent: React.FC = () => {
  return (
    <Carousel 
      slide={true} 
      interval={10000} 
      indicators={true}
      className="h-100" // Убедимся, что карусель занимает всю высоту
    >
      {CAROUSEL_IMAGES.map((image, index) => (
        <Carousel.Item key={index}>
          <Image
            className='w-100 object-cover' // Больше не используем position-fixed
            src={`${image.src}?q=${image.q || 80}&w=${image.w || 'auto'}&auto=format&fit=crop`}
            alt={image.alt}
            fluid
          />
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default CarouselComponent