import { ScrollToTopBtn } from '@/components/ScrollToTopBtn';
import IntroBio from '@/components/IntroBio';
import TechStack from '@/components/TechStack';
import Projects from '@/components/ProjectGallery';
import Footer from '@/components/Footer';

export default function Developer() {
  return (
    <div className="bg-darker text-lighter min-h-screen">
      <ScrollToTopBtn />
      <div>
        <div id="intro" className="snap-center">
          <IntroBio />
        </div>
        <div id="skills" className="snap-center">
          <TechStack />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="footer" className="snap-center">
          <Footer />
        </div>
      </div>
    </div>
  );
}
