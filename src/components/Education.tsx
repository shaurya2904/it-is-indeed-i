import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export function Education() {
  return (
    <section className="py-16" id="education">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Education</h2>
        <Card>
          <CardHeader>
            <CardTitle>
              Bachelor of Technology in Electronics and Communication Engineering
            </CardTitle>
            <CardDescription>
              Vellore Institute of Technology, Vellore | 2015 – 2019
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">CGPA: 8.15/10.00</p>
            <h4 className="font-semibold mb-2">Key Courses:</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li>Introduction to Programming</li>
              <li>Data Structure and Algorithms</li>
              <li>Network Systems</li>
              <li>Computer Architecture</li>
              <li>Stochastic Processes</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}