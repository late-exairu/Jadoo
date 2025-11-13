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

type BookingStepIcon = "destination" | "payment" | "airport";

export default function Booking() {
  const booking = useBookingData();
  const trip = booking.trip;

  const bookingIcons = {
    destination: <DestinationIcon size={22} className="size-8 md:size-5.5" />,
    payment: <PaymentIcon size={22} className="size-8 md:size-5.5" />,
    airport: <AirportIcon size={22} className="size-8 md:size-5.5" />,
  };

  const stepColor = {
    0: "bg-yellow",
    1: "bg-orange",
    2: "bg-sapphire",
  } as const;

  return (
    <section>
      <Container className="flex flex-col md:flex-row gap-8 md:gap-12.5">
        <div className="md:w-1/2 text-center md:text-left">
          <TitleSmall className="text-center md:text-left">
            {booking.title}
          </TitleSmall>
          <TitleBig className="text-center md:text-left">
            {booking.subtitle}
          </TitleBig>

          <ul className="mt-12 md:mt-8 max-w-100 mx-auto md:mx-0">
            {booking.steps.map((item, index) => (
              <li
                key={index}
                className="text-text gap-5 not-first:mt-11.5 mb-8 flex flex-col md:flex-row md:items-center"
              >
                <div
                  className={`${stepColor[(index % 3) as keyof typeof stepColor]} self-center mt-1 flex size-16 md:size-12 shrink-0 items-center justify-center md:self-start rounded-xl md:mb-0`}
                >
                  {bookingIcons[item.icon as BookingStepIcon]}
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

        <div className="md:w-1/2 flex justify-center md:justify-start items-start mb-24 md:mb-0">
          <div className="md:mt-18 md:ml-6 max-w-[370px] rounded-3xl bg-white px-6 py-5 pb-7 shadow-[0px_65px_50px_0px_rgba(0,0,0,.05),30px_-30px_60px_0px_rgba(89,177,230,.25)] font-medium text-text">
            <img
              src={trip.image}
              alt={trip.destination}
              className="mb-6 w-full rounded-3xl"
            />
            <p className="text-lg text-text-dark leading-tight mb-4">
              {trip.destination}
            </p>

            <div>{trip.date}</div>

            <div className="flex mt-5 mb-7 gap-4.5">
              <div className="size-9 flex items-center justify-center bg-gray-400/10 rounded-full">
                <LeafIcon size={14} className="" />
              </div>
              <div className="size-9 flex items-center justify-center bg-gray-400/10 rounded-full">
                <MapIcon size={14} className="" />
              </div>
              <div className="size-9 flex items-center justify-center bg-gray-400/10 rounded-full">
                <PaperPlaneIcon size={14} className="fill-amber-300" />
              </div>
            </div>

            <div className="relative">
              <BuildingIcon size={16} className="mr-3 inline-flex" />
              {trip.people}
              <span className="ml-1">{trip.likes}</span>

              <div className="right-0 absolute top-0">
                <HeartIcon size={20} className="" />

                {trip.ongoing && (
                  <div className="absolute @max-lg:top-6 -right-8 flex lg:-translate-x-1/2 lg:left-1/2 lg:bottom-6 w-65.5 px-5 pt-4.5 pb-5.5 bg-white rounded-2xl shadow-[0px_10px_20px_0px_rgba(0,0,0,.1)] text-sm font-medium gap-2.5">
                    <div className="shrink-0">
                      <img
                        src={trip.ongoing.img}
                        alt=""
                        className="size-12.5 rounded-full"
                      />
                    </div>

                    <div className="flex-1 text-sm">
                      <p className="-mt-1">Ongoing</p>
                      <p className="text-lg text-text-dark font-medium">
                        Trip to {trip.ongoing.location}
                      </p>

                      <p className="text-text-dark mt-2.5">
                        <span className="text-violet">
                          {`${trip.ongoing.progress}`}%
                        </span>{" "}
                        completed
                      </p>

                      <progress
                        className="w-full block h-[5px] rounded-sm overflow-hidden mt-2 appearance-none [&::-webkit-progress-bar]:rounded-sm [&::-webkit-progress-bar]:bg-gray-200 [&::-webkit-progress-value]:bg-violet [&::-moz-progress-bar]:bg-violet [&::-moz-progress-bar]:height-[5px] [&::-moz-progress-bar]:rounded-sm"
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
