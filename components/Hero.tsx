import { ArrowRight } from "lucide-react"

const Hero = () => {
  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Khine Khant</h1>
        <p className="text-xl md:text-2xl mb-8">Full Stack Web Developer</p>
        <a
          href="#contact"
          className="bg-black hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-flex items-center"
        >
          Get in touch <ArrowRight className="ml-2" />
        </a>
      </div>
    </section>
  )
}

export default Hero

