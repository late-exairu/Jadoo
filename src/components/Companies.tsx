import { usePartnersData } from "@/hooks/useData";
import Container from "@/components/Container";
import TitleSmall from "@/components/TitleSmall";
import TitleBig from "@/components/TitleBig";

export default function Partners() {
  const partners = usePartnersData();

  return (
    <section>
      <Container>
        <TitleSmall className="text-left uppercase">Partners</TitleSmall>
        <TitleBig className="text-left">Partners</TitleBig>

        <ul className="">
          {partners.logos.map(logo => (
            <li key={logo.name} className="">
              <img src={logo.image} alt={logo.name} className="" />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
