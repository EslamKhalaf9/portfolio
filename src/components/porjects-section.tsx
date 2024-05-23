import Image from "next/image"
import Link from "next/link"
import ProjectCard from "./project-card"

export function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "Genesis Createions S.A.E Website",
      image: "/assets/imgs/gc-landing.png",
      description: "website for Genesis Createions S.A.E company.",
    },
    {
      id: 2,
      title: "Mazloum Website",
      image: "/assets/imgs/mazloum-landing.png",
      description: "website for Mazloum company.",
    },
    {
      id: 3,
      title: "Sinai heroes Website",
      image: "/assets/imgs/sinai-landing.png",
      description: "website for Sinai heroes FPS game.",
    },
  ]


  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">My Work</h2>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">Here are some of my projects</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
