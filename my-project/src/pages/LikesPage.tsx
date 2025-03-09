import { Button, HStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { IconButton } from '@chakra-ui/react'
import { FiHome, FiHeart, FiMap, FiUser } from 'react-icons/fi'
function LikesPage() {
	return (
		<div>
			<div className='flex flex-col min-h-screen bg-gray-900 text-white'>
				<h1>Лайки</h1>
			</div>
			<nav className='bg-[#1F1F1F] border-[#4F4F4F] drop-shadow-[0px_-4px_40px_#4f4f4f80] border-t-2 p-4 fixed bottom-0 w-full shadow-lg'>
				<HStack className='justify-evenly'>
					<Link to='/'>
						<IconButton
							aria-label='Search database'
							p={0}
							size='lg'
							className='icon-button'
						>
							<FiHome className='w-[22px] h-[22px]' />
						</IconButton>
					</Link>
					<Link to='/matching'>
						<IconButton
							aria-label='Search database'
							p={0}
							size='lg'
							className='icon-button'
						>
							<FiHeart className='w-[22px] h-[22px]' />
						</IconButton>
					</Link>
					<Link to='/map'>
						<IconButton
							aria-label='Search database'
							p={0}
							size='lg'
							className='icon-button'
						>
							<FiMap className='w-[22px] h-[22px]' />
						</IconButton>
					</Link>
					<Link to='/profile'>
						<IconButton
							aria-label='Search database'
							p={0}
							size='lg'
							className='icon-button'
						>
							<FiUser className='w-[22px] h-[22px]' />
						</IconButton>
					</Link>
				</HStack>
			</nav>
		</div>
	)
}

export default LikesPage
