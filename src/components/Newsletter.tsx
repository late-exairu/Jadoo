import Container from "@/components/Container";
import { useNewsletterData } from "@/hooks/useData";
import { RingsImg, NewsletterArrowIcon } from "@/components/Icons";
import Button from "./Button";

export default function Newsletter() {
  const newsletter = useNewsletterData();

  return (
    <section>
      <Container className="relative">
        <div className="relative">
          <div className="bg-linear-0 to-top absolute -right-5 -top-3 z-10 flex size-12 items-center justify-center rounded-full from-[#747DEF] to-[#5E3BE1] md:size-[70px]">
            <NewsletterArrowIcon
              fill="#fff"
              width={40}
              height={31}
              className="relative top-0.5 h-6 w-8 md:top-1 md:h-8 md:w-10"
            />
          </div>
          <div className="relative overflow-clip rounded-[20px] rounded-tl-[80px] bg-[#f9f7fe] bg-no-repeat px-6 py-10 md:rounded-tl-[130px] md:px-12 lg:px-24 lg:py-20">
            <RingsImg size={290} className="absolute -right-20 -top-5" />
            <RingsImg
              size={390}
              className="rotate-100 absolute -bottom-28 left-2"
            />

            <div className="relative mx-auto max-w-4xl text-center">
              <h3 className="text-text text-xl font-semibold leading-relaxed md:text-2xl lg:text-[33px]">
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
                  className="text-text-dark h-15 placeholder-text focus:outline-text-dark bg-left-4 bg-size-[21px] bg-position-[30px_center] w-full rounded-lg bg-white bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyMSAxOCI+PHBhdGggc3Ryb2tlPSIjMzk0MjVkIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Im00IDYgNS40IDQuMDVhMSAxIDAgMCAwIDEuMiAwTDE2IDYiLz48cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMTciIHg9Ii41IiB5PSIuNSIgc3Ryb2tlPSIjMzk0MjVkIiByeD0iNC41Ii8+PC9zdmc+')] bg-no-repeat p-3 pl-16 font-sans font-medium focus:outline-2 md:h-[68px] md:w-auto md:flex-1"
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
        </div>
      </Container>
    </section>
  );
}
