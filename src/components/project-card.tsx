import Image from "next/image";
import { Button } from "./ui/button";

interface ProjectCardProps {
  project: {
    title: string;
    image: string;
    description: string;
    url: string;
    preview: boolean;
    github?: string;
  }
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="overflow-hidden rounded-lg shadow-lg">
      <Image
        alt={project.title}
        className="h-48 w-full object-cover"
        height="200"
        src={project.image}
        style={{
          aspectRatio: "300/200",
          objectFit: "cover",
        }}
        width="300"
      />
      <div className="bg-white p-4 dark:bg-gray-900 h-[180px] flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold">{project.title}</h3>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 capitalize">{project.description}</p>
        </div>
        <div className="actions">
          {
            project.preview && (
              <a target="_blank" href={project.url}>
                <Button className="mt-4">
                  Visit
                </Button>
              </a>
            )
          }
          {
            project.github && (
              <a target="_blank" href={project.github}>
                <Button className="mt-4">
                  Github
                </Button>
              </a>
            )
          }
        </div>
      </div>
    </div>
  )
}
