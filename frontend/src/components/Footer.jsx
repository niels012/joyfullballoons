import React from 'react';
import { Instagram, Facebook, Video, Mail, Phone, MapPin } from 'lucide-react';
import { mockData } from '../mock';

export const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-12" style={{ backgroundColor: '#1e1919' }}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#fad24b' }}>
              JF Balloons
            </h3>
            <p className="text-sm" style={{ color: '#bbb5ae' }}>
              Bringing joy to every celebration with custom balloon décor
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4" style={{ color: 'white' }}>Quick Links</h4>
            <ul className="space-y-2">
              {['home', 'events', 'decorations', 'shop', 'packages', 'gallery'].map((section) => (
                <li key={section}>
                  <button
                    onClick={() => scrollToSection(section)}
                    className="text-sm transition-colors hover:opacity-70 capitalize"
                    style={{ color: '#bbb5ae' }}
                  >
                    {section}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4" style={{ color: 'white' }}>Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center text-sm" style={{ color: '#bbb5ae' }}>
                <Phone size={16} className="mr-2" />
                {mockData.contact.phone}
              </li>
              <li className="flex items-center text-sm" style={{ color: '#bbb5ae' }}>
                <Mail size={16} className="mr-2" />
                {mockData.contact.email}
              </li>
              <li className="flex items-center text-sm" style={{ color: '#bbb5ae' }}>
                <MapPin size={16} className="mr-2" />
                {mockData.contact.address}
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold mb-4" style={{ color: 'white' }}>Follow Us</h4>
            <div className="flex space-x-4">
              <a 
                href={mockData.contact.socialMedia.instagram} 
                className="transition-all hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={24} style={{ color: '#fad24b' }} />
              </a>
              <a 
                href={mockData.contact.socialMedia.tiktok} 
                className="transition-all hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Video size={24} style={{ color: '#fad24b' }} />
              </a>
              <a 
                href={mockData.contact.socialMedia.facebook} 
                className="transition-all hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={24} style={{ color: '#fad24b' }} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t pt-8 text-center" style={{ borderColor: '#736c64' }}>
          <p className="text-sm" style={{ color: '#bbb5ae' }}>
            © 2026 Joyfull Balloons – All Rights Reserved
          </p>
          <p className="text-xs mt-2" style={{ color: '#736c64' }}>
            www.joyfullballoons.com
          </p>
        </div>
      </div>
    </footer>
  );
};
