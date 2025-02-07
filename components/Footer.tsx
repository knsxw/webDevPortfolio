import { Github, Linkedin, Twitter } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2025 Khine Khant. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="https://github.com/knsxw" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <Github />
            </a>
            <a href="https://www.linkedin.com/in/khine-khant-1571xyz/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <Linkedin />
            </a>
            
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

