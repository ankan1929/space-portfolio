import { Briefcase, Code, User } from "lucide-react";



export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative"> {""}
            <div className="container mx-auto max-w-6xl">      {/* i just make the max-w-5xl to 6xl to make it good */}
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="border-spacing-y-16">
                        <h3 className="text-2xl font-semibold mb-9">Web developer & tech enthusiast building sleek, responsive interfaces with creativity and clean code.</h3>
                        
                        <p className="text-muted-foreground mb-4">With experience in HTML, CSS, JavaScript, and modern frameworks, I bring ideas to life through innovative web solutions. Whether it's a personal project or a client collaboration, I strive to deliver high-quality work that exceeds expectations.</p>

                        <p className="text-muted-foreground">Let's work together to create something amazing! <br/> And I'm constantly learning and adapting to new technologies and techniques to stay ahead in the ever-evolving web development landscape.</p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button"> {""} Get In Touch</a>
                            <a href="../src/assets/Ankan_Resume.pdf" download className="px-6 py-2 flex items-center justify-center rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">Download CV</a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Web Development</h4>
                                    <p className="text-muted-foreground">Creating responsive and user-friendly websites using the latest technologies.</p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">UI/UX Design</h4>
                                    <p className="text-muted-foreground">Creating intuitive and engaging user experiences through thoughtful design.</p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Project Management</h4>
                                    <p className="text-muted-foreground">Overseeing projects from conception to completion, ensuring timely delivery and quality standards.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}