import AboutMeSection from "@/components/about-me-section";
import ContactSection from "@/components/contact-section";
import LandingSection from "@/components/landing-secion";
import { ProjectsSection } from "@/components/porjects-section";

export default function Home() {
  return (
    <main>
      <LandingSection />
      <AboutMeSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
