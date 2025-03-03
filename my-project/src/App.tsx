import { Button, HStack } from "@chakra-ui/react"

import { IconButton } from '@chakra-ui/react'
import { FiHome, FiHeart, FiMap, FiUser } from 'react-icons/fi'
/* import './App.css'

function App() {

  return (
    <>
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <HStack>
      <Button>Click me</Button>
      <Button>Click me</Button>
    </HStack>
    </>
  )
}

export default App */


function App() {
	return (
		<div className='flex flex-col min-h-screen bg-gray-900 text-white'>
			{/* TabBar */}
			<nav className='bg-[#1F1F1F] border-[#4F4F4F] drop-shadow-[0px_-4px_40px_#4f4f4f80] border-t-2 p-4 fixed bottom-0 w-full shadow-lg'>
				<HStack className = 'justify-evenly'>
					<IconButton aria-label='Search database' p={0} size='lg' variant = 'ghost'>  {/* почему то не ghost не работает, видимо придется вручную делать фон прозрачным */}
						<FiHome />                                                                 {/* также нужно убрать отступы между иконкой и границами кнопки, так как из-за гих иконки слишком маленькие*/}
					</IconButton>
					<IconButton aria-label='Search database' p={0} size='lg'>
						<FiHeart />
					</IconButton>
					<IconButton aria-label='Search database' p={0} size='lg'>
						<FiMap />
					</IconButton>
					<IconButton aria-label='Search database' p={0} size='lg'>
						<FiUser />
					</IconButton>
				</HStack>
			</nav>
		</div>
	)
}

export default App
