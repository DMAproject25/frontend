import { HStack, Stack, VStack, Image, Flex, Box, Button } from '@chakra-ui/react'

function ProfilePage() {
    // Массив с данными интересов
    const interests = [
        { id: 'tech', icon: '💻', label: 'IT и технологии' },
        { id: 'museums', icon: '🏛', label: 'Музеи и галереи' },
        { id: 'games', icon: '🎮', label: 'Компьютерные игры' },
        { id: 'psychology', icon: '🧠', label: 'Психология' },
        { id: 'friends', icon: '🤝', label: 'Встречи с друзьями' },
        { id: 'fashion', icon: '👗', label: 'Мода и красота' },
    ];

    // Массив с данными исполнителей, кароче пока так, чисто как заглушка, там уже потом от этих массивов
    // нужно будет избавиться и уже генерировать при вводе пользователя, подгружать везде
    // но это потом, сейчас заглушечка, а потом вместе уже думать будем
    const musics = [
        { id: 'tech', label: 'УННВ' },
        { id: 'museums', label: 'Смешарики' },
        { id: 'games', label: 'Металика' },
        { id: 'psychology', label: 'Рамштайн' },
        { id: 'friends', label: 'Лил пимп' },
        { id: 'fashion', label: 'Хуй с горы' },
    ];

    return (
        <Stack className='items-center bg-[#000000] relative'>
            <div className='w-screen px-[10px] pt-[54px]'>
				<p className='font-[Inter] font-bold text-center text-[18px]'>
					DMA - Work In Progress
				</p>
			</div>

            <div className='w-screen px-[10px] overflow-hidden'>
				<div className='bg-[#1F1F1F] p-[12px] rounded-[16px] overflow-hidden'>
					<p className='font-[Inter] font-black text-left text-[18px]'>
						Интересы
					</p>
					<p style={{ color: '#FFFFFF66' }} className='font-[Inter]  font-semibold text-left text-[12px] '>
                    Укажите свои главные интересы, чтобы мы могли подобрать ваших единомышленников
					</p>
                    <Flex flexWrap="wrap" gap="8px" mb="16px">
                        {interests.map((interest) => (
                            <Box 
                                key={interest.id}
                                className="bg-[#2C2C2C] font-[Inter] font-semibold text-[14px] rounded-full py-[8px] px-[12px] flex items-center gap-[8px]"
                            >
                                <span>{interest.icon}</span>
                                <span className="font-[Inter] text-[11px]">{interest.label}</span>
                            </Box>
                        ))}
                    </Flex>
                    
                    {/* Кнопка редактирования */}
                    <Button 
                        className="w-full bg-[#2C2C2C] rounded-[12px] py-[10px] flex items-center justify-center gap-[8px]"
                        _hover={{ bg: '#2A2A2A' }} 
                    >
                        <span>✏️</span>
                        <span className="font-[Inter] text-[14px]">Редактировать</span>
                    </Button>
				</div>
			</div>
            <div className='w-screen px-[10px] overflow-hidden'>
              <div className='bg-[#1F1F1F] p-[12px] rounded-[16px] overflow-hidden'>
                <p className='font-[Inter] font-black text-left text-[18px]'>
					Музыкальные предпочтения
				</p>
				<p style={{ color: '#FFFFFF66' }} className='font-[Inter]  font-semibold text-left text-[12px] '>
                    Добавьте своих любимых исполнителей. Чем больше исполнителей - тем выше ваш рейтинг
				</p>
                <Flex flexWrap="wrap" gap="8px" mb="16px">
                     {musics.map((music) => (
                        <Box 
                            key={music.id}
                            className="bg-[#2C2C2C] font-[Inter] font-semibold text-[14px] rounded-full py-[8px] px-[12px] flex items-center gap-[8px]"
                         >
                            <span className="font-[Inter] text-[11px]">{music.label}</span>
                        </Box>
                     ))}
                </Flex>
                    
                {/* Кнопка редактирования */}
                <Button 
                    className="w-full bg-[#2C2C2C] rounded-[12px] py-[10px] flex items-center justify-center gap-[8px]"
                    _hover={{ bg: '#2A2A2A' }} 
                >
                    <span>✏️</span>
                    <span className="font-[Inter] text-[14px]">Редактировать</span>
                </Button>
            </div>
        </div>
        </Stack>
    )
}

export default ProfilePage