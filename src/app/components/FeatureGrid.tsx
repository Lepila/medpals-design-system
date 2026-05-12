import { Card } from './Card';

export function FeatureGrid() {
  const features = [
    {
      title: 'Professional Colors',
      description: 'Denim blue, teal, and soft accents create a trustworthy medical brand',
      gradient: 'from-primary to-secondary',
    },
    {
      title: 'Mobile Optimized',
      description: 'Touch-friendly with 44px+ tap targets and responsive layouts',
      gradient: 'from-secondary to-accent',
    },
    {
      title: 'WCAG AA Compliant',
      description: 'All color combinations meet accessibility contrast standards',
      gradient: 'from-accent to-primary',
    },
    {
      title: 'Readable Typography',
      description: 'Manrope and Rubik fonts optimized for clarity at all sizes',
      gradient: 'from-primary to-accent',
    },
    {
      title: 'Soft Rounded Shapes',
      description: 'Gentle 20px radius creates an approachable, friendly interface',
      gradient: 'from-secondary to-primary',
    },
    {
      title: 'Modern Stack',
      description: 'Built with React, Tailwind CSS, and best practices',
      gradient: 'from-accent to-secondary',
    },
  ];

  return (
    <section className="space-y-6">
      <div className="text-center space-y-2">
        <h2>Why This System?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Designed specifically for healthcare applications with trust and clarity
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="group hover:shadow-xl transition-all duration-300">
            <div className="space-y-3">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} shadow-lg`} />
              <h3 className="group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
