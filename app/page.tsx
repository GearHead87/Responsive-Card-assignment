import { HotelCard } from '@/components/HotelCard';
import { hotelData } from '@/libs/hotelData';
export default function Home() {
	return (
		<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-2'>
			{hotelData.map((hotel, index) => (
				<HotelCard
					key={index}
					name={hotel.name}
					address={hotel.address}
					rating={hotel.rating}
					reviews={hotel.reviews}
					distanceFromCenter={hotel.distanceFromCenter}
					price={hotel.price}
					image={hotel.image}
					badges={hotel.badges}
					amenities={hotel.amenities}
					stayDetails={hotel.stayDetails}
				/>
			))}
		</div>
	);
}
