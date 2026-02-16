import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Events', id: 'events' },
    { label: 'Decorations', id: 'decorations' },
    { label: 'Shop', id: 'shop' },
    { label: 'Packages', id: 'packages' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        {/* Flex container to keep Logo and Nav on the same line */}
        <div className="flex justify-between items-center">
          <div 
            className="cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            <img 
              src="/images/JBLogo.png" 
              alt="JF Balloons Logo" 
              className="h-20 w-auto object-contain"
            />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium transition-colors hover:opacity-70"
                style={{ color: '#1e1919' }}
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection('contact')}
              style={{ backgroundColor: '#61525a' }}
              className="hover:opacity-90 transition-opacity"
            >
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{ color: '#61525a' }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div> {/* This closes the new flex div */}

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 rounded"
                style={{ color: '#1e1919' }}
              >
                {item.label}
              </button>
            ))}
            <div className="px-4">
              <Button
                onClick={() => scrollToSection('contact')}
                style={{ backgroundColor: '#61525a' }}
                className="w-full hover:opacity-90 transition-opacity"
              >
                Book Now
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
