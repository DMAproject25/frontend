import { Button, HStack } from "@chakra-ui/react"
import { NavLink, useLocation} from 'react-router-dom'
import { IconButton } from '@chakra-ui/react'
import { FiHome, FiHeart, FiMap, FiUser } from 'react-icons/fi'

function HomePage() {
    return (
			<div className='flex flex-col min-h-screen bg-gray-900 text-white'>
				{/* TabBar */}
				<nav className='bg-[#1F1F1F] border-[#4F4F4F] drop-shadow-[0px_-4px_40px_#4f4f4f80] border-t-2 p-4 fixed bottom-0 w-full shadow-lg'>
					<HStack className='justify-evenly'>
						<NavLink className='icon-button' to='/'>
							<IconButton
								aria-label='Search database'
								p={0}
								size='lg'
								className='icon-button'
							>
								<FiHome className='w-[22px] h-[22px]' />
							</IconButton>
						</NavLink>
						<NavLink className='icon-button' to='/matching'>
							<IconButton
								aria-label='Search database'
								p={0}
								size='lg'
								className='icon-button'
							>
								<FiHeart className='w-[22px] h-[22px]' />
							</IconButton>
						</NavLink>
						<NavLink className='icon-button' to='/map'>
							<IconButton
								aria-label='Search database'
								p={0}
								size='lg'
								className='icon-button'
							>
								<FiMap className='w-[22px] h-[22px]' />
							</IconButton>
						</NavLink>
						<NavLink className='icon-button' to='/profile'>
							<IconButton
								aria-label='Search database'
								p={0}
								size='lg'
								className='icon-button'
							>
								<FiUser className='w-[22px] h-[22px]' />
							</IconButton>
						</NavLink>
					</HStack>
				</nav>
			</div>
		)
}

export default HomePage