import { HStack, IconButton } from '@chakra-ui/react'
import { FiHome, FiHeart, FiMap, FiUser } from 'react-icons/fi'
import { NavLink } from 'react-router-dom'
import '../index.css'

const TabBar: React.FC = () => {
	return (
		<nav className='bg-[#1F1F1F] border-[#4F4F4F] shadow-[0_-4px_40px_rgba(79,79,79,0.5)] -mb-[2px] border-t-2 h-[53px] fixed bottom-0 w-screen shadow-lg'>
			<HStack className='justify-evenly'>
				<NavLink
					to='/'
					className={({ isActive }) =>
						isActive ? 'icon-button active' : 'icon-button'
					}
				>
					<IconButton aria-label='Home' p={0} size='lg'>
						<FiHome className='w-[22px] h-[22px]' />
					</IconButton>
				</NavLink>

				<NavLink
					to='/matching'
					className={({ isActive }) =>
						isActive ? 'icon-button active' : 'icon-button'
					}
				>
					<IconButton aria-label='Likes' p={0} size='lg'>
						<FiHeart className='w-[22px] h-[22px]' />
					</IconButton>
				</NavLink>

				<NavLink
					to='/map'
					className={({ isActive }) =>
						isActive ? 'icon-button active' : 'icon-button'
					}
				>
					<IconButton aria-label='Map' p={0} size='lg'>
						<FiMap className='w-[22px] h-[22px]' />
					</IconButton>
				</NavLink>

				<NavLink
					to='/profile'
					className={({ isActive }) =>
						isActive ? 'icon-button active' : 'icon-button'
					}
				>
					<IconButton aria-label='Profile' p={0} size='lg'>
						<FiUser className='w-[22px] h-[22px]' />
					</IconButton>
				</NavLink>
			</HStack>
		</nav>
	)
}

export default TabBar
