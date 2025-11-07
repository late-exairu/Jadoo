import Logo from "@/components/Logo";
import Container from "@/components/Container";
import { useNavigation } from "@/hooks/useData";

export default function Header() {
  const navigation = useNavigation();
  return (
    <header className="fixed left-0 top-0 z-50 flex w-full py-12">
      <Container className="flex items-center justify-between">
        <Logo className="my-[3px] h-[34px] w-[115px]" />

        <div className="flex">
          <nav>
            <ul className="flex gap-8 text-[17px] font-medium">
              {navigation.main.map(item => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="text-text-dark hover:text-orange flex h-10 items-center px-2 leading-tight transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <a
            href=""
            className="text-text-dark hover:text-orange flex h-10 items-center px-2 transition-colors"
          >
            {navigation.buttons.signUp}
          </a>
          <select name="language" id="">
            {navigation.languages.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </Container>
    </header>
  );
}
