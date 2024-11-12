import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function Experience() {
  return (
    <section className="py-16" id="experience">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Experience</h2>
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Associate / Software Development Engineer-III</CardTitle>
              <CardDescription>
                BlackRock, Gurgaon | Sept 2022 – Present
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Led development of Web UI using Angular and ETL pipelines in Python Spark</li>
                <li>Implementation of Web Accessibility WCAG Level AA standards</li>
                <li>Upgraded application to latest Angular 18 with signal-based state management</li>
                <li>Led refactoring effort for Web API developing granular REST APIs</li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <Badge>Angular</Badge>
                <Badge>TypeScript</Badge>
                <Badge>Python</Badge>
                <Badge>Java</Badge>
                <Badge>Azure</Badge>
                <Badge>Docker</Badge>
                <Badge>Kubernetes</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Software Developer</CardTitle>
              <CardDescription>
                ION Group, Noida | June 2019 – Aug 2022
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Primary contributor to design system and ION 2.0 platform SDK</li>
                <li>Created accessibility testing Jenkins add-on</li>
                <li>Designed and implemented application-wide state store</li>
                <li>Improved core services and subsystems performance</li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <Badge>TypeScript</Badge>
                <Badge>Angular</Badge>
                <Badge>C#</Badge>
                <Badge>Java</Badge>
                <Badge>MSSQL</Badge>
                <Badge>Jenkins</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}