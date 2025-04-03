import React, { useState } from 'react';
import { FiHeart} from 'react-icons/fi'


interface LikeButtonProps {
  initialCount?: number;
  onLike?: () => void;
}

const LikeButton: React.FC<LikeButtonProps> = ({ 
  initialCount = 0, 
  onLike 
}) => {
  const [count, setCount] = useState(initialCount);
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = () => {
    if (!isLiked) {
      setCount(prevCount => prevCount + 1);
      setIsLiked(true);
      if (onLike) onLike();
    }
  };

  return (
		<button
			className='flex items-center justify-center px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-rose-400 shadow-md text-white font-medium'
			onClick={handleClick}
		>
			<div className='flex items-center justify-center'>
					<FiHeart className='w-[90px] h-[25px]' />
			</div>
		</button>
	)
};

export default LikeButton;