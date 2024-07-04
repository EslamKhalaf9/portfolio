import Link from "next/link";
import { ModeToggle } from "../mode-toggle";

export default function MainNavbar() {
  return (
    <nav className="border-b-4 border-primary bg-background fixed w-full">
      <div className="container h-[10vh] flex items-center md:justify-between justify-center justify-items-center">
        <h1 className="lg:text-3xl uppercase text-md md:block hidden">Eslam Khalaf</h1>
        <ul className="flex md:gap-6 gap-3">
          <li>
            <Link href="#landing" className=" hover:text-foreground transition-colors text-xl">Home</Link>
          </li>
          <li>
            <Link href="#about" className="text-foreground hover:text-primary transition-colors text-xl">About</Link>
          </li>
          <li>
            <Link href="#projects" className="text-foreground hover:text-primary transition-colors text-xl">Projects</Link>
          </li>
          <li>
            <Link href="#contact" className="text-foreground hover:text-primary transition-colors text-xl">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
