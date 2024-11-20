// components/ui/card.tsx
import React from 'react';

type CardProps = {
  children: React.ReactNode;
};

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="w-[280px] p-4 shadow-lg rounded-lg border border-gray-200 bg-white">
      {children}
    </div>
  );
};

export default Card;
