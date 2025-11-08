import { useServicesData } from "@/hooks/useData";
import Container from "@/components/Container";
import TitleSmall from "@/components/TitleSmall";
import TitleBig from "@/components/TitleBig";
import {
  SatelliteIcon,
  PlaneIcon,
  MicIcon,
  GearIcon,
  RectIcon,
  RectRedIcon,
} from "@/components/Icons";

type Service = {
  icon: string;
  title: string;
  description: string;
};

export default function Services() {
  const services = useServicesData();

  const serviceIcons = {
    satellite: (
      <SatelliteIcon
        size={70}
        className="relative z-10 will-change-transform [&+.recticon]:bottom-8 [&+.recticon]:left-1/2 [&>.satellite-dish]:animate-[satelliteRotation_3s_ease-in-out_infinite]"
      />
    ),
    plane: (
      <PlaneIcon
        size={140}
        className="relative z-10 animate-[fly3_3s_ease-in-out_infinite] will-change-transform [&+.recticon]:bottom-14 [&+.recticon]:left-1/3"
      />
    ),
    mic: (
      <MicIcon
        size={70}
        className="relative z-10 will-change-transform [&+.recticon]:bottom-14 [&+.recticon]:left-1/2"
      />
    ),
    gear: (
      <GearIcon
        size={50}
        className="relative z-10 will-change-transform [&+.recticon]:bottom-8 [&+.recticon]:left-1/2"
      />
    ),
  };

  return (
    <section>
      <Container className="">
        <TitleSmall className="text-center uppercase">
          {services.title}
        </TitleSmall>
        <TitleBig className="text-center">{services.subtitle}</TitleBig>

        <ul className="md:mt-18 mx-auto mb-8 mt-16 flex max-w-[700px] flex-col items-center gap-y-10 md:mb-10 md:flex-row md:flex-wrap md:items-stretch md:justify-center lg:mb-12 lg:mt-20 lg:max-w-full lg:justify-center">
          {services.items.map((service: Service, index: number) => (
            <li
              key={index}
              className="hover:[&>.redicon]:transform-[translate(-50px,50px)] hover:[&>div]: relative z-10 min-w-72 max-w-[320px] hover:z-10 md:w-1/2 lg:w-1/4"
            >
              <div className="lg:rounded-4xl relative flex h-full w-full flex-col items-center rounded-3xl bg-white px-6 pb-8 text-center transition-shadow duration-200 ease-in-out hover:shadow-[0px_65px_50px_0px_rgba(0,0,0,.05)] lg:pb-11">
                <figure className="w-42 h-34 relative flex items-center justify-center">
                  {serviceIcons[service.icon as keyof typeof serviceIcons]}

                  <RectIcon size={50} className="recticon absolute" />
                </figure>

                <h3 className="text-text-black mb-4 text-lg font-medium md:text-xl">
                  {service.title}
                </h3>
                <p className="text-text max-w-md leading-relaxed">
                  {service.description}
                </p>
              </div>

              <RectRedIcon
                size={100}
                className="redicon translate absolute bottom-5 left-5 -z-10 animate-[rotate_20s_linear_infinite] transition-transform duration-200 ease-in-out will-change-transform"
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
