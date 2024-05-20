import Image from "next/image"
import Link from "next/link"
import ProjectCard from "./project-card"

export function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "Project 1",
      image: "/placeholder.svg",
      description: "A brief description of the first project.",
    },
    {
      id: 2,
      title: "Project 2",
      image: "/placeholder.svg",
      description: "A brief description of the second project.",
    },
    {
      id: 3,
      title: "Project 3",
      image: "/placeholder.svg",
      description: "A brief description of the third project.",
    },
    {
      id: 4,
      title: "Project 4",
      image: "/placeholder.svg",
      description: "A brief description of the fourth project.",
    },
  ]


  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">My Projects</h2>
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
