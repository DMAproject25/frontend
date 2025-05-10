import React, { useState, useEffect, useRef } from "react";

const CAROUSEL_IMAGES = [
  "https://images.unsplash.com/photo-1440589473619-3cde28941638",
  "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
  "https://images.unsplash.com/photo-1610384466709-9b83df910cc5",
];

const CustomCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const isTransitioning = useRef(false);

  const nextSlide = () => {
    if (isTransitioning.current) return;
    isTransitioning.current = true;

    setCurrentIndex((prev) => (prev + 1) % CAROUSEL_IMAGES.length);

    setTimeout(() => {
      isTransitioning.current = false;
    }, 500);
  };

  const prevSlide = () => {
    if (isTransitioning.current) return;
    isTransitioning.current = true;

    setCurrentIndex((prev) =>
      prev === 0 ? CAROUSEL_IMAGES.length - 1 : prev - 1
    );

    setTimeout(() => {
      isTransitioning.current = false;
    }, 500);
  };

  // Авто-прокрутка 
  useEffect(() => {
    const interval = setInterval(nextSlide, 10000);
    return () => clearInterval(interval);
  }, []);

  // Свайп сам по себе, надо будет фиксануть, 
  //чтобы при достижении краев он не дергался к другому краю, 
  //да и сам свайп задизайнить норм, а не эта залупа
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    if (touchStartX.current - touchEndX.current > 50) {
      nextSlide(); // свайп влево
    }
    if (touchStartX.current - touchEndX.current < -50) {
      prevSlide(); // свайп вправо
    }
  };

  return (
		<div className='relative w-full max-w-md mx-auto overflow-hidden'>
			<div
				className='flex transition-transform duration-500 ease-in-out'
				style={{ transform: `translateX(-${currentIndex * 100}%)` }}
				onTouchStart={handleTouchStart}
				onTouchEnd={handleTouchEnd}
			>
				{CAROUSEL_IMAGES.map((src, index) => (
					<div key={index} className='w-full flex-shrink-0'>
						<img
							src={src}
							className='w-full h-[450px] object-cover rounded-[16px]'
							alt={`Slide ${index + 1}`}
						/>
					</div>
				))}
			</div>

			{/* Полоски-индикаторы */}
			<div className='absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2'>
				{CAROUSEL_IMAGES.map((_, index) => (
					<span
						key={index}
						className={`h-[3px] w-5 rounded-full transition ${
							index === currentIndex ? 'bg-white' : 'bg-gray-400'
						}`}
					/>
				))}
			</div>
		</div>
	)
};

export default CustomCarousel;
