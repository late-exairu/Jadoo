import { useTestimonialsData } from "@/hooks/useData";
import Container from "@/components/Container";
import TitleSmall from "@/components/TitleSmall";
import TitleBig from "@/components/TitleBig";

export default function Testimonials() {
  const testimonials = useTestimonialsData();

  return (
    <section>
      <Container>
        <TitleSmall className="text-left uppercase">
          {testimonials.title}
        </TitleSmall>
        <TitleBig className="text-left">{testimonials.subtitle}</TitleBig>
      </Container>
    </section>
  );
}
