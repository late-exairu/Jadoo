import { useBookingData } from "@/hooks/useData";
import Container from "@/components/Container";
import TitleSmall from "@/components/TitleSmall";
import TitleBig from "@/components/TitleBig";
import { DestinationIcon, PaymentIcon, AirportIcon } from "@/components/Icons";

export default function Booking() {
  const booking = useBookingData();
  const trip = booking.trip;

  const bookingIcons = {
    destination: <DestinationIcon size={22} className="" />,
    payment: <PaymentIcon size={22} className="" />,
    airport: <AirportIcon size={22} className="" />,
  };

  return (
    <section>
      <Container className="flex">
        <div className="w-1/2">
          <TitleSmall className="text-left">{booking.title}</TitleSmall>
          <TitleBig className="text-left">{booking.subtitle}</TitleBig>

          <ul className="mt-4 md:mt-8">
            {booking.steps.map((item, index) => (
              <li
                key={index}
                className="text-text not-first:mt-12 mb-8 flex flex-col md:flex-row md:items-center"
              >
                <div className="bg-orange mr-5 mt-1 flex h-12 w-12 shrink-0 items-center justify-center self-start rounded-xl md:mb-0">
                  {bookingIcons[item.icon] as keyof typeof bookingIcons}
                </div>

                <div>
                  <h3 className="mb-1 font-bold">{item.title}</h3>
                  <p className="font-normal leading-tight">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-1/2">
          {trip.destination}
          {trip.date}
          {trip.people}
          {trip.likes}
          {trip.image}
        </div>
      </Container>
    </section>
  );
}
