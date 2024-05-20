import { ProjectsSection } from "@/components/porjects-section";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen pt-20">
      <div className="landing pt-32">
        <h1 className="flex flex-col gap-2 items-center justify-center h-full text-center text-white font-bold text-shadow-lg">
          <span className="text-6xl text-primary">Eslam Khalaf</span>
          <span className="text-xl w-1/2">
            I&apos;m a full-stack developer I love building things, learning new technologies, and sharing knowledge.
          </span>
          <Button variant="outline" className="border-primary text-primary text-2xl capitalize mt-8">
            Get in touch
          </Button>
        </h1>
      </div>
      <div className="container">
        <ProjectsSection />
      </div>
    </main>
  );
}
