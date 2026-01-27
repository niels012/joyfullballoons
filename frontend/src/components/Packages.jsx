import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { mockData } from '../mock';
import { Check } from 'lucide-react';
import { toast } from 'sonner';

export const Packages = () => {
  const handleBooking = (packageName) => {
    toast.success(`Selected ${packageName}!`, {
      description: 'Scroll to Contact section to complete your booking.'
    });
  };

  return (
    <section id="packages" className="py-20" style={{ backgroundColor: 'white' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#1e1919' }}>
            Packages That Fit Every Party
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#736c64' }}>
            Whether it’s a birthday, baby shower, or milestone celebration, we have a package 
            that will make your home party unforgettable.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {mockData.packages.map((pkg) => (
            <Card 
              key={pkg.id} 
              className={`overflow-hidden transition-all hover:shadow-2xl hover:scale-105 relative ${
                pkg.popular ? 'border-2' : ''
              }`}
              style={pkg.popular ? { borderColor: '#61525a' } : {}}
            >
              {pkg.popular && (
                <div className="absolute top-4 right-4">
                  <Badge style={{ backgroundColor: '#fad24b', color: '#1e1919' }}>
                    Most Popular
                  </Badge>
                </div>
              )}
              <div className="aspect-video overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-cover transition-transform hover:scale-110"
                />
              </div>
              <CardHeader>
                <CardTitle style={{ color: '#1e1919' }}>{pkg.name}</CardTitle>
                <CardDescription className="text-2xl font-bold" style={{ color: '#61525a' }}>
                  {pkg.price}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check size={20} className="mr-2 mt-0.5 flex-shrink-0" style={{ color: '#b4dc19' }} />
                      <span style={{ color: '#736c64' }}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  style={{ backgroundColor: '#61525a' }}
                  onClick={() => handleBooking(pkg.name)}
                >
                  Book Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Bundle Packages CTA */}
        <div className="text-center p-8 rounded-2xl max-w-4xl mx-auto" style={{ backgroundColor: '#f7f5f2' }}>
          <h3 className="text-2xl font-bold mb-4" style={{ color: '#1e1919' }}>
            Looking for Bundle Packages?
          </h3>
          <p className="mb-6" style={{ color: '#736c64' }}>
            We offer special Birthday Bundles and Baby Shower Bundles. Contact us for custom pricing!
          </p>
          <Button
            size="lg"
            style={{ backgroundColor: '#61525a' }}
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Reserve Your Package
          </Button>
        </div>
      </div>
    </section>
  );
};
