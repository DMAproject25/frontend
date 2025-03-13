import { HStack, Stack, VStack, Image } from '@chakra-ui/react'

function HomePage() {
    return (
			<Stack className='items-center'>
				{' '}
				{/* тут по дефолту gap: 0.5rem */}
				<div className='w-screen px-[10px] pt-[54px]'>
					<p className='font-[Inter] font-bold text-center text-[18px]'>
						DMA - Work In Progress
					</p>
				</div>
				<div className='w-screen px-[10px] overflow-hidden'>
					<div className='bg-[#50d71e] rounded-[16px] h-[477px] overflow-hidden sticky top-0 z-10'>
						<Image src='https://images.unsplash.com/photo-1440589473619-3cde28941638?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
					</div>
				</div>
				<div className='w-screen px-[10px] overflow-hidden '>
					<div className='bg-[#50d71e] p-[12px] rounded-[16px] overflow-hidden'>
						<p className='font-[Inter] font-black text-left text-[18px]'>
							Мириам, 19
						</p>
						<p className='font-[Inter] italic font-semibold text-left text-[12px]'>
							“Люблю играть в игры, читать, гулять, и собирать кристаллы &#60;3”
						</p>
					</div>
				</div>
				<div className='w-screen px-[10px] overflow-hidden '>
					<div className='bg-[#50d71e] p-[12px] rounded-[16px] overflow-hidden'>
						<p className='font-[Inter] font-black text-left text-[18px]'>
							Интересы
						</p>
						<ul>
							<li>Интерес 1</li>
							<li>Интерес 2</li>
							<li>Интерес 3</li>
							<li>Интерес 4</li>
							<li>Интерес 5</li>
							<li>Интерес 1</li>
							<li>Интерес 2</li>
							<li>Интерес 3</li>
							<li>Интерес 4</li>
							<li>Интерес 5</li>
						</ul>
					</div>
				</div>
			</Stack>
		)
}

export default HomePage