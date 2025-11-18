import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import Destinations from "@/components/Destinations";
import Booking from "@/components/Booking";
import Testimonials from "@/components/Testimonials";
import Companies from "@/components/Companies";
import Newsletter from "@/components/Newsletter";

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Services />
        <Destinations />
        <Booking />
        <Testimonials />
        <Companies />

        <Newsletter />
      </main>

      <Footer />
    </>
  );
}

export default App;
