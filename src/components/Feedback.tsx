import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
// import required modules
import { EffectCreative, Navigation, Pagination } from "swiper/modules";

type Testimonial = {
  id: number;
  name: string;
  location: string;
  text: string;
  avatar: string;
};

export default function Feedback({
  testimonials,
}: {
  testimonials: Array<Testimonial>;
}) {
  return (
    <div className="flex h-full">
      <Swiper
        grabCursor={true}
        effect={"creative"}
        pagination={{
          el: ".feedback-pagination",
          type: "bullets",
          clickable: true,
        }}
        navigation={{
          nextEl: ".feedback-button-next",
          prevEl: ".feedback-button-prev",
          disabledClass: "feedback-button-disabled",
          addIcons: false,
        }}
        creativeEffect={{
          prev: {
            translate: [0, 0, 0],
          },
          next: {
            translate: [48, 78, 0],
          },
        }}
        modules={[EffectCreative, Pagination, Navigation]}
        className="feedbackSlider max-w-[590px]"
      >
        {testimonials.map(testimonial => (
          <SwiperSlide
            className="relative pb-20 pl-9 pr-12 pt-8"
            key={testimonial.id}
          >
            <img
              className="size-17 absolute left-0 top-0 rounded-full"
              src={testimonial.avatar}
              alt={testimonial.name}
            />
            <div className="px-8.5 text-text in-[.swiper-slide-active]:shadow-[0px_65px_50px_0px_rgba(0,0,0,.05)] in-[.swiper-slide-active]:border-white rounded-xl border-2 border-gray-200/70 bg-white py-7 pb-7 font-medium leading-loose">
              <p className="mb-8">“{testimonial.text}”</p>
              <div className="mb-1 text-lg font-semibold">
                {testimonial.name}
              </div>
              <div className="text-sm">{testimonial.location}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
