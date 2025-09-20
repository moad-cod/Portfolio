import { Code, User, Briefcase } from "lucide-react"


export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="heading-lavender">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold">Passionate Web & Full Stack Developer</h3>
            <p className="text-muted-foreground">
              I am a dedicated web developer with a passion for building engaging, responsive, and user-friendly web applications. 
            </p>
            <p className="text-muted-foreground">
              I have a solid foundation in HTML, CSS, JavaScript, and modern frameworks, and I enjoy turning ideas into interactive, high-quality digital experience
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contacts" className="cosmic-button">
                Get In Touch
              </a>
              <a 
                href="/Mouad_CV.pdf"
                download="Mouad_CV.pdf"
                className="px-6 py-2 rounded-full border-primary heading-lavender hover:bg-primary/10 transition-colors duration-300">
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Code className="h-6 w-6 heading-lavender" />
                  </div>
                  <div className="text-left">
                    <h4 className="text-semibold text-lg">Software Development</h4>
                    <p className="text-muted-foreground">
                      I specialize in developing robust web applications using modern frameworks and technologies, ensuring seamless user experiences and maintainable code.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <User className="h-6 w-6 heading-lavender" />
                  </div>
                  <div className="text-left">
                    <h4 className="text-semibold text-lg">Full Stack Developer</h4>
                    <p className="text-muted-foreground">
                      I design, develop, and maintain end-to-end web applications, working with both frontend and backend technologies to deliver complete solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Briefcase className="h-6 w-6 heading-lavender" />
                  </div>
                  <div className="text-left">
                    <h4 className="text-semibold text-lg">Project Management</h4>
                    <p className="text-muted-foreground">
                      I lead projects efficiently, collaborating with cross-functional teams to achieve project goals on time and maintain high-quality standards.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}