import React from 'react'
import { Box } from '@chakra-ui/react'
//import 'bootstrap/dist/css/bootstrap.min.css' // Импортируем ТОЛЬКО здесь
import Carousel from 'react-bootstrap/Carousel'
import {Image } from '@chakra-ui/react'

function CarouselFadeExample() {
	return (
		<Carousel slide={false}>
			<Carousel.Item>
				<Image src='https://images.unsplash.com/photo-1440589473619-3cde28941638?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
			</Carousel.Item>
			<Carousel.Item>
				<Image src='https://plus.unsplash.com/premium_photo-1733980462889-ec95189661fb?q=80&w=2235&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
			</Carousel.Item>
			<Carousel.Item>
				<Image src='https://images.unsplash.com/photo-1610384466709-9b83df910cc5?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
			</Carousel.Item>
		</Carousel>
	)
}

export default CarouselFadeExample
