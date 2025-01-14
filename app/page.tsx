import { HotelCard } from '@/components/HotelCard';
import { hotelData } from '@/libs/hotelData';
export default function Home() {
	return (
		<div>
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
