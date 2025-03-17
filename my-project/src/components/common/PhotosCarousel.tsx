import Image from 'react-bootstrap/Image'

import Carousel from 'react-bootstrap/Carousel'
//import {Image} from '@chakra-ui/react';

const CarouselComponent = () => {
	return (
		<Carousel slide={false} interval={10000} indicators={true}>
			<Carousel.Item>
				<Image
					className='img-responsive position-fixed'   //position-fixed убирает скролл но ломает отображение элементов управления
					src='https://images.unsplash.com/photo-1440589473619-3cde28941638?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
					alt='First slide'
					fluid
				/>
			</Carousel.Item>
			<Carousel.Item>
				<Image
					className='img-responsive position-fixed'		//если убрать position-fixed появится скролл картинок
					src='https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0'
					alt='Second slide'
					fluid
				/>
			</Carousel.Item>
			<Carousel.Item>
				<Image
					className='img-responsive position-fixed'
					src='https://images.unsplash.com/photo-1610384466709-9b83df910cc5?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
					alt='Third slide'
					fluid
				/>
			</Carousel.Item>
		</Carousel>
	)
}

export default CarouselComponent
