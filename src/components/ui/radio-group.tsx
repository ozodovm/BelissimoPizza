// components/ui/radio-group.tsx
import React, { useState } from 'react';

type RadioGroupProps = {
  options: { label: string; value: string }[];
  onChange: (value: string) => void;
  name: string;
};

const RadioGroup: React.FC<RadioGroupProps> = ({ options, onChange, name }) => {
  const [selected, setSelected] = useState('');

  return (
    <div className="flex space-x-4">
      {options.map((option) => (
        <label
          key={option.value}
          className={`border px-4 py-2 rounded-lg cursor-pointer ${
            selected === option.value ? 'border-orange-500 text-orange-500' : 'border-gray-300'
          }`}
        >
          <input
            type="radio"
            name={name}
            value={option.value}
            className="hidden"
            onChange={() => {
              setSelected(option.value);
              onChange(option.value);
            }}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
};

export default RadioGroup;
