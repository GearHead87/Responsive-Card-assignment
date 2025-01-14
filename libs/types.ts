import { type LucideIcon } from 'lucide-react'

export interface AmenityProps {
  icon: LucideIcon;
  label: string;
}

export interface BadgeProps {
  label: string;
  variant: 'primary' | 'secondary';
}

export interface HotelCardProps {
  name: string;
  address: string;
  rating: number;
  reviews: number;
  distanceFromCenter: number;
  price: {
    original: number;
    discounted: number;
  };
  image: string;
  badges: BadgeProps[];
  amenities: AmenityProps[];
  stayDetails: {
    nights: number;
    adults: number;
    children: number;
  };
}

