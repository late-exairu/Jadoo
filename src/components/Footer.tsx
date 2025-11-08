import Container from "@/components/Container";
import { useFooterData, useSiteData } from "@/hooks/useData";

export default function Footer() {
  const footer = useFooterData();
  const site = useSiteData();

  return (
    <footer className="mt-auto flex bg-gray-50 py-16">
      <Container variant="footer">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-4 text-2xl font-bold text-gray-900">
              {site.name}.
            </div>
            <p className="max-w-sm text-gray-600">{footer.description}</p>

            {/* Social Links */}
            <div className="mt-6 flex gap-4">
              {footer.social.map(social => (
                <a
                  key={social.platform}
                  href={social.href}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm transition-shadow hover:shadow-md"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={social.icon}
                    alt={social.platform}
                    className="h-5 w-5"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footer.sections.map(section => (
            <div key={section.title}>
              <p className="mb-4 font-semibold text-gray-900">
                {section.title}
              </p>
              <ul className="space-y-3">
                {section.links.map(link => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-600 transition-colors hover:text-gray-900"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
          <p>All rights reserved@jadoo.co</p>
        </div>
      </Container>
    </footer>
  );
}
