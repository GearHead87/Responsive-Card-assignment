import * as React from 'react';
import Image from 'next/image';
import { Star, MapPin, ExternalLink, Heart, ThumbsUp } from 'lucide-react';
import { HotelCardProps } from '@/libs/types';
import { Amenity } from './Amenity';
import { Badge } from './Badge';

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
		<div className="max-w-sm md:w-full lg:max-w-screen-lg mx-auto">
			<div className="flex flex-col lg:flex-row bg-white rounded-2xl border border-zinc-300 lg:border-none lg:shadow-lg p-2.5 lg:p-4">
				{/* Image Section */}
				<div className="relative w-full lg:w-[300px] aspect-[1.592] lg:aspect-[1.551] rounded-2xl overflow-hidden">
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
				<div className="flex flex-col lg:flex-row flex-1 mt-4 lg:mt-0 lg:ml-5">
					<div className="flex-1">
						{/* Header */}
						<div className="flex justify-between items-center">
							<h2 className="text-base lg:text-2xl font-bold tracking-wider text-black">
								{name}
							</h2>
							<div className="flex gap-0.5">
								{[...Array(Math.floor(rating))].map((_, i) => (
									<Star
										key={i}
										className="w-4 h-4 lg:w-5 lg:h-5 fill-amber-400 text-amber-400"
									/>
								))}
							</div>
						</div>

						{/* Address */}
						<p className="flex items-center gap-1 mt-3 text-sm lg:text-base tracking-wider text-zinc-600">
							<MapPin className="w-5 h-5 lg:w-6 lg:h-6 lg:hidden text-indigo-600" />
							{address}
						</p>

						{/* Map Link */}
						<div className="flex lg:items-center mt-4 flex-col-reverse lg:flex-row gap-3">
							<button className="flex items-center gap-2 text-xs lg:text-sm font-bold text-indigo-600">
								View property in map
								<ExternalLink className="w-4 h-4" />
							</button>
							<div className="flex items-center gap-1 text-xs lg:text-sm font-semibold text-neutral-700">
								📍 {distanceFromCenter} KM from center
							</div>
						</div>

						{/* Amenities */}
						<div className="flex gap-4 mt-4">
							{amenities.map((amenity, index) => (
								<Amenity key={index} {...amenity} />
							))}
						</div>

						{/* Rating Box */}
						<div className="inline-flex items-center gap-2 px-2 py-1.5 mt-3 bg-neutral-200/30 rounded-xl">
							<ThumbsUp className="w-4 h-4 fill-indigo-600 text-indigo-600" />
							<span className="text-sm lg:text-base font-medium">
								<span className="text-black">{rating} </span>
								<span className="text-zinc-600">({reviews} reviews)</span>
							</span>
						</div>
					</div>

					{/* Divider */}
					<div className="my-4 lg:mx-4 border-t lg:border-l border-dashed border-zinc-600" />

					{/* Price Section for Large Display */}
					<div className="lg:flex flex-col hidden">
						<div className="flex gap-4 lg:justify-end">
							{badges.map((badge, index) => (
								<Badge key={index} {...badge} />
							))}
						</div>

						{/* Price */}
						<div className="flex items-center gap-2 mt-4 lg:justify-end">
							<span className="text-base line-through text-neutral-700">
								₹{price.original.toFixed(2)}
							</span>
							<span className="text-xl lg:text-2xl font-bold text-indigo-600">
								₹{price.discounted.toFixed(2)}
							</span>
						</div>

						<div className="text-[10px] text-zinc-600 lg:text-right mt-1">
							Includes Taxes & Charges
						</div>

						<div className="text-base text-zinc-600 lg:text-right mt-2">
							{stayDetails.nights} nights
						</div>

						<div className="text-sm text-zinc-600 lg:text-right mt-2">
							{stayDetails.adults} Adult, {stayDetails.children} Child
						</div>

						<button className="w-full lg:w-auto px-5 py-2 mt-4 text-sm lg:text-base font-medium text-indigo-600 rounded border border-indigo-600">
							Choose Room
						</button>
					</div>

					{/* Price Section for smaller Display */}
					<div className="flex items-center justify-between gap-4 lg:hidden">
						<div className="flex items-center gap-2 lg:justify-end">
							<span className="text-xl font-bold text-indigo-600">
								₹{price.discounted.toFixed(2)}
							</span>
							<span className="text-sm text-zinc-600 font-semibold lg:text-right">
								/ {stayDetails.nights} nights
							</span>
						</div>

						<button className="px-2 py-1 text-sm font-medium text-indigo-600 rounded border border-indigo-600">
							Choose Room
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
