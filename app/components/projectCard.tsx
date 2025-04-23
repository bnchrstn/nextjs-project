type ProjectCardProps = {
    title: string
    description: string
    image: string
    link: string
  }
  
  export default function ProjectCard({ title, description, image, link }: ProjectCardProps) {
    return (
      <div className="border rounded-xl overflow-hidden shadow-lg">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="text-gray-600 mt-2">{description}</p>
          <a href={link} target="_blank" rel="noopener noreferrer" className="block mt-4 text-blue-600 font-medium">View Project</a>
        </div>
      </div>
    )
  }
  