import { Button, HStack } from "@chakra-ui/react"

function TabBar() {
	return (
		<div className='flex flex-col min-h-screen bg-gray-900 text-white'>
			{/* Контент */}
			<div className='flex-1 flex items-center justify-center'>
				<h1 className='text-3xl font-bold'>Hello world!</h1>
			</div>

			{/* TabBar */}
			<nav className='bg-gray-800 p-4 fixed bottom-0 w-full shadow-lg'>
				<HStack justify='center'>
					<Button variant='ghost' colorScheme='teal'>
						Home
					</Button>
					<Button variant='ghost' colorScheme='teal'>
						Search
					</Button>
					<Button variant='ghost' colorScheme='teal'>
						Profile
					</Button>
				</HStack>
			</nav>
		</div>
	)
}

export default TabBar
