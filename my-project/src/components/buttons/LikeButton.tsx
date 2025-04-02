import React, { useState } from 'react';

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
      className="flex items-center justify-center px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-rose-400 shadow-md text-white font-medium"
      onClick={handleClick}
    >
      <div className="flex items-center justify-center">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="currentColor" 
          className="w-[90px] h-[25px]"
        >
          <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-5.201-3.893 10.043 10.043 0 01-2.725-6.979C3.69 4.786 7.241 1.5 11.5 1.5c2.306 0 4.492.969 6.088 2.703 1.593 1.731 2.413 4.052 2.277 6.472-.128 2.252-1.171 4.396-2.919 5.998a15.245 15.245 0 01-5.282 3.936l-.023.013-.007.003h-.001z" />
        </svg>
      </div>
    </button>
  );
};

export default LikeButton;