import { useHeroData } from "@/hooks/useData";
import Container from "./Container";
import Button from "./Button";
import { Plane, PlayIcon } from "./Icons";

export default function Hero() {
  const hero = useHeroData();

  return (
    <section>
      <Container className="py-30 relative flex min-h-svh items-center">
        <div className="lg:max-w-1/2 relative z-10 max-w-full">
          <h1 className="text-orange mb-6 text-sm font-bold uppercase md:text-[20px]">
            {hero.title}
          </h1>
          <h2
            className="text-text-dark mb-6 font-serif text-5xl leading-[1.06] tracking-[-0.04em] md:text-6xl lg:mb-8 lg:text-7xl xl:text-[84px]"
            dangerouslySetInnerHTML={{ __html: hero.subtitle }}
          />
          <p className="mb-8 max-w-lg text-sm leading-loose text-gray-700 lg:text-base">
            {hero.description}
          </p>

          <div className="flex gap-5 md:gap-8">
            <Button href={hero.buttons.primary.href} variant="primary">
              {hero.buttons.primary.text}
            </Button>

            <Button href={hero.buttons.secondary.href} variant="ghost">
              <PlayIcon size={54} className="mr-2" />
              {hero.buttons.secondary.text}
            </Button>
          </div>
        </div>

        <div className="absolute -right-1 bottom-0 top-0 hidden md:flex">
          <div className="relative my-auto flex">
            <Plane size={160} className="left-1/6 top-1/15 absolute" />
            <img
              className="h-auto w-full"
              src="/public/traveler.webp"
              alt="Traveler Illustration"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
