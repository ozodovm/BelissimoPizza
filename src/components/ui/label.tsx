// components/ui/label.tsx
import React from 'react';

type LabelProps = {
  children: React.ReactNode;
  className?: string;
};

const Label: React.FC<LabelProps> = ({ children, className = 'font-semibold' }) => {
  return (
    <span className={`text-gray-700 text-sm font-medium ${className}`}>
      {children}
    </span>
  );
};

export default Label;
