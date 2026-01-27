import React from 'react';
import { Button } from './ui/button';
import { Sparkles } from 'lucide-react';

export const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#f7f5f2' }}>
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-20 left-10 w-64 h-64 rounded-full opacity-20 blur-3xl"
          style={{ backgroundColor: '#fad24b' }}
        />
        <div 
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{ backgroundColor: '#3dd3ee' }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo icon */}
          <div className="flex justify-center mb-6 animate-bounce">
            <div className="p-4 rounded-full" style={{ backgroundColor: '#61525a' }}>
              <Sparkles size={48} color="white" />
            </div>
          </div>

          {/* Main headline */}
          <h1 
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            style={{ color: '#1e1919' }}
          >
            JOYFULL BALLOONS FOR ALL OCCASIONS
          </h1>

          {/* Subheadline */}
          <p 
            className="text-xl md:text-2xl mb-8 leading-relaxed"
            style={{ color: '#736c64' }}
          >
            Balloon Décor, Backdrops, Centerpieces, Bedroom Decor & Gift Balloons Delivered to You
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={() => scrollToSection('packages')}
              style={{ backgroundColor: '#61525a' }}
              className="px-8 py-6 text-lg hover:opacity-90 transition-all hover:scale-105"
            >
              View Packages
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="px-8 py-6 text-lg border-2 hover:bg-gray-100 transition-all hover:scale-105"
              style={{ borderColor: '#61525a', color: '#61525a' }}
            >
              Book Now
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 rounded-full flex items-start justify-center p-2" style={{ borderColor: '#61525a' }}>
          <div className="w-1 h-2 rounded-full" style={{ backgroundColor: '#61525a' }} />
        </div>
      </div>
    </section>
  );
};
