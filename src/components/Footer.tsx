import Container from "@/components/Container";
import { useFooterData, useSiteData } from "@/hooks/useData";
import {
  XitterIcon,
  InstagramIcon,
  FacebookIcon,
  BtnGooglePlay,
  BtnAppleStore,
} from "./Icons";
import Button from "./Button";

export default function Footer() {
  const footer = useFooterData();
  const site = useSiteData();

  const socialIcons = {
    facebook: <FacebookIcon size={14} />,
    instagram: <InstagramIcon size={16} />,
    xitter: <XitterIcon size={16} />,
  };

  return (
    <footer className="relative mt-auto flex py-4">
      <div className="absolute bottom-[-180px] left-[95%] size-[480px] rounded-full bg-[#D5AEE4] blur-[150px]" />

      <Container variant="footer">
        <div className="flex flex-col flex-wrap justify-between gap-5 text-center md:flex-row md:gap-10 md:text-left xl:flex-nowrap">
          {/* Company Info */}
          <div className="w-62 mx-auto shrink-0 md:mx-0">
            <div className="text-text-dark mb-4 text-[44px] font-medium">
              Jadoo.
            </div>

            {site.tagline && (
              <p className="text-text mt-6 text-xs leading-tight">
                {site.tagline}
              </p>
            )}
          </div>

          {/* Footer Sections */}
          <div className="mt-4 flex flex-wrap justify-center gap-5 md:flex-nowrap md:justify-start">
            {footer.sections.map(section => (
              <div className="w-40" key={section.title}>
                <p className="text-text-dark mb-4 text-lg font-bold md:text-[21px]">
                  {section.title}
                </p>

                <ul className="mt-6 flex-wrap text-base md:mt-8 md:text-lg">
                  {section.links.map(link => (
                    <li key={link.label} className="not-first:mt-2">
                      <a
                        href={link.href}
                        className="hover:text-text-dark text-text transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="mt-3 md:mt-0">
            <div className="mb-8 flex justify-center gap-6 md:justify-start">
              {footer.social.map(social => (
                <a
                  key={social.platform}
                  href={social.href}
                  className="[&>svg]:fill-text-dark [&>svg]:transition-fill hover:bg-orange flex size-[45px] items-center justify-center rounded-full bg-white shadow-[0px_10px_20px_0px_rgba(0,2,10,.1)] transition-all duration-200 hover:shadow-md [&:hover>svg]:fill-white [&>svg]:duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {socialIcons[social.icon as keyof typeof socialIcons]}
                </a>
              ))}
            </div>

            <p className="text-text mb-3 text-[20px]">{footer.description}</p>

            <div className="min-w-55 flex justify-center gap-2 md:justify-start">
              <Button
                href="/"
                variant="store"
                size="none"
                className="w-26 h-9 rounded-3xl px-4"
              >
                <BtnGooglePlay className="w-20 cursor-pointer" />
              </Button>

              <Button
                href="/"
                variant="store"
                size="none"
                className="w-26 h-9 rounded-3xl fill-white px-4"
              >
                <BtnAppleStore className="w-20 cursor-pointer" />
              </Button>
            </div>
          </div>
        </div>

        <div className="text-text mt-12 text-center text-sm md:mt-20">
          All rights reserved@jadoo.co
        </div>
      </Container>
    </footer>
  );
}
