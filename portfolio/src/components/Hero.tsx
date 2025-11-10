import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowDown, FileText } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import profileImage from "@/assets/profile.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15
        }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-hero opacity-90" />
      
      <div className="container relative z-10 px-4 py-20 mx-auto text-center">
        <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <img 
                src={profileImage} 
                alt="Sabin Ghet" 
                className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-primary-foreground/20 shadow-2xl ring-4 ring-primary/30"
              />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-4">
            Hi, I'm <span className="text-primary-glow">Sabin Ghet</span>
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8">
            Fourth-Year Computer Science Student | Full-Stack Developer | Web Designer
          </p>

          
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button variant="outline" size="lg" asChild className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20">
              <a href="#contact">Get In Touch</a>
            </Button>
            <Button variant="outline" size="lg" asChild className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20">
              <a href="/SABINGHETCV.pdf" download="SABINGHETCV.pdf">
                <FileText className="w-5 h-5 mr-2" />
                Download CV
              </a>
            </Button>
          </div>
          
          <div className="flex gap-6 justify-center mt-12">
            <a href="https://github.com/SabinG03" target="_blank" rel="noopener noreferrer" 
               className="text-primary-foreground/80 hover:text-primary-glow transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/sabin-ghet/" target="_blank" rel="noopener noreferrer"
               className="text-primary-foreground/80 hover:text-primary-glow transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:sabin.ghet@example.com"
               className="text-primary-foreground/80 hover:text-primary-glow transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-primary-foreground/60" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
