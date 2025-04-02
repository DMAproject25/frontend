import React from 'react';

interface RejectButtonProps {
  onReject?: () => void;
}

const RejectButton: React.FC<RejectButtonProps> = ({ onReject }) => {
  const handleClick = () => {
    if (onReject) onReject();
  };

  return (
    <button 
      className="flex items-center justify-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-400 to-blue-300 shadow-md text-white font-medium"
      onClick={handleClick}
    >
      <div className="flex items-center justify-center">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="currentColor" 
          className="w-[90px] h-[25px]"
        >
          <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
        </svg>
      </div>
    </button>
  );
};

export default RejectButton;