import {
	defineStyle,
	Stack,
	HStack,
	VStack,
	Icon,
	Flex,
	Box,
	IconButton,
	Button,
	Slider,
	createListCollection,
	Portal,
	Select,
} from '@chakra-ui/react'
import {
	FiEdit2,
  FiCheck,
	FiHeart,
	FiMaximize2,
} from 'react-icons/fi'
import { Textarea } from '@chakra-ui/react'	
import { useState } from 'react'
import { LuMinus, LuPlus } from 'react-icons/lu'


function ProfilePersonalEdit() {

  const [personalRelation, setPersonalRelation] = useState<string[]>([])
	const [smokeValue, setSmokeValue] = useState<string[]>([])
  const [drinkValue, setDrinkValue] = useState<string[]>([])

  const [userHeight, setUserHeight] = useState([170])
  const [userWeight, setUserWeight] = useState([60])

  const personal_relations = createListCollection({
		items: [
			{ label: 'В отношениях', value: 'in_relations' },
			{ label: 'Свободен', value: 'free' },
			{ label: 'Все сложно', value: 'all_complicated' },
			{ label: 'Не указывать', value: 'hide' },
		],
	})

  const smoke = createListCollection({
		items: [
			{ label: 'Курю', value: 'smoke_often' },
			{ label: 'Курю за компанию', value: 'smoke_rarely' },
			{ label: 'Не курю', value: 'smoke_never' },
			{ label: 'Не указывать', value: 'hide' },
		],
	})

  const drink = createListCollection({
		items: [
			{ label: 'Пью', value: 'smoke_often' },
			{ label: 'Редко', value: 'smoke_rarely' },
			{ label: 'Не пью', value: 'smoke_never' },
			{ label: 'Не указывать', value: 'hide' },
		],
	})
  
  return (
		<Stack className='items-center bg-[#000000] relative'>
			<div className='w-screen px-[10px] pt-[54px]'>
				<p className='font-[Inter] font-bold text-center text-[18px]'>
					DMA - Work In Progress
				</p>
			</div>
			<div className='w-screen px-[10px] overflow-hidden'>
				<div className='bg-[#1F1F1F] p-[12px] rounded-[16px] overflow-hidden'>
					<p className='font-[Inter] font-bold text-left text-[16px]'>
						Личная информация
					</p>
					<p
						style={{ color: '#FFFFFF66' }}
						className='font-[Inter]  font-medium text-left text-[12px] mb-2'
					>
						заглушка
					</p>
					<div className='mb-4'>
						<Select.Root
							collection={personal_relations}
							width='full'
							value={personalRelation}
							className='mb-2 font-[Inter] font-black'
							onValueChange={e => setPersonalRelation(e.value)}
						>
							<Select.HiddenSelect />
							<Select.Label className='font-[Inter]'>
								У вас сейчас кто-то есть?
							</Select.Label>
							<Select.Control className='text-[14px] bg-[#2C2C2C] rounded-[10px]'>
								<Select.Trigger>
									<Select.ValueText placeholder='Выберите вариант из списка' />
								</Select.Trigger>
								<Select.IndicatorGroup>
									<Select.Indicator />
								</Select.IndicatorGroup>
							</Select.Control>
							<Portal>
								<Select.Positioner>
									<Select.Content className='bg-[#2C2C2C] rounded-[10px] font-[Inter] text-[14px] font-semibold'>
										{personal_relations.items.map(item => (
											<Select.Item item={item} key={item.value}>
												{item.label}
												<Select.ItemIndicator />
											</Select.Item>
										))}
									</Select.Content>
								</Select.Positioner>
							</Portal>
						</Select.Root>
					</div>

					<div className='mb-4'>
						<p className='font-[Inter] font-semibold text-left text-[14px]'>
							При желании укажите свои рост и вес
						</p>
						<Stack direction='row' className='w-full items-center'>
							<Box flex={1}>
								<Slider.Root
									min={130}
									max={220}
									step={1}
									value={userHeight}
									defaultValue={[170]}
									onValueChange={e => setUserHeight(e.value)}
									className='w-full'
								>
									<HStack>
										<Slider.ValueText />
										<Slider.Label>см</Slider.Label>
									</HStack>
									<Slider.Control className='w-full'>
										<Slider.Track className='bg-[#2C2C2C] h-2'>
											<Slider.Range className='bg-[#FF027A]' />
										</Slider.Track>
										<Slider.Thumbs className='bg-[#2C2C2C] border-[#FF027A] border-[2px] w-4 h-4' />
									</Slider.Control>
								</Slider.Root>
							</Box>

							<Box flex={1}>
								<Slider.Root
									min={40}
									max={140}
									step={1}
									value={userWeight}
									defaultValue={[60]}
									onValueChange={e => setUserWeight(e.value)}
									className='w-full'
								>
									<HStack>
										<Slider.ValueText />
										<Slider.Label>кг</Slider.Label>
									</HStack>
									<Slider.Control className='w-full'>
										<Slider.Track className='bg-[#2C2C2C] h-2'>
											<Slider.Range className='bg-[#FF027A]' />
										</Slider.Track>
										<Slider.Thumbs className='bg-[#2C2C2C] border-[#FF027A] border-[2px] w-4 h-4' />
									</Slider.Control>
								</Slider.Root>
							</Box>
						</Stack>
					</div>

					<div>
						<Select.Root
							collection={smoke}
							width='full'
							value={smokeValue}
							className='mb-2 font-[Inter] font-black'
							onValueChange={e => setSmokeValue(e.value)}
						>
							<Select.HiddenSelect />
							<Select.Label className='font-[Inter]'>Вы курите?</Select.Label>
							<Select.Control className='text-[14px] bg-[#2C2C2C] rounded-[10px]'>
								<Select.Trigger>
									<Select.ValueText placeholder='Выберите вариант из списка' />
								</Select.Trigger>
								<Select.IndicatorGroup>
									<Select.Indicator />
								</Select.IndicatorGroup>
							</Select.Control>
							<Portal>
								<Select.Positioner>
									<Select.Content className='bg-[#2C2C2C] rounded-[10px] font-[Inter] text-[14px] font-semibold'>
										{smoke.items.map(item => (
											<Select.Item item={item} key={item.value}>
												{item.label}
												<Select.ItemIndicator />
											</Select.Item>
										))}
									</Select.Content>
								</Select.Positioner>
							</Portal>
						</Select.Root>
					</div>

					<div>
						<Select.Root
							collection={drink}
							width='full'
							value={drinkValue}
							className='mb-2 font-[Inter] font-black'
							onValueChange={e => setSmokeValue(e.value)}
						>
							<Select.HiddenSelect />
							<Select.Label className='font-[Inter]'>Вы пьете?</Select.Label>
							<Select.Control className='text-[14px] bg-[#2C2C2C] rounded-[10px]'>
								<Select.Trigger>
									<Select.ValueText placeholder='Выберите вариант из списка' />
								</Select.Trigger>
								<Select.IndicatorGroup>
									<Select.Indicator />
								</Select.IndicatorGroup>
							</Select.Control>
							<Portal>
								<Select.Positioner>
									<Select.Content className='bg-[#2C2C2C] rounded-[10px] font-[Inter] text-[14px] font-semibold'>
										{drink.items.map(item => (
											<Select.Item item={item} key={item.value}>
												{item.label}
												<Select.ItemIndicator />
											</Select.Item>
										))}
									</Select.Content>
								</Select.Positioner>
							</Portal>
						</Select.Root>
					</div>

					<div>
						<Button
							className='w-full bg-[#2C2C2C] border-[#FF027A] rounded-[10px] py-[10px] flex items-center justify-center gap-[6px]'
							_hover={{ bg: '#2A2A2A' }}
						>
							<FiCheck className='stroke-[#FF027A] stroke-[3px]' />
							<span className='font-[Inter] text-[#FF027A] font-black text-[16px]'>
								Сохранить
							</span>
						</Button>
					</div>
				</div>
			</div>
		</Stack>
	)
}
export default ProfilePersonalEdit