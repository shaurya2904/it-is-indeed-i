import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold">Shaurya Sisodia</h1>
        <div className="flex gap-4">
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://linkedin.com/in/shaurya-sisodia"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="mailto:shauryasisodia29@gmail.com">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}