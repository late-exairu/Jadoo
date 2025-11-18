import Container from "@/components/Container";
import { usePartnersData } from "@/hooks/useData";

export default function Partners() {
  const partners = usePartnersData();

  return (
    <section>
      <Container>
        <ul className="grid grid-cols-2 items-center justify-center sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {partners.logos.map((partner, index) => (
            <li
              key={index}
              className="flex items-center justify-center rounded-2xl bg-white p-5 opacity-70 grayscale transition hover:opacity-100 hover:shadow-[0px_65px_50px_0px_rgba(0,0,0,.05)] hover:grayscale-0 md:p-6 md:px-10"
            >
              <img
                src={partner.image}
                alt={partner.name}
                className="block h-9 object-contain"
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
