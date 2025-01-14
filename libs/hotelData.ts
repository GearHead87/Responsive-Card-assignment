import {
	Wifi,
	PocketIcon as Pool,
	Mountain,
	Waves,
	Utensils,
	CircleParking,
	Coffee,
	Dumbbell,
	Sun,
} from 'lucide-react';
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
		image: 'https://i.ibb.co/G2nmh5s/hotel1.png',
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
		image: 'https://i.ibb.co/c1PYbLH/hotel2.png',
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
	{
		name: 'Sunrise Resort',
		address: 'Chakratirtha Rd, Puri, Odisha-752003',
		rating: 4.3,
		reviews: 18,
		distanceFromCenter: 5.0,
		price: {
			original: 28000.0,
			discounted: 25000.0,
		},
		image: 'https://i.ibb.co/G2nmh5s/hotel1.png',
		badges: [{ label: 'Cheapest', variant: 'primary' }],
		amenities: [
			{ icon: Wifi, label: 'Free Wifi' },
			{ icon: CircleParking, label: 'Free Parking' },
			{ icon: Pool, label: 'Swimming Pool' },
		],
		stayDetails: {
			nights: 3,
			adults: 3,
			children: 0,
		},
	},
	{
		name: 'Lotus Grand Hotel',
		address: 'CT Rd, Puri, Odisha-752003',
		rating: 4.2,
		reviews: 15,
		distanceFromCenter: 10.0,
		price: {
			original: 33000.0,
			discounted: 30000.0,
		},
		image: 'https://i.ibb.co/c1PYbLH/hotel2.png',
		badges: [{ label: 'Best', variant: 'secondary' }],
		amenities: [
			{ icon: Wifi, label: 'Free Wifi' },
			{ icon: Dumbbell, label: 'Fitness Center' },
			{ icon: Mountain, label: 'City View' },
		],
		stayDetails: {
			nights: 4,
			adults: 2,
			children: 0,
		},
	},
	{
		name: 'Beachside Bliss Hotel',
		address: 'Sea Beach Rd, Puri, Odisha-752004',
		rating: 4.8,
		reviews: 40,
		distanceFromCenter: 1.5,
		price: {
			original: 36000.0,
			discounted: 34000.0,
		},
		image: 'https://i.ibb.co/G2nmh5s/hotel1.png',
		badges: [{ label: 'Cheapest', variant: 'primary' }],
		amenities: [
			{ icon: Wifi, label: 'Free Wifi' },
			{ icon: Waves, label: 'Beach View' },
			{ icon: Utensils, label: 'Breakfast Included' },
		],
		stayDetails: {
			nights: 5,
			adults: 2,
			children: 2,
		},
	},
	{
		name: 'Ocean Pearl Inn',
		address: 'Marine Drive, Puri, Odisha-752005',
		rating: 4.4,
		reviews: 22,
		distanceFromCenter: 8.0,
		price: {
			original: 31000.0,
			discounted: 29000.0,
		},
		image: 'https://i.ibb.co/c1PYbLH/hotel2.png',
		badges: [{ label: 'Best', variant: 'secondary' }],
		amenities: [
			{ icon: Wifi, label: 'Free Wifi' },
			{ icon: Pool, label: 'Swimming Pool' },
			{ icon: Sun, label: 'Sun Deck' },
		],
		stayDetails: {
			nights: 4,
			adults: 3,
			children: 1,
		},
	},
	{
		name: 'The Grand Blue',
		address: 'Baliapanda, Puri, Odisha-752006',
		rating: 4.6,
		reviews: 28,
		distanceFromCenter: 6.5,
		price: {
			original: 35000.0,
			discounted: 32000.0,
		},
		image: 'https://i.ibb.co/G2nmh5s/hotel1.png',
		badges: [{ label: 'Cheapest', variant: 'primary' }],
		amenities: [
			{ icon: Wifi, label: 'Free Wifi' },
			{ icon: CircleParking, label: 'Parking' },
			{ icon: Coffee, label: 'Cafe' },
		],
		stayDetails: {
			nights: 3,
			adults: 2,
			children: 1,
		},
	},
	// Continue for 8 more hotels to make it 15 entries.
];
