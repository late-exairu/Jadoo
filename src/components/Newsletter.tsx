import Container from "@/components/Container";
import { useNewsletterData } from "@/hooks/useData";
import { RingsImg } from "@/components/Icons";
import Button from "./Button";

export default function Newsletter() {
  const newsletter = useNewsletterData();

  return (
    <section>
      <Container>
        <div className="relative overflow-clip rounded-[20px] rounded-tl-[80px] bg-[#f9f7fe] bg-no-repeat px-6 py-10 md:rounded-tl-[130px] md:px-12 lg:px-24 lg:py-20">
          <RingsImg size={290} className="absolute -right-20 -top-5" />
          <RingsImg
            size={390}
            className="rotate-100 absolute -bottom-28 left-2"
          />

          <div className="relative mx-auto max-w-4xl text-center">
            <h3 className="text-text text-2xl font-semibold leading-relaxed md:text-3xl lg:text-[33px]">
              {newsletter.title}
            </h3>

            <form
              id="newsletter-form"
              className="lg:mt-18 mx-auto mt-10 flex max-w-[626px] flex-col gap-4 md:flex-row md:justify-center md:gap-x-6"
            >
              <input
                type="email"
                id="newsletter-email"
                placeholder="Your email"
                className="text-text-dark h-15 placeholder-text focus:outline-text-dark bg-left-4 bg-size-[21px] bg-position-[30px_center] w-full rounded-lg bg-white bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyMSAxOCI+PHBhdGggc3Ryb2tlPSIjMzk0MjVkIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Im00IDYgNS40IDQuMDVhMSAxIDAgMCAwIDEuMiAwTDE2IDYiLz48cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMTciIHg9Ii41IiB5PSIuNSIgc3Ryb2tlPSIjMzk0MjVkIiByeD0iNC41Ii8+PC9zdmc+')] bg-no-repeat px-16 py-3 font-sans font-medium focus:outline-2 md:h-[68px] md:w-auto md:flex-1"
              />
              <Button
                type="submit"
                size="lg"
                className="bg-linear-to-b hover:from-yellow hover:to-yellow min-w-44 from-[#FF946D] to-[#FF7D68] text-[17px] font-semibold text-white shadow-none"
              >
                {newsletter.button}
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
