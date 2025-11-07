import { useNavigation } from "@/hooks/useData";
import Button from "@/components/Button";

export default function MenuDesktop() {
  const navigation = useNavigation();
  return (
    <>
      <div className="gap-4 lg:flex xl:gap-8">
        <nav>
          <ul className="flex gap-4 text-[17px] font-medium xl:gap-8">
            {navigation.main.map(item => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className="text-text-dark hover:text-orange flex h-10 items-center px-3 leading-tight transition-colors md:rounded-md md:px-4"
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
            size="sm"
            href={navigation.buttons.login.href}
          >
            {navigation.buttons.login.text}
          </Button>
        )}

        {navigation.buttons.signUp && (
          <Button
            className=""
            variant="signUp"
            size="sm"
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
