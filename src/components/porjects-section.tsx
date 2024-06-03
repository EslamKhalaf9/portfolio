import { url } from "inspector"
import ProjectCard from "./project-card"
import { Button } from "./ui/button"

export function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "Genesis Createions S.A.E Website",
      image: "/assets/imgs/gc-landing.png",
      description: "New Genesis Creations website with a new design and new features.",
      url: "https://www.genesiscreations.co",
      preview: true,
    },
    {
      id: 3,
      title: "Sinai heroes Website",
      image: "/assets/imgs/sinai-landing.png",
      description: "website for Sinai heroes FPS game.",
      url: "https://www.sinaiheroes.com",
      preview: true,
    },
    {
      id: 2,
      title: "Mazloum Website",
      image: "/assets/imgs/mazloum-landing.png",
      description: "ecommerce website for Mazloum tiles.",
      url: "https://www.genesiscreations.co",
      preview: false,
    },
  ]


  return (
    <section id="projects" className="min-h-[90vh] py-8 flex flex-col justify-center items-center border-y border-primary bg-neutral-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-8 text-center">
          <h2 className="text-4xl font-bold tracking-tight sm:text-4xl md:text-6xl md:font-light">My Work</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">Here are some of my projects</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        {
          projects.length > 3 && (
            <div className="mt-8 text-right">
              <a href="/projects" className="text-primary hover:text-primary-600 transition-colors">
                <Button>
                  View More Projects
                </Button>
              </a>
            </div>
          )
        }
      </div>
    </section>
  )
}
