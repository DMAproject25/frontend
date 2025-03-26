import { Dumbbell, Cigarette, Wine } from 'lucide-react'
import { FiHeart, FiMaximize2 } from 'react-icons/fi'

import CarouselWrapper from '../components/common/CarouselWrapper'
import { HStack, Stack, VStack, Image, Flex, Box } from '@chakra-ui/react'

function HomePage() {

	const userImages = [
		'src/assets/images/image.png',
		'src/assets/images/image3.jpg'
	];

	const handleImageChange = (index: number) => {
		console.log(`Switched to image ${index}`);
	};

	const interests = [
		{ id: 'it-tech', icon: '💻', label: 'IT и технологии' }, // возможно сюда нужно будет добавить булевую переменную,
		{ id: 'museums', icon: '🏛', label: 'Музеи и галереи' }, // показывающую совпадает ли данный интерес с интересом пользователя
		{ id: 'games', icon: '🎮', label: 'Компьютерные игры' },
		{ id: 'psychology', icon: '🧠', label: 'Психология' },
		{ id: 'friends', icon: '🤝', label: 'Встречи с друзьями' },
		{ id: 'fashion', icon: '👗', label: 'Мода и красота' },
	]

	// Массив с данными исполнителей, кароче пока так, чисто как заглушка, там уже потом от этих массивов
	// нужно будет избавиться и уже генерировать при вводе пользователя, подгружать везде
	// но это потом, сейчас заглушечка, а потом вместе уже думать будем
	const music = [
		{ id: 'young-thug', label: 'Young Thug' },
		{ id: 'unnv', label: 'УННВ' },
		{ id: 'playboi-carti', label: 'Playboi Carti' },
		{ id: 'lil-yachty', label: 'Lil Yachty' },
		{ id: 'the-weekend', label: 'The Weekend' },
	]
	
	const about = [
		{ id: 'relationships', icon: <FiHeart />, label: 'Свободен' },
		{ id: 'smoke', icon: <Cigarette className='w-3.5 h-3.5'/>, label: 'Не курю' },
		{ id: 'alcohol', icon: <Wine className='w-3.5 h-3.5' />, label: 'Не пью' },
		{ id: 'growth', icon: <FiMaximize2 className='w-3.5 h-3.5'/>, label: '175 см' },
		{ id: 'sport', icon: <Dumbbell className='w-3.5 h-3.5'/>, label: 'Занимаюсь в зале' },
	]


	return (
		<Stack className='items-center bg-[#000000] relative'>
			{/* Первый Stack (фиксированный) */}
			<Stack className='w-full fixed top-0 left-0 z-1 bg-[#000000]'>
				<div className='w-screen px-[10px] pt-[44px]'>
					<p className='font-[Inter] font-bold text-center text-[18px]'>
						DMA - Work In Progress
					</p>
				</div>
				<div className='w-screen px-[10px] overflow-hidden'>
					<div className='bg-[#1F1F1F] rounded-[16px] h-[477px] overflow-hidden'>

						<CarouselWrapper/>
{/* 						<Image src='https://images.unsplash.com/photo-1610384466709-9b83df910cc5?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
 */}				</div>
				</div>
			</Stack>
			{/* Второй вложенный Stack (основная информация о пользователе) */}
			<Stack className='bg-[#000000] relative z-2 mt-[564px] rounded-[40px]'>
				<div className='w-screen px-[10px] overflow-hidden'>
					<div className='bg-[#1F1F1F] p-[12px] rounded-[16px] overflow-hidden'>
						<p className='font-[Inter] font-black text-left text-[18px]'>
							Мириам, 19
						</p>
						<p className='font-[Inter] italic font-semibold text-left text-[12px]'>
							“Люблю играть в игры, читать, гулять, и собирать кристаллы &#60;3”
						</p>
					</div>
				</div>
				<div className='w-screen px-[10px] overflow-hidden'>
					<div className='bg-[#1F1F1F] p-[12px] rounded-[16px] overflow-hidden'>
						<p className='font-[Inter] font-bold text-left text-[14px] mb-2'>
							Интересы
						</p>
						<Flex flexWrap='wrap' gap='8px' mb='16px'>
							{interests.map(interest => (
								<Box
									key={interest.id}
									className='bg-[#2C2C2C] font-[Inter] font-semibold text-[14px] rounded-[20px] py-[4px] px-[8px] flex items-center gap-[8px]'
								>
									<span>{interest.icon}</span>
									<span className='font-[Inter] text-[11px]'>
										{interest.label}
									</span>
								</Box>
							))}
						</Flex>
					</div>
				</div>
				<div className='w-screen px-[10px] overflow-hidden'>
					<div className='bg-[#1F1F1F] p-[12px] rounded-[16px] overflow-hidden'>
						<p className='font-[Inter] font-bold text-left text-[14px] mb-2'>
							О себе
						</p>
						<Flex flexWrap='wrap' gap='8px' mb='16px'>
							{about.map(about => (
								<Box
									key={about.id}
									className='bg-[#2C2C2C] font-[Inter] font-semibold text-[14px] rounded-[20px] py-[4px] px-[8px] flex items-center gap-[8px]'
								>
									<span>{about.icon}</span>
									<span className='font-[Inter] text-[11px]'>
										{about.label}
									</span>
								</Box>
							))}
						</Flex>
					</div>
				</div>
				<div className='w-screen px-[10px] overflow-hidden'>
					<div className='bg-[#1F1F1F] p-[12px] rounded-[16px] overflow-hidden'>
						<p className='font-[Inter] font-bold text-left text-[14px] mb-2'>
							Музыка
						</p>
						<Flex flexWrap='wrap' gap='8px' mb='16px'>
							{music.map(music => (
								<Box
									key={music.id}
									className='bg-[#2C2C2C] font-[Inter] font-semibold text-[14px] rounded-[20px] py-[4px] px-[8px] flex items-center gap-[8px]'
								>
									<span className='font-[Inter] text-[11px]'>
										{music.label}
									</span>
								</Box>
							))}
						</Flex>
					</div>
				</div>
				<div className='h-[10vh]'></div>
			</Stack>
		</Stack>
	)
}

export default HomePage
