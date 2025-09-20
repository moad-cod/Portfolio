import { ArrowRight, ExternalLink, Github, Tags } from "lucide-react"


const projects = [
    {
        id: 1,
        title: "EMS",
        description: "Employee Management System (EMS) is a full-featured application designed to streamline HR processes, including employee data management",
        image: "/projects/project1.png",
        Tags: ["Spring", "Angular", "MySQL"],
        githubUrl: "#",
    },
    {
        id: 2,
        title: "BI-Foundation",
        description: "BI-Foundation is a comprehensive Business Intelligence platform that enables data-driven decision-making by integrating analytics, reporting, and visualization tools",
        image: "/projects/project2.png",
        Tags: ["NextJs", "React", "TailwindCss"],
        githubUrl: "https://github.com/moad-cod/BI-Foundation",
    },
    {
        id: 3,
        title: "Anime Website",
        description: "Anime Website is a dynamic platform for anime enthusiasts to explore, discover, and track their favorite shows. Built with Vite and React for high performance,",
        image: "/projects/project3.png",
        Tags: ["Vite", "React", "TailwindCss"],
        githubUrl: "https://github.com/moad-cod/Anime-Website",
    },
    
]



export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Featured <span className="heading-lavender"> Projects</span></h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto ">
                Here are a few projects I have worked on, showcasing my skills and experience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    projects.map((project, key) => (
                        <div 
                            key={key}
                            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                        >
                            <div className="h-48 overflow-hidden">
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover tansition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.Tags.map((tag, key) => (
                                        <span 
                                            key={key}
                                            className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            
                                <h3 className="text-3xl font-semibold mb-1">{project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                                
                                <div className="flex items-center ">
                                    <div className="flex space-x-3 ">
                                        <a 
                                            href={projects.githubUrl}
                                            target="_blank"
                                            className="text-foreground/80 hover:heading-lavender transition-colors duration-300"
                                        >
                                            <Github size={20}/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>

            <div className="text-center mt-12">
                    <a href="https://github.com/moad-cod" target="_blank" className="cosmic-button  w-fit flex items-center mx-auto gap-2">
                        Check My Github <ArrowRight size={20}/>
                    </a>
            </div>
        </div>
    </section>
  )
}

