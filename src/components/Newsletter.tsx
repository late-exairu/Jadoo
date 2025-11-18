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

            <form className="lg:mt-18 mx-auto mt-10 flex max-w-[626px] flex-col gap-4 md:flex-row md:justify-center md:gap-x-6">
              <input
                type="email"
                id="newsletter-email"
                placeholder="Your email"
                className="text-text-dark h-15 placeholder-text focus:outline-text-dark bg-left-4 bg-size-5 w-full rounded-lg bg-white bg-[url('data:image/svg+xml,%3Csvg_width='21'_height='18'_viewBox='0_0_21_18'_fill='none'_xmlns='http://www.w3.org/2000/svg'%3E%3Cpath_d='M4_6L9.4_10.05C9.75556_10.3167_10.2444_10.3167_10.6_10.05L16_6'_stroke='%2339425D'_stroke-linecap='round'/%3E%3Crect_x='0.5'_y='0.5'_width='20'_height='17'_rx='4.5'_stroke='%2339425D'/%3E%3C/svg%3E%0A')] bg-no-repeat px-16 py-3 focus:outline-2 md:h-[68px] md:w-auto md:flex-1"
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
