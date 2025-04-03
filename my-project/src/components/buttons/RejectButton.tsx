import React from 'react';
import { FiX } from 'react-icons/fi'

interface RejectButtonProps {
  onReject?: () => void;
}

const RejectButton: React.FC<RejectButtonProps> = ({ onReject }) => {
  const handleClick = () => {
    if (onReject) onReject();
  };

  return (
		<button
			className='flex items-center justify-center px-4 py-1 rounded-full bg-gradient-to-r from-blue-400 to-blue-300 shadow-md text-white font-medium'
			onClick={handleClick}
		>
			<div className='flex items-center justify-center'>
				<FiX className='w-[90px] h-[32px]' />
			</div>
		</button>
	)
};

export default RejectButton;