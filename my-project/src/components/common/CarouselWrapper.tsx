import React, { useEffect, useRef } from 'react'
import { createRoot } from 'react-dom/client'
import CarouselComponent from './PhotosCarousel'

const CarouselWrapper: React.FC = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    const iframe = iframeRef.current
    if (!iframe) return

    const doc = iframe.contentDocument
    if (!doc) return

    // Используем template literals для читаемости
    doc.open()
    doc.write(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Carousel</title>
        <link 
          rel="stylesheet" 
          href="https://cdn.jsdelivr.net/npm/bootstrap/dist/css/bootstrap.min.css"
        >
        <style>
          html, body { height: 100%; margin: 0; }
        </style>
      </head>
      <body>
        <div id="carousel-root" class="h-100"></div>
      </body>
      </html>
    `)
    doc.close()

    const root = doc.getElementById('carousel-root')
    if (root) {
      createRoot(root).render(<CarouselComponent />)
    }
  }, [])

  return (
    <iframe 
      ref={iframeRef} 
      className='w-full h-[500px] border-none'
    />
  )
}

export default CarouselWrapper