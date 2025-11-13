import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { useDestinationsData } from "@/hooks/useData";
import Container from "@/components/Container";
import TitleSmall from "@/components/TitleSmall";
import TitleBig from "@/components/TitleBig";
import { PointerIcon } from "@/components/Icons";

export default function Destinations() {
  const destinations = useDestinationsData();

  return (
    <section>
      <Container>
        <TitleSmall className="text-center">{destinations.title}</TitleSmall>
        <TitleBig className="text-center">{destinations.subtitle}</TitleBig>

        <Swiper
          slidesPerView={1}
          spaceBetween={50}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={swiper => console.log(swiper)}
          className="px-10! pb-25! md:px-12! -mx-5! md:mt-15 mt-12"
        >
          {destinations.items.map((destination, index) => (
            <SwiperSlide
              key={index}
              className="overflow-hidden rounded-3xl bg-white shadow-[0px_65px_50px_0px_rgba(0,0,0,.05)]"
            >
              <img
                src={destination.image}
                alt={destination.name}
                className="aspect-[0.96] object-cover"
              />
              <div className="text-text px-5 py-6 pb-8 font-medium">
                <div className="mb-4 flex items-center justify-between text-lg">
                  <span>{destination.name}</span>
                  <span>{destination.price}</span>
                </div>

                <PointerIcon size={20} className="mb-1 mr-3 inline-flex" />
                {destination.duration}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
}
