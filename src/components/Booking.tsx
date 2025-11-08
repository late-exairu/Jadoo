import { useBookingData } from "@/hooks/useData";
import Container from "@/components/Container";
import TitleSmall from "@/components/TitleSmall";
import TitleBig from "@/components/TitleBig";

export default function Booking() {
  const booking = useBookingData();

  return (
    <section>
      <Container className="">
        <TitleSmall className="text-left">{booking.title}</TitleSmall>
        <TitleBig className="text-left">{booking.subtitle}</TitleBig>
      </Container>
    </section>
  );
}
