import { Github, Linkedin } from 'lucide-react'

export default function SocialLinks() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Connect With Me</h2>
        <div className="flex justify-center space-x-4">
          <a
            href="https://www.linkedin.com/in/dominik-saatz/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
          >
            <Linkedin className="w-6 h-6 mr-2" />
            LinkedIn
          </a>
          <a
            href="https://github.com/dsaatz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
          >
            <Github className="w-6 h-6 mr-2" />
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

