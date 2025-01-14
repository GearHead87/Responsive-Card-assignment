import { AmenityProps } from '@/libs/types';
import * as React from 'react';

export const Amenity: React.FC<AmenityProps> = ({ icon: Icon, label }) => {
  return (
    <div className="flex items-center gap-1.5">
      <Icon className="w-5 h-5 md:w-7 md:h-7 text-zinc-600" />
      <span className="text-[10px] md:text-[14px] lg:text-base text-zinc-600">{label}</span>
    </div>
  );
};