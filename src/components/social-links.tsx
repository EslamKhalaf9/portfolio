import { GithubIcon, Linkedin, LinkedinIcon, X } from "lucide-react"

const socialLinks = [
  {
    name: "Linkedin",
    icon: <LinkedinIcon />,
    url: "https://www.linkedin.com/in/eslam-khalaf/"
  },
  {
    name: "Github",
    icon: <GithubIcon />,
    url: "https://github.com/eslamkhalaf9"
  },
  {
    name: "Twitter",
    icon: <X />,
    url: "https://twitter.com/eslamkhalaf20"
  },
]


const SocialLinks = () => {
  return (
    <div className="social-links flex justify-start gap-2 my-8 w-full">
      {
        socialLinks.map(link => (
          <div key={link.name} className="link w-10">
            <a href={link.url} target="_blank">
              {link.icon}
            </a>
          </div>
        ))
      }
    </div>
  )
}

export default SocialLinks