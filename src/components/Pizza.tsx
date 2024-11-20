// components/PizzaCard.tsx
import React, { useState } from 'react';
import Card from './ui/card';
import Label from './ui/label';
import RadioGroup from './ui/radio-group';
import Button from './ui/button';

type PizzaCardProps = {
  title: string;
  image: string;
  price: number;
};

const PizzaCard: React.FC<PizzaCardProps> = ({ title, image, price }) => {
  const [count, setCount] = useState(0);

  return (
    <Card>
      <img src={image} alt={title} className="w-[260px] rounded-lg mb-4" />
      <h2 className="text-lg font-semibold text-center">{title}</h2>
      <div className=" justify-center mt-2 mb-4 grid grid-cols-3 gap-2">
        <RadioGroup
        
          name="dough"
          options={[
            { label: 'тонкое', value: 'thin' },
            { label: 'традиционное', value: 'traditional' },
          ]}
          onChange={(value) => console.log('Selected dough:', value)}
        />
      </div>
      <div className="flex justify-center mb-4">
        <RadioGroup
          name="size"
          options={[
            { label: '26 см.', value: '26' },
            { label: '30 см.', value: '30' },
            { label: '40 см.', value: '40' },
          ]}
          onChange={(value) => console.log('Selected size:', value)}
        />
      </div>
      <div className="flex justify-between items-center">
        <Label className=' font-[30px]'>от {price} ₽</Label>
        <Button onClick={() => setCount(count + 1)} count={count}>
          + Добавить
        </Button>
      </div>
    </Card>
  );
};

export default PizzaCard;
