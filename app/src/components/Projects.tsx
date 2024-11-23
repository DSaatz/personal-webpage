'use client'

import { useState } from 'react'
import ProjectCard from './ProjectCard'

const projects = [
  {
    id: 1,
    title: 'Restaurant Rating App',
    description: 'A web application that allows users to find and review restaurants. Build around the idea of using geo-data and recommendations to find the best nearby restaurants.',
    image: '/RR_App_Preview.png', 
    link: 'https://github.com/DSaatz/RR-App', 
  },
  {
    id: 2,
    title: 'Quiz App',
    description: 'An Android applications that allows to take and create quizzes. Designed with employee training in mind.',
    image: '/Quiz_App_Preview.png', // Find an image that scales better
    link: 'https://youtu.be/AxhuhPA-mcY', 
  },
  {
    id: 3,
    title: 'Contributions to Open Source',
    description: 'I am currently as a part of a lab-course involved in adding features to the HaNS IntelliJ plugin. This plugin serves as a tool to map code to abstract features via annotations and improve readibilty of feature driven development codebases.',
    image: '/HaNS_Preview.png', 
    link: 'https://github.com/isselab/HAnS',
  },
];


export default function Projects() {
  const [activeProject, setActiveProject] = useState<number | null>(null)

  return (
    <section id="projects" className="py-20 px-4">
      <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            isActive={activeProject === project.id}
            onMouseEnter={() => setActiveProject(project.id)}
            onMouseLeave={() => setActiveProject(null)}
          />
        ))}
      </div>
    </section>
  )
}

