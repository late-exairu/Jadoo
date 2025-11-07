import { useHeroData } from "@/hooks/useData";
import Container from "./Container";
import Button from "./Button";
import { Plane, Plane2, PlayIcon } from "./Icons";

export default function Hero() {
  const hero = useHeroData();

  return (
    <section>
      <div className="absolute left-[-420px] top-[-60px] size-[480px] rounded-full bg-[#D5AEE4] blur-[150px]" />
      <Container className="relative mt-10 flex min-h-svh items-center py-20">
        <div className="absolute -top-10 left-1/2 h-[736px] w-[1327px] bg-[url('/cloud.svg')] bg-no-repeat" />
        <div className="relative z-20 mx-auto max-w-[380px] text-center md:m-0 md:max-w-[420px] md:text-left lg:max-w-[480px] xl:max-w-[560px]">
          <h1 className="text-orange mb-6 text-sm font-bold uppercase md:text-[20px]">
            {hero.title}
          </h1>
          <h2
            className="text-text-dark [&>span]:after:-translate-x-3/7 mb-6 font-serif text-5xl leading-[1.06] tracking-[-0.04em] md:text-6xl lg:mb-8 lg:text-7xl xl:text-[84px] [&>span]:relative [&>span]:z-10 [&>span]:after:absolute [&>span]:after:bottom-[15%] [&>span]:after:left-1/2 [&>span]:after:-z-10 [&>span]:after:h-[12%] [&>span]:after:w-[140%] [&>span]:after:bg-[url('/underline.svg')] [&>span]:after:bg-center [&>span]:after:bg-no-repeat [&>span]:after:content-['']"
            dangerouslySetInnerHTML={{ __html: hero.subtitle }}
          />
          <p className="mb-8 max-w-lg text-sm leading-loose text-gray-700 lg:text-base">
            {hero.description}
          </p>

          <div className="flex justify-center gap-5 md:justify-start md:gap-8">
            <Button href={hero.buttons.primary.href} variant="primary">
              {hero.buttons.primary.text}
            </Button>

            <Button href={hero.buttons.secondary.href} variant="ghost">
              <PlayIcon size={54} className="mr-2" />
              {hero.buttons.secondary.text}
            </Button>
          </div>
        </div>

        <div className="relative hidden min-h-full grow self-stretch md:flex">
          <div className="absolute -left-40 bottom-0 right-auto top-0 aspect-square max-h-[80svh] min-h-full lg:-left-20 lg:right-0">
            <Plane
              size={160}
              className="left-1/6 top-1/15 animate-float absolute will-change-transform"
            />
            <img
              className="pointer-events-none absolute top-1/2 z-10 translate-y-[-50%]"
              src="./traveler.webp"
              alt="Traveler Illustration"
            />
            <Plane2
              size={140}
              className="right-1/8 top-1/6 animate-float absolute will-change-transform"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
