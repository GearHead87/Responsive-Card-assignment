import { Wifi, PocketIcon as Pool, Mountain, Waves, Utensils } from 'lucide-react';
import { HotelCardProps } from './types';

export const hotelData: HotelCardProps[] = [
	{
		name: 'Hotel Golden Palace, Puri',
		address: 'VIP Rd, Puri, Odisha-752002',
		rating: 4.5,
		reviews: 23,
		distanceFromCenter: 34.32,
		price: {
			original: 34440.87,
			discounted: 31440.87,
		},
		image: 'https://i.ibb.co.com/G2nmh5s/hotel1.png',
		badges: [
			{ label: 'Cheapest', variant: 'primary' },
			{ label: 'Best', variant: 'secondary' },
		],
		amenities: [
			{ icon: Wifi, label: 'Free Wifi' },
			{ icon: Pool, label: 'Swimming Pool' },
			{ icon: Mountain, label: 'City View' },
		],
		stayDetails: {
			nights: 3,
			adults: 2,
			children: 2,
		},
	},
	{
		name: 'Sea Breeze Hotel',
		address: 'Beach Rd, Puri, Odisha-752001',
		rating: 4.7,
		reviews: 30,
		distanceFromCenter: 2.0,
		price: {
			original: 30000.0,
			discounted: 28200.5,
		},
		image: 'https://i.ibb.co.com/c1PYbLH/hotel2.png',
		badges: [{ label: 'Best', variant: 'secondary' }],
		amenities: [
			{ icon: Wifi, label: 'Free Wifi' },
			{ icon: Waves, label: 'Sea View' },
			{ icon: Utensils, label: 'Breakfast Included' },
		],
		stayDetails: {
			nights: 3,
			adults: 2,
			children: 1,
		},
	},
];
