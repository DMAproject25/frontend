import {
  defineStyle,
  Stack,
  HStack,
  Avatar,
  Icon,
  Flex,
  Box,
  RadioCard,
  Button,
  CloseButton,
  Dialog,
  Portal,
  Slider,
} from '@chakra-ui/react'
import { FiEdit2, FiMapPin, FiCheck, FiHeart, FiMaximize2 } from 'react-icons/fi'
import { Textarea } from '@chakra-ui/react'	
import { useState } from 'react'
import { Dumbbell, Cigarette, Wine } from 'lucide-react'
import { NavLink } from 'react-router-dom'


function ProfileMusicEdit() {

  const musics = [
    { id: 'young-thug', label: 'Young Thug' },
    { id: 'unnv', label: 'УННВ' },
    { id: 'playboi-carti', label: 'Playboi Carti' },
    { id: 'lil-yachty', label: 'Lil Yachty' },
    { id: 'the-weekend', label: 'The Weekend' },
  ]

  return (
		<Stack className='items-center bg-[#000000] relative'>
			<div className='w-screen px-[10px] pt-[54px]'>
				<p className='font-[Inter] font-bold text-center text-[18px]'>
					DMA - Work In Progress
				</p>
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
				</div>
			</div>
		</Stack>
	)
}
export default ProfileMusicEdit