import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const skills = {
  Languages: [
    'TypeScript',
    'JavaScript',
    'Golang',
    'Rust',
    'Python',
    'Java',
    'HTML/CSS',
    'SQL',
  ],
  Frameworks: [
    'Angular',
    'React',
    'Vue',
    'Spring',
    'Flask',
    'Node',
    'Express',
    'Tokio',
  ],
  Technologies: [
    'PWAs',
    'SPAs',
    'WebRTC',
    'WebGPU',
    'WASM',
    'Kubernetes',
    'Docker',
    'Azure',
    'AWS',
    'Terraform',
  ],
};

export function Skills() {
  return (
    <section className="py-16 bg-muted/50" id="skills">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Technical Skills</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skills).map(([category, items]) => (
            <Card key={category}>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}