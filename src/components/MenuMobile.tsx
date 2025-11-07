import { useNavigation } from "@/hooks/useData";
import Button from "@/components/Button";
import { useState } from "react";

export default function MenuMobile() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigation = useNavigation();

  const handleToggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const defaultStyles = `h-0.5 w-5 my-[2px] rounded-full transition ease transform duration-200 bg-orange`;

  return (
    <>
      <button
        className="border-orange outline-offset-3 group absolute right-5 top-0 z-40 flex size-10 shrink-0 flex-col items-center justify-center rounded border-2 bg-transparent"
        onClick={handleToggleMenu}
      >
        <div
          className={`${defaultStyles} ${
            isMobileMenuOpen ? "translate-y-1.5 rotate-45" : null
          }`}
        />
        <div
          className={`${defaultStyles} ${
            isMobileMenuOpen ? "opacity-0" : null
          }`}
        />
        <div
          className={`${defaultStyles} ${
            isMobileMenuOpen ? "-translate-y-1.5 -rotate-45" : null
          }`}
        />
      </button>

      <div
        className={`py-26 fixed inset-0 z-30 flex h-svh w-full flex-col items-center justify-center gap-4 bg-white text-lg transition-opacity duration-300 ease-in-out lg:hidden ${
          isMobileMenuOpen ? "animate-fade-in" : "animate-fade-out"
        }`}
      >
        <nav>
          <ul className="flex flex-col gap-4 font-medium xl:gap-8">
            {navigation.main.map(item => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className="text-text-dark hover:text-orange flex h-10 items-center justify-center px-3 leading-tight transition-colors md:rounded-md md:px-4"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {navigation.buttons.login && (
          <Button
            className=""
            variant="login"
            size="md"
            href={navigation.buttons.login.href}
          >
            {navigation.buttons.login.text}
          </Button>
        )}

        {navigation.buttons.signUp && (
          <Button
            className=""
            variant="signUp"
            size="md"
            href={navigation.buttons.signUp.href}
          >
            {navigation.buttons.signUp.text}
          </Button>
        )}

        <select name="language" className="" id="">
          {navigation.languages.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
