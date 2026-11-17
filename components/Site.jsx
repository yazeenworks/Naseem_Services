import Header from "./Header";
import Hero from "./Hero";
import Services from "./Services";
import Approach from "./Approach";
import Process from "./Process";
import FAQ from "./FAQ";
import Contact from "./Contact";
import Footer from "./Footer";
export default function Site() {
  return (
    <>
      <Header />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Services />
        <Approach />
        <Process />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
