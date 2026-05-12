import { useState } from 'react';
import { Button } from './components/Button';
import { Card } from './components/Card';
import { Input } from './components/Input';
import { Badge } from './components/Badge';
import { Hero } from './components/Hero';
import { FeatureGrid } from './components/FeatureGrid';

export default function App() {
  const [activeTab, setActiveTab] = useState('showcase');
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  const copyHexCode = async (hex: string) => {
    await navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    window.setTimeout(() => setCopiedHex(null), 1400);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/90 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              MedPals Design System
            </h1>
            <Badge variant="accent">v1.0</Badge>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="border-b border-border overflow-x-auto bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex gap-2 py-3">
            {['showcase', 'colors', 'typography', 'components', 'accessibility'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2.5 rounded-xl transition-all whitespace-nowrap ${
                  activeTab === tab
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {activeTab === 'showcase' && (
          <div className="space-y-12 animate-fade-in">
            <Hero />
            <FeatureGrid />

            {/* Interactive Demo Section */}
            <section className="space-y-6">
              <div className="text-center space-y-2">
                <h2>Interactive Components</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Built with accessibility and readability at the core
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card variant="gradient" className="relative overflow-hidden">
                  <div className="relative z-10 space-y-4">
                    <Badge variant="accent" className="backdrop-blur-sm">Professional</Badge>
                    <h3 className="text-white">Brand Colors</h3>
                    <p className="text-sm text-white/90">
                      Carefully selected colors that meet WCAG AA accessibility standards
                      for optimal contrast and readability across all devices.
                    </p>
                    <Button variant="accent">Learn More</Button>
                  </div>
                </Card>

                <Card className="space-y-4">
                  <Badge variant="primary">Get Started</Badge>
                  <h3>Contact Form</h3>
                  <Input placeholder="Full name" />
                  <Input placeholder="email@example.com" type="email" />
                  <div className="flex gap-2">
                    <Button variant="primary" className="flex-1">Submit</Button>
                    <Button variant="outline" className="flex-1">Cancel</Button>
                  </div>
                </Card>
              </div>
            </section>

            {/* Color Palette Preview */}
            <section className="space-y-6">
              <div className="text-center space-y-2">
                <h2>Brand Palette</h2>
                <p className="text-muted-foreground">
                  Professional colors for medical and healthcare applications
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary to-primary/70 shadow-xl shadow-primary/20 flex items-center justify-center hover:scale-105 transition-transform cursor-pointer">
                  <span className="text-white font-medium">Denim Blue</span>
                </div>
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-secondary to-secondary/70 shadow-xl shadow-secondary/20 flex items-center justify-center hover:scale-105 transition-transform cursor-pointer">
                  <span className="text-white font-medium">Teal</span>
                </div>
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-accent to-accent/70 shadow-xl shadow-accent/20 flex items-center justify-center hover:scale-105 transition-transform cursor-pointer">
                  <span className="text-accent-foreground font-medium">Uranian Blue</span>
                </div>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'colors' && (
          <div className="space-y-8 animate-fade-in">
            <section>
              <div className="mb-6">
                <h2 className="mb-2">Brand Colors</h2>
                <p className="text-muted-foreground">
                  Inspired by medical professionalism and trust
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                <ColorSwatch color="bg-primary" name="Primary" desc="Denim Blue" hex="#005AB5" copied={copiedHex === '#005AB5'} onCopy={copyHexCode} />
                <ColorSwatch color="bg-secondary" name="Secondary" desc="Teal" hex="#008080" copied={copiedHex === '#008080'} onCopy={copyHexCode} />
                <ColorSwatch color="bg-accent" name="Accent" desc="Uranian Blue" hex="#A7CCED" copied={copiedHex === '#A7CCED'} onCopy={copyHexCode} />
                <ColorSwatch color="bg-[#075d5d]" name="Dark Teal" desc="Deep Ocean" hex="#075D5D" copied={copiedHex === '#075D5D'} onCopy={copyHexCode} />
                <ColorSwatch color="bg-[#1e192d]" name="Dark Purple" desc="Night Sky" hex="#1E192D" copied={copiedHex === '#1E192D'} onCopy={copyHexCode} />
                <ColorSwatch color="bg-destructive" name="Destructive" desc="Error Red" hex="#D32F2F" copied={copiedHex === '#D32F2F'} onCopy={copyHexCode} />
              </div>
            </section>

            <section>
              <div className="mb-6">
                <h2 className="mb-2">Gradients</h2>
                <p className="text-muted-foreground">
                  Smooth, professional gradient combinations
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                <GradientAsset name="Primary Gradient" from="#005AB5" to="#008080" className="from-primary to-secondary text-white" />
                <GradientAsset name="Accent Gradient" from="#008080" to="#A7CCED" className="from-secondary to-accent text-white" />
                <GradientAsset name="Soft Gradient" from="#A7CCED" to="#F1F2F6" className="from-accent to-muted text-foreground" />
              </div>
            </section>

            <section>
              <div className="mb-6">
                <h2 className="mb-2">Surface Colors</h2>
                <p className="text-muted-foreground">
                  Neutral tones for backgrounds and surfaces
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <ColorSwatch color="bg-background" name="Background" desc="Base" hex="#F5F2ED" copied={copiedHex === '#F5F2ED'} onCopy={copyHexCode} />
                <ColorSwatch color="bg-card" name="Card" desc="Elevated" hex="#FFFFFF" copied={copiedHex === '#FFFFFF'} onCopy={copyHexCode} />
                <ColorSwatch color="bg-muted" name="Muted" desc="Subtle" hex="#F1F2F6" copied={copiedHex === '#F1F2F6'} onCopy={copyHexCode} />
              </div>
            </section>
          </div>
        )}

        {activeTab === 'typography' && (
          <div className="space-y-8 animate-fade-in">
            <section className="space-y-6">
              <div>
                <h2 className="mb-2">Typography Scale</h2>
                <p className="text-muted-foreground">
                  Readable hierarchy using the Manrope font family
                </p>
              </div>

              <div className="space-y-8">
                <div className="space-y-2">
                  <h1>Heading 1 - Large Display</h1>
                  <p className="text-xs text-muted-foreground">Manrope • 2rem / 32px • 600 weight</p>
                </div>
                <div className="space-y-2">
                  <h2>Heading 2 - Section Title</h2>
                  <p className="text-xs text-muted-foreground">Manrope • 1.5rem / 24px • 600 weight</p>
                </div>
                <div className="space-y-2">
                  <h3>Heading 3 - Subsection</h3>
                  <p className="text-xs text-muted-foreground">Manrope • 1.125rem / 18px • 600 weight</p>
                </div>
                <div className="space-y-2">
                  <h4>Heading 4 - Card Title</h4>
                  <p className="text-xs text-muted-foreground">Manrope • 1rem / 16px • 600 weight</p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="mb-4">Font Family</h3>
              <Card className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-semibold mb-1">Manrope complete family</p>
                  <p className="text-sm text-muted-foreground">
                    Includes the variable font, static weights, license, and readme.
                  </p>
                </div>
                <a
                  className="inline-flex min-h-[44px] items-center justify-center rounded-2xl bg-primary px-6 py-3 font-medium text-primary-foreground shadow-md transition-all hover:bg-primary/90 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  href="/fonts/Manrope.zip"
                  download
                >
                  Download Manrope
                </a>
              </Card>
            </section>

            <section className="space-y-4">
              <h3>Body Text & Readability</h3>
              <Card>
                <p className="max-w-2xl mb-4">
                  Body text is designed for optimal readability across all devices
                  using the Manrope font family. Our mobile-first approach ensures
                  content is accessible and engaging whether you're on a phone,
                  tablet, or desktop. Line height is set to 1.625 for comfortable reading.
                </p>
                <p className="text-sm text-muted-foreground max-w-2xl">
                  Small text for captions and metadata. Perfect for secondary information
                  that supports the main content without overwhelming the visual hierarchy.
                  Maintains excellent readability even at smaller sizes.
                </p>
              </Card>
            </section>

            <section>
              <h3 className="mb-4">Font Weights</h3>
              <Card className="space-y-3">
                <p className="font-normal">Normal (400) - Default body text weight</p>
                <p className="font-medium">Medium (500) - Slightly emphasized text</p>
                <p className="font-semibold">Semibold (600) - Headings and important text</p>
                <p className="font-bold">Bold (700) - Strong emphasis</p>
              </Card>
            </section>
          </div>
        )}

        {activeTab === 'components' && (
          <div className="space-y-8 animate-fade-in">
            <section>
              <div className="mb-6">
                <h2 className="mb-2">Cards</h2>
                <p className="text-muted-foreground">
                  Flexible containers with soft rounded corners
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                <Card variant="default">
                  <Badge className="mb-3">Default</Badge>
                  <h3 className="mb-2">Default Card</h3>
                  <p className="text-sm text-muted-foreground">
                    Clean white background with subtle shadow for depth
                  </p>
                </Card>
                <Card variant="gradient">
                  <Badge variant="accent" className="mb-3">Gradient</Badge>
                  <h3 className="mb-2 text-white">Gradient Card</h3>
                  <p className="text-sm text-white/90">
                    Eye-catching design with brand gradients
                  </p>
                </Card>
                <Card variant="outline">
                  <Badge variant="outline" className="mb-3">Outline</Badge>
                  <h3 className="mb-2">Outline Card</h3>
                  <p className="text-sm text-muted-foreground">
                    Subtle borders for lighter emphasis
                  </p>
                </Card>
              </div>
            </section>

            <section>
              <div className="mb-6">
                <h2 className="mb-2">Form Elements</h2>
                <p className="text-muted-foreground">
                  Accessible inputs with clear focus states
                </p>
              </div>
              <Card className="max-w-2xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input placeholder="First name" />
                  <Input placeholder="Last name" />
                  <Input placeholder="email@example.com" type="email" className="sm:col-span-2" />
                  <Input placeholder="Phone number" type="tel" className="sm:col-span-2" />
                </div>
              </Card>
            </section>

            <section>
              <div className="mb-6">
                <h2 className="mb-2">Badges & Labels</h2>
                <p className="text-muted-foreground">
                  Status indicators and category labels
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Badge>Default</Badge>
                <Badge variant="primary">Primary</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="accent">Accent</Badge>
                <Badge variant="outline">Outline</Badge>
              </div>
            </section>

            <section>
              <div className="mb-6">
                <h2 className="mb-2">Buttons</h2>
                <p className="text-muted-foreground">
                  Clear call-to-action elements with multiple variants
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-4">
                  <Button variant="primary">Primary Button</Button>
                  <Button variant="secondary">Secondary Button</Button>
                  <Button variant="accent">Accent Button</Button>
                  <Button variant="outline">Outline Button</Button>
                  <Button variant="ghost">Ghost Button</Button>
                </div>
                <div className="flex flex-wrap items-center gap-4">
                  <Button size="sm">Small</Button>
                  <Button size="md">Medium</Button>
                  <Button size="lg">Large</Button>
                </div>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'accessibility' && (
          <div className="space-y-8 animate-fade-in">
            <section>
              <h2 className="mb-4">Accessibility Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <h3 className="mb-3">Color Contrast</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    All color combinations meet WCAG AA standards with a minimum
                    contrast ratio of 4.5:1 for normal text and 3:1 for large text.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 bg-primary text-primary-foreground rounded-lg">
                      <span>Primary on White</span>
                      <Badge variant="accent">AA ✓</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-secondary text-secondary-foreground rounded-lg">
                      <span>Secondary on White</span>
                      <Badge variant="accent">AA ✓</Badge>
                    </div>
                  </div>
                </Card>

                <Card>
                  <h3 className="mb-3">Touch Targets</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    All interactive elements are at least 44×44 pixels to ensure
                    easy tapping on mobile devices.
                  </p>
                  <div className="space-y-3">
                    <Button variant="primary" className="w-full">Full Width Button (44px+)</Button>
                    <div className="flex gap-2">
                      <Button variant="outline" className="flex-1">Action 1</Button>
                      <Button variant="outline" className="flex-1">Action 2</Button>
                    </div>
                  </div>
                </Card>

                <Card>
                  <h3 className="mb-3">Readable Typography</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Font sizes are optimized for readability with a minimum of 16px
                    for body text. Line height of 1.625 ensures comfortable reading.
                  </p>
                  <div className="space-y-2 text-sm">
                    <p className="font-medium">✓ Minimum 16px body text</p>
                    <p className="font-medium">✓ 1.625 line height</p>
                    <p className="font-medium">✓ Clear hierarchy</p>
                  </div>
                </Card>

                <Card>
                  <h3 className="mb-3">Focus Indicators</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    All interactive elements have clear, visible focus states for
                    keyboard navigation.
                  </p>
                  <div className="space-y-2">
                    <Input placeholder="Tab to see focus ring" />
                    <Button variant="outline" className="w-full">Keyboard Accessible</Button>
                  </div>
                </Card>
              </div>
            </section>

            <section>
              <h2 className="mb-4">Responsive Design</h2>
              <Card>
                <h3 className="mb-3">Mobile-First Approach</h3>
                <p className="text-muted-foreground mb-4">
                  All components are designed mobile-first and scale up beautifully
                  to tablet and desktop sizes. Tested on devices from 320px to 1920px wide.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                  <div className="p-4 bg-muted rounded-xl">
                    <p className="font-medium text-lg mb-1">320px+</p>
                    <p className="text-sm text-muted-foreground">Mobile</p>
                  </div>
                  <div className="p-4 bg-muted rounded-xl">
                    <p className="font-medium text-lg mb-1">768px+</p>
                    <p className="text-sm text-muted-foreground">Tablet</p>
                  </div>
                  <div className="p-4 bg-muted rounded-xl">
                    <p className="font-medium text-lg mb-1">1024px+</p>
                    <p className="text-sm text-muted-foreground">Desktop</p>
                  </div>
                </div>
              </Card>
            </section>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="mt-16 border-t border-border bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-sm text-muted-foreground space-y-3">
            <p>Built with React + Tailwind CSS</p>
            <div className="flex items-center justify-center gap-2 flex-wrap">
              <Badge variant="outline" className="text-xs">Mobile-first</Badge>
              <Badge variant="outline" className="text-xs">Accessible</Badge>
              <Badge variant="outline" className="text-xs">WCAG AA</Badge>
              <Badge variant="outline" className="text-xs">Professional</Badge>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function GradientAsset({ name, from, to, className }: { name: string; from: string; to: string; className: string }) {
  return (
    <div className="space-y-3">
      <div className={`h-40 rounded-2xl bg-gradient-to-br ${className} flex items-center justify-center shadow-xl hover:shadow-2xl transition-shadow`}>
        <span className="font-medium">{name}</span>
      </div>
      <Button variant="outline" className="w-full" onClick={() => downloadGradientPng(name, from, to)}>
        Download PNG
      </Button>
    </div>
  );
}

function ColorSwatch({
  color,
  name,
  desc,
  hex,
  copied,
  onCopy,
}: {
  color: string;
  name: string;
  desc: string;
  hex: string;
  copied: boolean;
  onCopy: (hex: string) => void;
}) {
  return (
    <div className="space-y-3">
      <div className={`${color} h-32 rounded-2xl shadow-lg hover:scale-105 transition-transform cursor-pointer relative overflow-hidden group`}>
        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
          <span className="text-white font-medium font-mono">{hex}</span>
        </div>
      </div>
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="font-medium text-foreground">{name}</p>
          <p className="text-sm text-muted-foreground">{desc}</p>
          <p className="text-xs font-mono text-muted-foreground">{hex}</p>
        </div>
        <button
          className="min-h-[36px] rounded-full border-2 border-primary px-3 text-xs font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          type="button"
          onClick={() => onCopy(hex)}
        >
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
    </div>
  );
}

function downloadGradientPng(name: string, from: string, to: string) {
  const canvas = document.createElement('canvas');
  canvas.width = 1600;
  canvas.height = 900;

  const context = canvas.getContext('2d');
  if (!context) return;

  const gradient = context.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, from);
  gradient.addColorStop(1, to);
  context.fillStyle = gradient;
  context.fillRect(0, 0, canvas.width, canvas.height);

  const link = document.createElement('a');
  link.download = `${name.toLowerCase().replace(/\s+/g, '-')}.png`;
  link.href = canvas.toDataURL('image/png');
  link.click();
}
