import Logo from "@/components/Logo";
import Container from "@/components/Container";
import MenuMobile from "@/components/MenuMobile";
import useMediaQuery from "../hooks/useMediaQuery";
import MenuDesktop from "./MenuDesktop";
import { useEffect, useState } from "react";

export default function Header() {
  const [isHeaderSticky, setIsHeaderSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", checkSticky);
    return () => {
      window.removeEventListener("scroll", checkSticky);
    };
  }, []);

  function checkSticky() {
    const scrollTop = window.scrollY;
    if (scrollTop >= 1) {
      setIsHeaderSticky(true);
    } else {
      setIsHeaderSticky(false);
    }
  }

  return (
    <header
      className={`fixed left-0 top-0 z-50 flex w-full ${isHeaderSticky ? "bg-white py-4 shadow-md lg:py-6" : "bg-transparent py-8 lg:py-12"} transition-all duration-300 ease-in-out`}
    >
      <Container
        className="relative flex items-center justify-between"
        variant="header"
      >
        <Logo className="my-[3px] flex h-[34px] min-w-[115px]" />

        {useMediaQuery("(width < 1024px)") ? <MenuMobile /> : <MenuDesktop />}
      </Container>
    </header>
  );
}
