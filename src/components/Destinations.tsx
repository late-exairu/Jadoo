import { useDestinationsData } from "@/hooks/useData";
import Container from "@/components/Container";
import TitleSmall from "@/components/TitleSmall";
import TitleBig from "@/components/TitleBig";

export default function Destinations() {
  const destinations = useDestinationsData();

  return (
    <section>
      <Container className="">
        <TitleSmall className="text-center">{destinations.title}</TitleSmall>
        <TitleBig className="text-center">{destinations.subtitle}</TitleBig>
      </Container>
    </section>
  );
}
