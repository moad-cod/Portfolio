import { ArrowRight, ExternalLink, Github, Tags } from "lucide-react"


const projects = [
    {
        id: 1,
        title: "Project 1",
        description: "Description of Project 1",
        image: "/public/projects/project1.png",
        Tags: ["Tag 1", "Tag 2", "Tag 3"],
        githubUrl: "#",
    },
    {
        id: 1,
        title: "Project 2",
        description: "Description of Project 2",
        image: "/public/projects/project2.png",
        Tags: ["Tag 1", "Tag 2", "Tag 3"],
        githubUrl: "#",
    },
    {
        id: 1,
        title: "Project 3",
        description: "Description of Project 3",
        image: "/public/projects/project3.png",
        Tags: ["Tag 1", "Tag 2", "Tag 3"],
        githubUrl: "#",
    },
    
]



export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Featured <span className="heading-lavender"> Projects</span></h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto ">
                These are some of the projects I have worked on.
                These are some of the projects I have worked on.
                These are some of the projects I have worked on.
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

