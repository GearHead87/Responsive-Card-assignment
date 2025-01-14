import * as React from 'react';
import Image from 'next/image';
import { Star, MapPin, ExternalLink, Heart, Badge } from 'lucide-react';
import { HotelCardProps } from '@/libs/types';
import { Amenity } from './Amenity';

export const HotelCard: React.FC<HotelCardProps> = ({
	name,
	address,
	rating,
	reviews,
	distanceFromCenter,
	price,
	image,
	badges,
	amenities,
	stayDetails,
}) => {
	return (
		<div className="w-full max-w-[336px] md:max-w-none">
			<div className="flex flex-col md:flex-row bg-white rounded-2xl border border-zinc-300 md:border-none md:shadow-[0px_0px_16px_rgba(0,0,0,0.12)] p-2.5 md:p-4">
				{/* Image Section */}
				<div className="relative w-full md:w-[300px] aspect-[1.592] md:aspect-[1.551] rounded-2xl overflow-hidden">
					<Image
						src={image}
						alt={`${name} exterior view`}
						fill
						className="object-cover"
					/>
					<button className="absolute top-4 right-4 p-2 rounded-full bg-neutral-400/30">
						<Heart className="w-5 h-5 text-white" />
					</button>
				</div>

				{/* Content Section */}
				<div className="flex flex-col md:flex-row flex-1 mt-4 md:mt-0 md:ml-5">
					<div className="flex-1">
						{/* Header */}
						<div className="flex justify-between items-start">
							<h2 className="text-base md:text-2xl font-bold tracking-wider">
								{name}
							</h2>
							<div className="flex gap-0.5">
								{[...Array(Math.floor(rating))].map((_, i) => (
									<Star
										key={i}
										className="w-4 h-4 md:w-5 md:h-5 fill-amber-400 text-amber-400"
									/>
								))}
							</div>
						</div>

						{/* Address */}
						<p className="mt-3 text-sm md:text-base tracking-wider text-zinc-600">
							{address}
						</p>

						{/* Map Link */}
						<div className="flex justify-between mt-3">
							<button className="flex items-center gap-2 text-xs md:text-sm font-bold text-indigo-600">
								View property in map
								<ExternalLink className="w-4 h-4" />
							</button>
							<div className="flex items-center gap-1 text-xs md:text-sm font-medium text-neutral-700">
								<MapPin className="w-4 h-4" />
								{distanceFromCenter} KM from center
							</div>
						</div>

						{/* Amenities */}
						<div className="flex gap-4 mt-3">
							{amenities.map((amenity, index) => (
								<Amenity key={index} {...amenity} />
							))}
						</div>

						{/* Rating Box */}
						<div className="inline-flex items-center gap-2 px-2 py-1.5 mt-3 bg-neutral-200/30 rounded-xl">
							<Star className="w-4 h-4 fill-amber-400 text-amber-400" />
							<span className="text-sm md:text-base font-medium">
								<span className="text-black">{rating} </span>
								<span className="text-zinc-600">({reviews} reviews)</span>
							</span>
						</div>
					</div>

					{/* Divider */}
					<div className="my-4 md:mx-4 border-t md:border-l border-dashed border-zinc-600" />

					{/* Price Section */}
					<div className="flex flex-col">
						<div className="flex gap-4 md:justify-end">
							{badges.map((badge, index) => (
								<Badge key={index} {...badge} />
							))}
						</div>

						{/* Price */}
						<div className="flex items-center gap-2 mt-4 md:justify-end">
							<span className="text-base line-through text-neutral-700">
								₹{price.original.toFixed(2)}
							</span>
							<span className="text-xl md:text-2xl font-bold text-indigo-600">
								₹{price.discounted.toFixed(2)}
							</span>
						</div>

						<div className="text-xs text-zinc-600 md:text-right mt-1">
							Includes Taxes & Charges
						</div>

						<div className="text-sm text-zinc-600 md:text-right mt-2">
							{stayDetails.nights} nights
						</div>

						<div className="text-sm text-zinc-600 md:text-right mt-2">
							{stayDetails.adults} Adult, {stayDetails.children} Child
						</div>

						<button className="w-full md:w-auto px-5 py-2 mt-4 text-sm md:text-base font-medium text-indigo-600 rounded border border-indigo-600">
							Choose Room
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
