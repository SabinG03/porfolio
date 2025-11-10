import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Github } from "lucide-react";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";
import project21 from "@/assets/project21.jpg";
import project22 from "@/assets/project22.jpg";
import project31 from "@/assets/project31.jpg";
import project32 from "@/assets/project32.jpg";
import project33 from "@/assets/project33.jpg";

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  detailedDescription?: string;
  screenshots?: string[];
};

const projects: Project[] = [
  {
    title: "FYP AI Fitness and Nutritional Assistant - Early 2026 ",
    description: "A full-stack MERN-based mobile application that combines fitness tracking, nutrition management, and AI-driven personalization. The app will include meal scanning, AI chatbot support, dynamic workout adjustments, and a community section for user interaction. This final year project aims to deliver a robust MVP by early 2026, showcasing advanced skills in mobile development, cloud integration, and AI-enhanced user experiences.",
    image: project1,
    tags: ["MERN", "React", "MongoDB", "AI", "Mobile Development", "RESTful APIs"],
    github: "https://github.com/SabinG03",
    detailedDescription: "A mobile application built with the MERN stack that combines fitness tracking, nutrition management, and AI-driven personalization. The app features secure user authentication, meal and fitness tracking, AI-generated meal plans, and dynamic workout adjustments based on user performance. It also includes a food scanning feature, an AI chatbot for personalized guidance, and a community section for posts, group discussions, and real-time messaging. This project showcases expertise in mobile development, cloud integration, database design, and RESTful API architecture, emphasizing a seamless and user-centric experience.",
  },
  {
    title: "AI Nutritional Coach - Group Project",
    description: "A group project developed in an Agile environment that integrates an LLM on Groq to provide personalized food ideas and macro recommendations, featuring CRUD operations and real-time database functionality using Firebase.",
    image: project2,
    tags: ["Firebase", "Groq", "LLM", "Docker", "Group Project"],
    github: "https://github.com/SabinG03",
    detailedDescription: "In a group-based Agile project, I contributed to both the frontend and backend development of an AI Nutritional Coach application that trained and hosted a LLM on Groq. I implemented CRUD functionality for managing customer info and used Firebase for real time database operations and authentication. Working closely with my team I helped ensure clean and efficient frontend based on the teams needs.  This project strengthened my skills in full-stack development, team collaboration, and LLM-driven application design.",
    screenshots: [project21, project22] // Replace with actual screenshots
  },
  {
    title: "DATT - Driving AI Theory Test",
    description: "Bilingual Ireland driving theory test app with English and Romanian DTT style questions. Features realistic theory exam simulator with scoring, timing, and feedback, AI-generated map routes, and an AI driving instructor chatbot. ",
    image: project3,
    tags: ["React", "AI", "JavaScript", "Mobile Development", "Individual Project"],
    github: "https://github.com/SabinG03",
    detailedDescription: "A personal project - a bilingual Ireland driving theory test application supporting both English and Romanian languages with DTT style questions. The app includes a realistic theory exam simulator complete with scoring, timing, and detailed feedback. I integrated AI-generated map routes to simulate mock driving tests and created an AI driving instructor chatbot for guidance and learning support. Additional features include question categories, progress tracking, and performance analytics.",
    screenshots: [project31, project32,  project33]
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedScreenshot, setSelectedScreenshot] = useState<string | null>(null);

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto text-lg">
            A selection of projects that showcase my skills and experience in software development.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="overflow-hidden shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-2 bg-gradient-card cursor-pointer flex flex-col h-full"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <CardHeader className="flex-1">
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardFooter className="flex flex-wrap gap-2 pt-4 mt-auto">
                    {project.tags.map((tag, i) => (
                      <Badge key={i} variant="secondary">{tag}</Badge>
                    ))}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">{selectedProject.title}</DialogTitle>
                <DialogDescription className="text-base pt-2">
                  {selectedProject.detailedDescription || selectedProject.description}
                </DialogDescription>
              </DialogHeader>
              
              {selectedProject.screenshots && selectedProject.screenshots.length > 0 && (
                <div className="mt-4">
                  <h3 className="text-lg font-semibold mb-3">Screenshots</h3>
                  {selectedProject.title.includes("DATT") ? (
                    <div className="grid grid-cols-3 gap-4">
                      {selectedProject.screenshots.map((screenshot, idx) => (
                        <div 
                          key={idx} 
                          className="relative rounded-lg overflow-hidden border aspect-[9/16] cursor-pointer hover:opacity-80 transition-opacity"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedScreenshot(screenshot);
                          }}
                        >
                          <img 
                            src={screenshot} 
                            alt={`${selectedProject.title} screenshot ${idx + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedProject.screenshots.map((screenshot, idx) => (
                        <div 
                          key={idx} 
                          className="relative rounded-lg overflow-hidden border cursor-pointer hover:opacity-80 transition-opacity"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedScreenshot(screenshot);
                          }}
                        >
                          <img 
                            src={screenshot} 
                            alt={`${selectedProject.title} screenshot ${idx + 1}`}
                            className="w-full h-auto object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              <div className="mt-6">
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Dialog open={!!selectedScreenshot} onOpenChange={(open) => !open && setSelectedScreenshot(null)}>
        <DialogContent className="max-w-fit max-h-[95vh] p-2">
          {selectedScreenshot && (
            <div className="relative flex items-center justify-center">
              <img 
                src={selectedScreenshot} 
                alt="Full size screenshot"
                className="max-w-[95vw] max-h-[90vh] w-auto h-auto object-contain rounded-lg"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
