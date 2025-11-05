import Logo from "@/components/Logo";

export default function Header() {
  return (
    <header className="flex static top-0 left-0 w-full py-12">
      <div className="px-8 max-w-[1240px] w-full mx-auto flex justify-between items-center">
        <Logo className="w-[115px] h-[34px] my-[3px]" />

        <div className="flex">
          <nav>
            <ul className="text-[17px] font-medium flex gap-8">
              <li>
                <a href="" className="px-2 flex items-center h-10">
                  Destinations
                </a>
              </li>
            </ul>
          </nav>
          <a href="" className="">
            Sign Up
          </a>
          <select name="language" id="">
            <option value="en">EN</option>
            <option value="es">ES</option>
            <option value="fr">FR</option>
          </select>
        </div>
      </div>
    </header>
  );
}
