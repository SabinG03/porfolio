import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Navigation = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [cvOpen, setCvOpen] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <a href="#" className="text-xl font-bold text-foreground">
              Sabin Ghet
            </a>
            
            <div className="flex items-center gap-6">
              <div className="hidden md:flex items-center gap-6">
                <a href="#about" className="text-foreground/80 hover:text-foreground transition-colors">
                  About
                </a>
                <a href="#projects" className="text-foreground/80 hover:text-foreground transition-colors">
                  Projects
                </a>
                <button 
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    setCvOpen(true);
                  }}
                  className="text-foreground/80 hover:text-foreground transition-colors"
                >
                  CV
                </button>
                <a href="#contact" className="text-foreground/80 hover:text-foreground transition-colors">
                  Contact
                </a>
              </div>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="rounded-full"
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
                <span className="sr-only">Toggle theme</span>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <Dialog open={cvOpen} onOpenChange={setCvOpen}>
      <DialogContent className="max-w-6xl max-h-[95vh] p-0">
        <div className="w-full h-[90vh]">
          <iframe
            src="/SABINGHETCV.pdf"
            className="w-full h-full border-0"
            title="CV"
          />
        </div>
      </DialogContent>
    </Dialog>
    </>
  );
};

export default Navigation;
