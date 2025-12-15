import AboutMe from '@/components/developer/AboutMe';
import DevHero from '@/components/developer/DevHero';
import Footer from '@/components/Footer';
import MyProjects from '@/components/developer/MyProjects';
import ScrollToTopBtn from '@/components/ScrollToTopBtn';

export default function Developer() {
  return (
    <div className="bg-darker text-lighter min-h-screen">
      <ScrollToTopBtn />

      <section id='chicken' className="snap-center">
        <DevHero />
      </section>

      <section id="about-me" className="snap-center">
        <AboutMe />
      </section>

      <section id="my-projects">
        <MyProjects />
      </section>

      <section className="snap-center">
        <Footer />
      </section>
    </div>
  );
}
