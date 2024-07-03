import Image from 'next/image'
import avatar from '../../public/assets/imgs/avatar.png'
import { Button } from './ui/button'
import SocialLinks from './social-links'

const AboutMeSection = () => {
  return (
    <section id="about" className="min-h-[90vh] flex flex-col justify-center items-center border-y border-primary">
      <div className="container grid md:grid-cols-2 gap-12 justify-between py-32">
        <div className=" flex flex-col justify-center items-start">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-gray-600 dark:text-gray-400">
            I am a Full Stack Developer with a passion for creating beautiful and functional websites. I have
            experience in both front-end and back-end development, and I love working with new technologies
            to build innovative solutions. I am always looking for new challenges and opportunities to grow
            as a developer.
          </p>
          <p className="text-gray-600 dark:text-gray-400 mt-4">
            <a href="https://drive.google.com/file/d/1BMENgZ5YoSNH5rg1S885mav44cJmTPw9/view?usp=sharing" target="_blank">
              <Button variant="outline" className="text-2xl border-primary text-primary">
                Get My CV
              </Button>
            </a>
          </p>
          <SocialLinks />
        </div>
        <div className="flex justify-end">
          <Image src={avatar} alt="avatar" />
        </div>
      </div>
    </section>
  )
}

export default AboutMeSection