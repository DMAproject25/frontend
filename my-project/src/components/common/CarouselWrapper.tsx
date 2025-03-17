import { useEffect, useRef } from 'react'
import { createRoot } from 'react-dom/client'
import CarouselComponent from './PhotosCarousel' // Импортируем саму карусель

const CarouselWrapper = () => {
	const iframeRef = useRef<HTMLIFrameElement>(null)

	useEffect(() => {
		const iframe = iframeRef.current
		if (!iframe) return

		const doc = iframe.contentDocument
		if (!doc) return

		// Очистка iframe перед вставкой новых элементов
		doc.open()
		doc.write(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Carousel</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap/dist/css/bootstrap.min.css">
      </head>
      <body>
        <div id="carousel-root"></div>
      </body>
      </html>
    `)
		doc.close()

		// Рендерим React-карусель внутрь iframe
		const root = doc.getElementById('carousel-root')
		if (root) {
			createRoot(root).render(<CarouselComponent />)
		}
	}, [])

	return (
		<iframe ref={iframeRef} className='w-full h-[500px] border-none'></iframe>
	)
}

export default CarouselWrapper
