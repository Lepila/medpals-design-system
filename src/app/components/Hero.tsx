import { Badge } from './Badge';
import { Button } from './Button';

export function Hero() {
  return (
    <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="text-center space-y-6 max-w-4xl mx-auto px-4">
        <Badge variant="primary" className="text-sm">Professional Design System v1.0</Badge>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          MedPals Brand Guidelines
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          A professional, accessible design system built for medical and healthcare
          applications. Mobile-first with soft rounded shapes and optimal readability.
        </p>

        <div className="flex flex-wrap gap-4 justify-center pt-4">
          <Button variant="primary" size="lg">
            Get Started
          </Button>
          <Button variant="outline" size="lg">
            View Components
          </Button>
        </div>

        {/* Feature Pills */}
        <div className="flex flex-wrap gap-3 justify-center pt-6">
          <Badge variant="outline">Brand Colors</Badge>
          <Badge variant="outline">Mobile First</Badge>
          <Badge variant="outline">WCAG AA</Badge>
          <Badge variant="outline">Readable</Badge>
          <Badge variant="outline">Accessible</Badge>
        </div>
      </div>
    </section>
  );
}
