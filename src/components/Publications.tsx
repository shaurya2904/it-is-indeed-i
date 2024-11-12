import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

export function Publications() {
  return (
    <section className="py-16 bg-muted/50" id="publications">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Publications</h2>
        <Card>
          <CardHeader>
            <CardTitle>
              Tagging of Weakly Labeled Acoustic Data Using Skip Layer Connection
              Detection Classification Model
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Audio tagging of weakly labelled acoustic scene. The final EER is
              0.7. Provided a faster training route and prevented over-fitting
              using skip layer connection.
            </p>
            <p className="mb-4">
              Published in SPRINGER's book Advances in Automation, Signal
              Processing, Instrumentation and Control.
            </p>
            <Button variant="outline" asChild>
              <a
                href="https://link.springer.com/chapter/10.1007/978-981-15-8221-9_5"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                View Publication
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}