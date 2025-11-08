import { useServicesData } from "@/hooks/useData";
import Container from "@/components/Container";
import TitleSmall from "@/components/TitleSmall";
import TitleBig from "@/components/TitleBig";
import {
  SatelliteIcon,
  PlaneIcon,
  MicIcon,
  GearIcon,
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
        className="[&:.satellite-dish]animate-[satelliteRotation_3s_ease-in-out_infinite]"
      />
    ),
    plane: (
      <PlaneIcon
        size={140}
        className="animate-[fly3_3s_ease-in-out_infinite]"
      />
    ),
    mic: <MicIcon size={70} className="" />,
    gear: <GearIcon size={50} className="" />,
  };

  return (
    <section>
      <Container className="">
        <TitleSmall className="text-center uppercase">
          {services.title}
        </TitleSmall>
        <TitleBig className="text-center">{services.subtitle}</TitleBig>

        <ul className="my-8 flex flex-col items-center md:my-10 md:flex-row md:flex-wrap md:justify-center lg:my-12 lg:justify-between">
          {services.items.map((service: Service, index: number) => (
            <li
              key={index}
              className="lg:rounded-4xl flex min-w-60 max-w-[320px] flex-col items-center rounded-3xl px-6 py-8 text-center transition-shadow duration-200 ease-in-out hover:shadow-[0px_65px_50px_0px_rgba(0,0,0,.05)] md:w-1/2 lg:w-1/4 lg:px-10 lg:pb-11"
            >
              <figure className="w-42 h-34 flex items-center justify-center">
                {serviceIcons[service.icon as keyof typeof serviceIcons]}
              </figure>

              <h3 className="text-text-black mb-4 text-lg font-medium md:text-xl">
                {service.title}
              </h3>
              <p className="text-text max-w-md leading-relaxed">
                {service.description}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
