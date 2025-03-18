import { defineStyle, Stack, HStack,Avatar, Icon, Flex, Box, RadioCard, Button, Slider} from '@chakra-ui/react'
import { FiEdit2, FiMapPin, FiCheck} from 'react-icons/fi'
import { Textarea } from '@chakra-ui/react'	
import { useState } from 'react'

function ProfilePage() {
	// Массив с данными интересов
	const interests = [
		{ id: 'it-tech', icon: '💻', label: 'IT и технологии' },
		{ id: 'museums', icon: '🏛', label: 'Музеи и галереи' },
		{ id: 'games', icon: '🎮', label: 'Компьютерные игры' },
		{ id: 'psychology', icon: '🧠', label: 'Психология' },
		{ id: 'friends', icon: '🤝', label: 'Встречи с друзьями' },
		{ id: 'fashion', icon: '👗', label: 'Мода и красота' },
	]

	// Массив с данными исполнителей, кароче пока так, чисто как заглушка, там уже потом от этих массивов
	// нужно будет избавиться и уже генерировать при вводе пользователя, подгружать везде
	// но это потом, сейчас заглушечка, а потом вместе уже думать будем
	const musics = [
		{ id: 'young-thug', label: 'Young Thug' },
		{ id: 'unnv', label: 'УННВ' },
		{ id: 'playboi-carti', label: 'Playboi Carti' },
		{ id: 'lil-yachty', label: 'Lil Yachty' },
		{ id: 'the-weekend', label: 'The Weekend' },
	]

	const city = [
		{ id: 'night-sity', icon: <FiMapPin size={12} />, label: 'Найт-Сити' },
	]

	const status = [
		{
			id: 'online',
			label: 'Онлайн',
			icon: <span className='w-1.5 h-1.5 bg-[#00FF00] rounded-full'></span>,
		},
	]

	const target = [
		{ value: 'relationships', title: 'Отношения', icon: '💘' },
		{ value: 'friendship', title: 'Дружба', icon: '🤝' },
		{ value: 'new-experience', title: 'Новый опыт', icon: '🌎' },
	]

	const targetGender = [
		{ value: 'girls', title: 'Девушки' },
		{ value: 'boys', title: 'Парни' },
		{ value: 'doesnt-matter', title: 'Не важно' },
	]

	const ringCss = defineStyle({
		outlineWidth: '1.5px',
		outlineColor: '#FE019A',
		outlineOffset: '1px',
		outlineStyle: 'solid',
	})

	const [values, setValues] = useState([18, 26]) // Стейт для значений слайдера

	return (
		<Stack className='items-center bg-[#000000] relative'>
			<div className='w-screen px-[10px] pt-[54px]'>
				<p className='font-[Inter] font-bold text-center text-[18px]'>
					DMA - Work In Progress
				</p>
			</div>

			<div className='w-screen px-[10px] overflow-hidden'>
				<div className='bg-[#1F1F1F] p-[12px] rounded-[16px] overflow-hidden'>
					<HStack>
						<div>
							<Avatar.Root
								css={ringCss}
								colorPalette='pink'
								className='w-[64px] h-[64px]'
							>
								<Avatar.Fallback name='Johnny-Silverhand' />
								<Avatar.Image
									className='w-full h-full'
									src='https://vkplay.ru/hotbox/content_files/article/2022/03/14/9cd2004b68d74b00a590b249c5f0924a.jpg'
								/>
							</Avatar.Root>
						</div>
						<div>
							<p className='font-[Inter] font-black text-left text-[18px]'>
								Джонни, 29
							</p>
							<Flex flexWrap='wrap' gap='8px'>
								{city.map(city => (
									<Box
										key={city.id}
										className='bg-[#2C2C2C] font-[Inter] font-semibold text-[10px] rounded-[20px] py-[4px] px-[8px] flex items-center gap-[4px] mt-1'
									>
										<span>{city.icon}</span>
										<span className='font-[Inter] text-[10px]'>
											{city.label}
										</span>
									</Box>
								))}
							</Flex>
						</div>
						<div className='ml-auto text-right'>
							<Flex flexWrap='wrap' gap='8px' justify='flex-end'>
								{status.map(status => (
									<Box
										key={status.id}
										className='bg-[#2C2C2C] font-[Inter] font-semibold text-[10px] rounded-[20px] py-[4px] px-[8px] flex items-center gap-[4px] mb-2'
									>									
										{status.icon}
										<span className='font-[Inter] text-[10px]'>
											{status.label}
										</span>
									</Box>
								))}
							</Flex>
							<div className='flex font-[Inter] font-semibold text-left text-[12px]'>
								<p>Рейтинг анкеты:&nbsp;</p>
								<p className='font-black text-[#00FF00]'>B+</p>
							</div>
						</div>
					</HStack>
				</div>
			</div>

			<div className='w-screen px-[10px] overflow-hidden'>
				<div className='bg-[#1F1F1F] p-[12px] rounded-[16px] overflow-hidden'>
					<p className='font-[Inter] font-bold text-left text-[14px]'>Фото</p>
					<p
						style={{ color: '#FFFFFF66' }}
						className='font-[Inter]  font-medium text-left text-[12px] mb-2'
					>
						Каждое фото увеличивает рейтинг анкеты. Максимум 6 фотографий
					</p>
				</div>
			</div>

			<div className='w-screen px-[10px] overflow-hidden'>
				<div className='bg-[#1F1F1F] p-[12px] rounded-[16px] overflow-hidden'>
					<p className='font-[Inter] font-bold text-left text-[14px]'>О себе</p>
					<p
						style={{ color: '#FFFFFF66' }}
						className='font-[Inter]  font-medium text-left text-[12px] mb-2'
					>
						Напишите пару слов о себе. Рассказ о себе повысит рейтинг анкеты
					</p>
					<Textarea
						autoresize
						variant='subtle'
						placeholder='Start typing...'
						minH='8vh'
						className='bg-[#2C2C2C] rounded-[15px] p-2 font-[Inter]  font-medium text-left text-[12px]'
					/>
				</div>
			</div>

			<div className='w-screen px-[10px] overflow-hidden'>
				<div className='bg-[#1F1F1F] p-[12px] rounded-[16px] overflow-hidden'>
					<p className='font-[Inter] font-bold text-left text-[14px]'>
						Цель знакомства
					</p>
					<p
						style={{ color: '#FFFFFF66' }}
						className='font-[Inter]  font-medium text-left text-[12px] mb-2'
					>
						Выберите цель знакомства. За ответ увеличим рейтинг
					</p>
					<RadioCard.Root
						orientation='horizontal'
						align='center'
						justify='center'
						defaultValue='relationships'
					>
						<HStack align='stretch' gap='8px'>
							{target.map(target => (
								<RadioCard.Item
									key={target.value}
									value={target.value}
									className='rounded-[10px] text-white transition-all 
                   bg-[#2C2C2C] hover:bg-[#FF027A] focus:bg-[#FF027A] 
                   max-h-[30px] w-[107px] flex items-center justify-center
                   data-[state=checked]:bg-[#FF027A] data-[state=checked]:shadow-[0px_0px_20px_#ff027a80]'
								>
									<RadioCard.ItemHiddenInput />
									<RadioCard.ItemControl className='gap-[4px]'>
										<span>{target.icon}</span>
										<RadioCard.ItemText className='text-[12px] font-medium leading-none whitespace-nowrap'>
											{target.title}
										</RadioCard.ItemText>
									</RadioCard.ItemControl>
								</RadioCard.Item>
							))}
						</HStack>
					</RadioCard.Root>
				</div>
			</div>

			<div className='w-screen px-[10px] overflow-hidden'>
				<div className='bg-[#1F1F1F] p-[12px] rounded-[16px] overflow-hidden'>
					<p className='font-[Inter] font-bold text-left text-[14px]'>
						Интересы
					</p>
					<p
						style={{ color: '#FFFFFF66' }}
						className='font-[Inter]  font-medium text-left text-[12px] mb-2'
					>
						Укажите свои главные интересы, чтобы мы могли подобрать ваших
						единомышленников
					</p>
					<Flex flexWrap='wrap' gap='8px' mb='16px'>
						{interests.map(interest => (
							<Box
								key={interest.id}
								className='bg-[#2C2C2C] font-[Inter] font-semibold text-[14px] rounded-[20px] py-[4px] px-[8px] flex items-center gap-[4px]'
							>
								<span>{interest.icon}</span>
								<span className='font-[Inter] text-[11px]'>
									{interest.label}
								</span>
							</Box>
						))}
					</Flex>

					{/* Кнопка редактирования */}
					<Button
						className='w-full bg-[#2C2C2C] rounded-[10px] py-[10px] flex items-center justify-center gap-[8px]'
						_hover={{ bg: '#2A2A2A' }}
					>
						<FiEdit2 />
						<span className='font-[Inter] text-[14px]'>Редактировать</span>
					</Button>
				</div>
			</div>
			<div className='w-screen px-[10px] overflow-hidden'>
				<div className='bg-[#1F1F1F] p-[12px] rounded-[16px] overflow-hidden'>
					<p className='font-[Inter] font-bold text-left text-[14px]'>
						Музыкальные предпочтения
					</p>
					<p
						style={{ color: '#FFFFFF66' }}
						className='font-[Inter]  font-medium text-left text-[12px] mb-2'
					>
						Добавьте своих любимых исполнителей. Чем больше исполнителей - тем
						выше ваш рейтинг
					</p>
					<Flex flexWrap='wrap' gap='8px' mb='16px'>
						{musics.map(music => (
							<Box
								key={music.id}
								className='bg-[#2C2C2C] font-[Inter] font-semibold text-[14px] rounded-[20px] py-[4px] px-[8px] flex items-center gap-[4px]'
							>
								<span className='font-[Inter] text-[11px]'>{music.label}</span>
							</Box>
						))}
					</Flex>

					{/* Кнопка редактирования */}
					<Button
						className='w-full bg-[#2C2C2C] rounded-[10px] py-[10px] flex items-center justify-center gap-[8px]'
						_hover={{ bg: '#2A2A2A' }}
					>
						<FiEdit2 />
						<span className='font-[Inter] text-[14px]'>Редактировать</span>
					</Button>
				</div>
			</div>

			<div className='w-screen px-[10px] overflow-hidden'>
				<div className='bg-[#1F1F1F] p-[12px] rounded-[16px] overflow-hidden'>
					<p className='font-[Inter] font-bold text-left text-[14px]'>
						Кого вы хотите видеть?
					</p>
					<p
						style={{ color: '#FFFFFF66' }}
						className='font-[Inter]  font-medium text-left text-[12px] mb-2'
					>
						Выберите пол и возраст, которые вас интересуют
					</p>
					<div>
						<RadioCard.Root
							orientation='horizontal'
							align='center'
							justify='center'
							defaultValue='doesnt-matter'
						>
							<HStack align='stretch' gap='8px'>
								{targetGender.map(targetGender => (
									<RadioCard.Item
										key={targetGender.value}
										value={targetGender.value}
										className='rounded-[10px] text-white transition-all 
                   bg-[#2C2C2C] hover:bg-[#FF027A] focus:bg-[#FF027A] 
                   max-h-[30px] w-[107px] flex items-center justify-center
                   data-[state=checked]:bg-[#FF027A] data-[state=checked]:shadow-[0px_0px_20px_#ff027a80]'
									>
										<RadioCard.ItemHiddenInput />
										<RadioCard.ItemControl className='gap-[4px]'>
											<RadioCard.ItemText className='font-[Inter] text-[12px] font-medium leading-none whitespace-nowrap'>
												{targetGender.title}
											</RadioCard.ItemText>
										</RadioCard.ItemControl>
									</RadioCard.Item>
								))}
							</HStack>
						</RadioCard.Root>
					</div>

					<div className='mt-4'>
						{/* Отображение значений */}
						<div className='flex text-white font-[Inter] text-sm font-medium mb-2'>
							<span>{values[0]}</span>
							<span> &nbsp; - &nbsp;</span>
							<span>{values[1]}</span>
						</div>

						<Slider.Root
							maxW='md'
							defaultValue={[18, 26]}
							min={18}
							max={99}
							step={1}
							minStepsBetweenThumbs={0}
							onValueChange={details => setValues(details.value as number[])}
						>
							<Slider.Control>
								<Slider.Track className='bg-[#2C2C2C]'>
									<Slider.Range className='bg-[#FF027A]' />
								</Slider.Track>
								<Slider.Thumbs className='bg-[#FF027A] w-5 h-5' />
							</Slider.Control>
						</Slider.Root>
					</div>
				</div>
			</div>

			<div className='w-screen px-[10px] overflow-hidden'>
				<Button
					className='w-full bg-[#2C2C2C] border-[#FF027A] rounded-[10px] py-[10px] flex items-center justify-center gap-[6px]'
					_hover={{ bg: '#2A2A2A' }}
				>
					<FiCheck className='stroke-[#FF027A] stroke-[3px]' />
					<span className='font-[Inter] text-[#FF027A] font-black text-[16px]'>
						Сохранить изменения
					</span>
				</Button>
			</div>
			<div className='h-[10vh]'></div>
		</Stack>
	)
}

export default ProfilePage