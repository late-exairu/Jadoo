import Logo from "./Logo";

function App() {
  return (
    <>
      <header className="flex static top-0 left-0 w-full px-8 py-6 justify-between items-center">
        <Logo />

        <div className="flex">
          <nav>
            <ul className="text-[17px] font-medium flex gap-8">
              <li>
                <a href="">Destinations</a>
                <a href="">Hotels</a>
                <a href="">Flights</a>
                <a href="">Bookings</a>
                <a href="">Login</a>
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
      </header>

      <main>
        <section>
          <p className="">Best Destinations around the world</p>
          <p className="">Travel, enjoy and live a new and full life</p>
          <p className="">
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </p>

          <a href="" className="">
            Find out more
          </a>
        </section>
        <section></section>
        <section></section>
      </main>

      <footer className="flex mt-auto">
        <div className="">
          <div className="">Jadoo.</div>
          <p className="">
            Book your trip in minute, get full Control for much longer.
          </p>
        </div>

        <div className="flex gap-1">
          <div className="">
            <p className="">Company</p>
            <ul className="">
              <li className="">
                <a href="" className="">
                  About
                </a>
              </li>
              <li className="">
                <a href="" className="">
                  About
                </a>
              </li>
              <li className="">
                <a href="" className="">
                  About
                </a>
              </li>
            </ul>
          </div>

          <div className="">
            <p className="">Company</p>
            <ul className="">
              <li className="">
                <a href="" className="">
                  About
                </a>
              </li>
              <li className="">
                <a href="" className="">
                  About
                </a>
              </li>
              <li className="">
                <a href="" className="">
                  About
                </a>
              </li>
            </ul>
          </div>

          <div className="">
            <p className="">Company</p>
            <ul className="">
              <li className="">
                <a href="" className="">
                  About
                </a>
              </li>
              <li className="">
                <a href="" className="">
                  About
                </a>
              </li>
              <li className="">
                <a href="" className="">
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="">Discover our app</div>
      </footer>
    </>
  );
}

export default App;
