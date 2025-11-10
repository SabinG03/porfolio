import { Card } from "@/components/ui/card";
import { Code2, Database, Globe, Smartphone } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Programming Languages",
    items: ["Java", "JavaScript", "HTML & CSS",  "React", "SQL", "C++", "CAD"]
  },
  {
    icon: Globe,
    title: "Web Development",
    items: ["MERN Stack", "RESTful APIs", "MongoDB", "Authentication", "Web Design", "Role Based Access"]
  },

  {
    icon: Smartphone,
    title: "Operating Systems & Tools",
    items: ["Windows", "MacOS", "Linux", "Docker", "Git"]
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            About Me
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto text-lg">
            Fourth-year Computer Science & Software Engineering student at Maynooth University 
            with a passion for coding and web design. Highly adaptable, hard-working, and skilled 
            at working under pressure. Possesses excellent organizational and communication skills 
            gained from diverse work experiences and an active lifestyle.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <Card 
                key={index}
                className="p-6 bg-gradient-card shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-1"
              >
                <skill.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-4">{skill.title}</h3>
                <ul className="space-y-2">
                  {skill.items.map((item, i) => (
                    <li key={i} className="text-muted-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
