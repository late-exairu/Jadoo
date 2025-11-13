import { useBookingData } from "@/hooks/useData";
import Container from "@/components/Container";
import TitleSmall from "@/components/TitleSmall";
import TitleBig from "@/components/TitleBig";
import {
  DestinationIcon,
  PaymentIcon,
  AirportIcon,
  LeafIcon,
  BuildingIcon,
  MapIcon,
  PaperPlaneIcon,
  HeartIcon,
} from "@/components/Icons";

export default function Booking() {
  const booking = useBookingData();
  const trip = booking.trip;

  const bookingIcons = {
    destination: <DestinationIcon size={22} className="md:size-5.5 size-8" />,
    payment: <PaymentIcon size={22} className="md:size-5.5 size-8" />,
    airport: <AirportIcon size={22} className="md:size-5.5 size-8" />,
  };

  const stepColor = {
    0: "bg-yellow",
    1: "bg-orange",
    2: "bg-sapphire",
  } as const;

  return (
    <section>
      <Container className="md:gap-12.5 flex flex-col gap-8 md:flex-row">
        <div className="text-center md:w-1/2 md:text-left">
          <TitleSmall className="text-center md:text-left">
            {booking.title}
          </TitleSmall>
          <TitleBig className="text-center md:text-left">
            {booking.subtitle}
          </TitleBig>

          <ul className="max-w-100 mx-auto mt-12 md:mx-0 md:mt-8">
            {booking.steps.map((item, index) => (
              <li
                key={index}
                className="text-text not-first:mt-11.5 mb-8 flex flex-col gap-5 md:flex-row md:items-center"
              >
                <div
                  className={`${stepColor[(index % 3) as keyof typeof stepColor]} mt-1 flex size-16 shrink-0 items-center justify-center self-center rounded-xl md:mb-0 md:size-12 md:self-start`}
                >
                  {bookingIcons[item.icon as keyof typeof bookingIcons]}
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

        <div className="mb-24 flex items-start justify-center md:mb-0 md:w-1/2 md:justify-start">
          <div className="md:mt-18 text-text max-w-[370px] rounded-3xl bg-white px-6 py-5 pb-7 font-medium shadow-[0px_65px_50px_0px_rgba(0,0,0,.05),30px_-30px_60px_0px_rgba(89,177,230,.25)] md:ml-6">
            <img
              src={trip.image}
              alt={trip.destination}
              className="mb-6 w-full rounded-3xl"
            />
            <p className="text-text-dark mb-4 text-lg leading-tight">
              {trip.destination}
            </p>

            <div>{trip.date}</div>

            <div className="gap-4.5 mb-7 mt-5 flex">
              <div className="flex size-9 items-center justify-center rounded-full bg-gray-400/10">
                <LeafIcon size={14} className="" />
              </div>
              <div className="flex size-9 items-center justify-center rounded-full bg-gray-400/10">
                <MapIcon size={14} className="" />
              </div>
              <div className="flex size-9 items-center justify-center rounded-full bg-gray-400/10">
                <PaperPlaneIcon size={14} className="fill-amber-300" />
              </div>
            </div>

            <div className="relative">
              <BuildingIcon size={16} className="mr-3 inline-flex" />
              {trip.people}
              <span className="ml-1">{trip.likes}</span>

              <div className="absolute right-0 top-0">
                <HeartIcon size={20} className="" />

                {trip.ongoing && (
                  <div className="@max-lg:top-6 w-65.5 pt-4.5 pb-5.5 absolute -right-8 flex gap-2.5 rounded-2xl bg-white px-5 text-sm font-medium shadow-[0px_10px_20px_0px_rgba(0,0,0,.1)] lg:bottom-6 lg:left-1/2 lg:-translate-x-1/2">
                    <div className="shrink-0">
                      <img
                        src={trip.ongoing.img}
                        alt=""
                        className="size-12.5 rounded-full"
                      />
                    </div>

                    <div className="flex-1 text-sm">
                      <p className="-mt-1">Ongoing</p>
                      <p className="text-text-dark text-lg font-medium">
                        Trip to {trip.ongoing.location}
                      </p>

                      <p className="text-text-dark mt-2.5">
                        <span className="text-violet">
                          {`${trip.ongoing.progress}`}%
                        </span>{" "}
                        completed
                      </p>

                      <progress
                        className="[&::-webkit-progress-value]:bg-violet [&::-moz-progress-bar]:bg-violet [&::-moz-progress-bar]:height-[5px] mt-2 block h-[5px] w-full appearance-none overflow-hidden rounded-sm [&::-moz-progress-bar]:rounded-sm [&::-webkit-progress-bar]:rounded-sm [&::-webkit-progress-bar]:bg-gray-200"
                        value={`${trip.ongoing.progress}`}
                        max="100"
                      ></progress>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
