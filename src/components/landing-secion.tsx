import Link from "next/link"
import SocialLinks from "./social-links"
import { Button } from "./ui/button"

const LandingSection = () => {
  return (
    <div id="landing" className="min-h-[90vh] landing flex flex-col justify-center items-center" style={{
      backgroundImage: "url('/assets/imgs/hero.webp')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      // fixed on scroll
      backgroundAttachment: "fixed",
    }}>
      <div className="flex flex-col gap-2 items-center justify-center text-center text-foreground font-bold text-shadow-lg bg-black w-full min-h-[90vh] bg-opacity-35">
        <h1 className="text-6xl mb-8 text-primary">Eslam Khalaf</h1>
        <span className="text-2xl w-1/2 leading-9 font-light">
          I&apos;m a full-stack developer I love building things, learning new technologies, and sharing knowledge.
        </span>
        <div className="flex items-center gap-4 mt-8">
          <a href="https://drive.google.com/file/d/1BMENgZ5YoSNH5rg1S885mav44cJmTPw9/view?usp=sharing" target="_blank">
            <Button variant="outline" className="text-2xl border-primary text-primary">
              Get My CV
            </Button>
          </a>
          <Link href="#contact">
            <Button variant="outline" className="border-primary text-primary text-2xl">
              Get in touch
            </Button>
          </Link>
        </div>
        <div>
          <SocialLinks />
        </div>
      </div>
    </div>
  )
}

export default LandingSection