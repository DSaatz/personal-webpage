import Image from 'next/image'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>
      <div className="z-10 text-center">
        <Image
          src="/placeholder.svg"
          alt="Dominik Saatz"
          width={150}
          height={150}
          className="rounded-full mx-auto mb-8"
        />
        <h1 className="text-5xl font-bold mb-4">Dominik Saatz</h1>
        <p className="text-xl mb-8">Student in Computer Science & Software Developers</p>
        <a
          href="#projects"
          className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
        >
          View My Projects
        </a>
      </div>
    </section>
  )
}

