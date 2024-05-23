import ContactForm from "@/components/contact-form";
import { ProjectsSection } from "@/components/porjects-section";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="pt-20">
      <div className="min-h-screen landing flex flex-col justify-center items-center">
        <div className="flex flex-col gap-2 items-center justify-center text-center text-foreground font-bold text-shadow-lg">
          <h1 className="text-6xl mb-8 text-primary">Eslam Khalaf</h1>
          <span className="text-2xl w-1/2 leading-9 font-light">
            I&apos;m a full-stack developer I love building things, learning new technologies, and sharing knowledge.
          </span>
          <div className="flex items-center gap-4 mt-8">
            <Button variant="outline" className="text-2xl border-primary text-primary">
              My Work
            </Button>
            <Button variant="outline" className="border-primary text-primary text-2xl">
              Get in touch
            </Button>
          </div>
        </div>
      </div>
      <div className="min-h-screen flex flex-col justify-center items-center border-y border-primary bg-neutral-950">
        <div className="contianer">
          <ProjectsSection />
        </div>
      </div>
      <div className="min-h-screen flex flex-col justify-center items-center border-y border-primary">
        <div className="contianer">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
