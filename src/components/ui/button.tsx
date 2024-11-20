// components/ui/button.tsx
import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  count?: number;
};

const Button: React.FC<ButtonProps> = ({ children, onClick, count }) => {
  return (
    <button
      className="flex items-center space-x-2 bg-orange-500 text-white px-4 py-2 rounded-lg shadow hover:bg-orange-600"
      onClick={onClick}
    >
      <span>{children}</span>
      {count !== undefined && (
        <span className="bg-white text-orange-500 px-2 py-1 rounded-full">{count}</span>
      )}
    </button>
  );
};

export default Button;
