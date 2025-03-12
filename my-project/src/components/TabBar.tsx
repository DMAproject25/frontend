import { HStack, IconButton } from '@chakra-ui/react'
import { FiHome, FiHeart, FiMap, FiUser } from 'react-icons/fi'
import { NavLink } from 'react-router-dom'
import '../index.css'

const TabBar: React.FC = () => {
	return (
		<nav className='bg-[#1F1F1F] border-[#4F4F4F] drop-shadow-[0px_-4px_40px_#4f4f4f80] border-t-2 p-4 fixed bottom-0 w-full shadow-lg'>
			<HStack className='justify-evenly'>
				<NavLink
					to='/'
					className={({ isActive }) =>
						isActive ? 'icon-button active' : 'icon-button'
					}
				>
					<IconButton aria-label='Home' variant='ghost' p={0} size='lg'>
						<FiHome className='w-[22px] h-[22px]' />
					</IconButton>
				</NavLink>

				<NavLink
					to='/matching'
					className={({ isActive }) =>
						isActive ? 'icon-button active' : 'icon-button'
					}
				>
					<IconButton aria-label='Likes' variant='ghost' p={0} size='lg'>
						<FiHeart className='w-[22px] h-[22px]' />
					</IconButton>
				</NavLink>

				<NavLink
					to='/map'
					className={({ isActive }) =>
						isActive ? 'icon-button active' : 'icon-button'
					}
				>
					<IconButton aria-label='Map' variant='ghost' p={0} size='lg'>
						<FiMap className='w-[22px] h-[22px]' />
					</IconButton>
				</NavLink>

				<NavLink
					to='/profile'
					className={({ isActive }) =>
						isActive ? 'icon-button active' : 'icon-button'
					}
				>
					<IconButton aria-label='Profile' variant='ghost' p={0} size='lg'>
						<FiUser className='w-[22px] h-[22px]' />
					</IconButton>
				</NavLink>
			</HStack>
		</nav>
	)
}

export default TabBar
