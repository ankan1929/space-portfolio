import{ ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Sid Cup Family Golf Landing Page Clone",
        description: "A clone of the Sid Cup Family Golf landing page, built with HTML, CSS, JavaScript and animation with GSAP.",
        image: "/projects/project-1.png",
        tags: ["HTML", "JavaScript", "CSS", "GSAP"],
        demoUrl: "https://ankan1929.github.io/The-Sidcup-FamilyGolf/",
        githubUrl: "https://github.com/ankan1929/The-Sidcup-FamilyGolf",
    },

    {
        id: 2,
        title: "DUO Studios Landing Page Clone",
        description: "A clone of the DUO Studios landing page, built with HTML, CSS, JavaScript and animation with GSAP.",
        image: "/projects/project-2.png",
        tags: ["HTML", "JavaScript", "CSS", "GSAP"],
        demoUrl: "https://github.com/ankan1929",
        githubUrl: "https://github.com/ankan1929",
    },

    {
        id: 3,
        title: "Taaza Khabar",
        description: "A news aggregation website that provides the latest news from various sources. The API used is NewsData.io.",
        image: "/projects/project-3.png",
        tags: ["HTML", "CSS", "JavaScript"],
        demoUrl: "https://ankan1929.github.io/News-Teller/",
        githubUrl: "https://github.com/ankan1929/News-Teller",
    },

    {
        id: 4,
        title: "Memory Matching Game",
        description: "A memory matching game built with HTML, CSS, and JavaScript.",
        image: "/projects/project-4.png",
        tags: ["HTML", "CSS", "JavaScript"],
        demoUrl: "https://ankan1929.github.io/Memory-Matching-Game/",
        githubUrl: "https://github.com/ankan1929/Memory-Matching-Game",
    },

    {
        id: 5,
        title: "Fruit Slice Game",
        description: "A fun fruit slice game built with HTML, CSS, and JavaScript.",
        image: "/projects/project-5.png",
        tags: ["HTML", "CSS", "JavaScript"],
        demoUrl: "https://ankan1929.github.io/Fruit-Slice-Game/",
        githubUrl: "https://github.com/ankan1929/Fruit-Slice-Game",
    },

    {
        id: 6,
        title: "Rock Paper Scissors Game",
        description: "A simple rock paper scissors game built with HTML, CSS, and JavaScript.",
        image: "/projects/project-6.png",
        tags: ["HTML", "CSS", "JavaScript"],
        demoUrl: "https://ankan1929.github.io/Rock-Paper-Scissors-Game/",
        githubUrl: "https://github.com/ankan1929/Rock-Paper-Scissors-Game",
    },
]


export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> 
                    {""} Featured <span className="text-primary"> Projects </span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 mx-w-2xl mx-auto">Here are some of my recent projects below. Each project was carefully crafted with attention to detail, performance, and user experience.</p>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, key) => (
                            <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                                <div className="h-48 overflow-hidden">
                                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>  
                                </div>

                                <div className="p-6">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map((tag) => (
                                            <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">{tag}</span>
                                        ))}
                                    </div>
                                
                                    <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                                    <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                                    <div className="flex justify-between items-center">
                                        <div className="flex space-x-3">
                                            <a href={project.demoUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300"> <ExternalLink size={20}/> </a>
                                            <a href={project.githubUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300"> <Github size={20}/> </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>

                <div className="text-center mt-12">
                    <a href="https://github.com/ankan1929" target="_blank" className="cosmic-button w-fit flex items-center mx-auto gap-2">
                        Check out my GitHub <ArrowRight size={16}/> 
                    </a>
                </div>
            </div>
        </section>
    )
}