import { AmenityProps } from '@/libs/types';
import * as React from 'react';

export const Amenity: React.FC<AmenityProps> = ({ icon: Icon, label }) => {
	return (
		<span className="flex items-center gap-1.5">
			<Icon className="w-5 h-5 lg:w-6 lg:h-6 text-zinc-600" />
			<span className="text-[10px] lg:text-[14px] text-zinc-600">{label}</span>
		</span>
	);
};
