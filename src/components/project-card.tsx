import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

interface ProjectCardProps {
  project: {
    title: string;
    image: string;
    description: string;
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
      <div className="bg-white p-4 dark:bg-gray-900">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{project.description}</p>
        {/* <div className="flex gap-2 mt-4">
          <Button>
            Live Demo
          </Button>
          <Button>
            Github
          </Button>
        </div> */}
      </div>
    </div>
  )
}
