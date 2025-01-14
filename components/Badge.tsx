import { BadgeProps } from '@/libs/types';
import * as React from 'react';

export const Badge: React.FC<BadgeProps> = ({ label, variant }) => {
  const variantStyles = {
    primary: 'text-indigo-600 bg-violet-300/30',
    secondary: 'text-amber-500 bg-amber-200/30',
  };

  return (
    <div className={`px-3.5 py-1.5 rounded text-sm ${variantStyles[variant]}`}>
      {label}
    </div>
  );
};

