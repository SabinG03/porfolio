import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto text-lg">
            I'm always open to discussing new projects, opportunities, or just having a chat about tech!
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <Card className="p-8 shadow-soft">
                <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div className="min-w-0 flex-1">
                    <h3 className="font-semibold mb-1">Email</h3>
                  <a href="mailto:SABIN.GHET.2023@mumail.ie" className="text-muted-foreground hover:text-primary transition-colors break-words">
                    SABIN.GHET.2023@mumail.ie
                    </a>
                  </div>
                </div>
              </Card>
              
            <Card className="p-8 shadow-soft">
                <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <a href="tel:" className="text-muted-foreground hover:text-primary transition-colors break-words">
                    +353 83 119 1177
                  </a>
                  </div>
                </div>
              </Card>
              
            <Card className="p-8 shadow-soft">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p className="text-muted-foreground break-words">Castleknock, Dublin</p>
                </div>
              </div>
            </Card>
          </div>
          
          <div className="flex gap-4 justify-center mt-12">
                <Button variant="outline" size="icon" asChild>
              <a href="https://github.com/SabinG03" target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
              <a href="https://www.linkedin.com/in/sabin-ghet/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
