import Image from 'next/image'

interface Project {
  id: number
  title: string
  description: string
  image: string
  link: string
}

interface ProjectCardProps {
  project: Project
  isActive: boolean
  onMouseEnter: () => void
  onMouseLeave: () => void
}

export default function ProjectCard({ project, isActive, onMouseEnter, onMouseLeave }: ProjectCardProps) {
  return (
    <div
      className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Image src={project.image} alt={project.title} width={400} height={300} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className={`text-gray-600 mb-4 transition-all duration-300 ${isActive ? 'h-auto opacity-100' : 'h-0 opacity-0'}`}>
          {project.description}
        </p>
        <a
          href={project.link}
          className="inline-block bg-gray-900 text-white px-4 py-2 rounded-full font-semibold hover:bg-gray-800 transition-colors duration-300"
        >
          Learn More
        </a>
      </div>
    </div>
  )
}

