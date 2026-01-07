import { useTestimonialsData } from "@/hooks/useData";
import Container from "@/components/Container";
import TitleSmall from "@/components/TitleSmall";
import TitleBig from "@/components/TitleBig";
import Feedback from "@/components/Feedback";
import { NavArrowIcon } from "@/components/Icons";

export default function Testimonials() {
  const testimonials = useTestimonialsData();

  return (
    <section>
      <Container className="md:gap-12.5 flex flex-col gap-8 md:flex-row">
        <div className="md:w-3/7 relative text-center md:text-left">
          <TitleSmall className="uppercase md:text-left">
            {testimonials.title}
          </TitleSmall>
          <TitleBig className="md:text-left">{testimonials.subtitle}</TitleBig>
          <div className="feedback-pagination gap-6.5 [&>span]:bg-text! [&>span]:m-0! [&>span]:size-3! mt-20 flex max-md:hidden" />
        </div>

        <div className="md:w-4/7 relative text-center md:text-left">
          <Feedback testimonials={testimonials.items} />

          <div className="absolute z-10 flex max-lg:bottom-0 max-lg:left-1/2 max-lg:-translate-x-1/2 lg:-right-10 lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2 lg:flex-col">
            <div className="feedback-button-prev size-15! relative! m-0! inset-0! [.feedback-button-disabled]:opacity-20 [.feedback-button-disabled]:cursor-default flex cursor-pointer items-center justify-center bg-white">
              <NavArrowIcon className="fill-none! size-4! rotate-90 lg:rotate-180" />
            </div>
            <div className="feedback-button-next size-15! relative! m-0! inset-0! [.feedback-button-disabled]:opacity-20 [.feedback-button-disabled]:cursor-default flex cursor-pointer items-center justify-center bg-white">
              <NavArrowIcon className="fill-none! size-4! -rotate-90 lg:rotate-0" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
