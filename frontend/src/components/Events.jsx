import React from 'react';
import * as LucideIcons from 'lucide-react';
import { mockData } from '../mock';

export const Events = () => {
  const getIcon = (iconName) => {
    const iconMap = {
      'cake': LucideIcons.Cake,
      'heart': LucideIcons.Heart,
      'baby': LucideIcons.Baby,
      'gift': LucideIcons.Gift,
      'gem': LucideIcons.Gem,
      'graduation-cap': LucideIcons.GraduationCap,
      'ring': LucideIcons.Sparkles,
      'heart-handshake': LucideIcons.HeartHandshake,
      'star': LucideIcons.Star,
      'briefcase': LucideIcons.Briefcase
    };
    const Icon = iconMap[iconName] || LucideIcons.Circle;
    return <Icon size={32} />;
  };

  return (
    <section id="events" className="py-20" style={{ backgroundColor: '#f7f5f2' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#1e1919' }}>
            Events
          </h2>
          <p className="text-xl" style={{ color: '#736c64' }}>
            We create magical moments for every occasion
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {mockData.events.map((event, index) => {
            const colors = ['#fad24b', '#3dd3ee', '#ff8c19', '#b4dc19', '#c8aff0'];
            const bgColor = colors[index % colors.length];
            
            return (
              <div
                key={index}
                className="p-6 rounded-2xl text-center transition-all hover:scale-105 hover:shadow-xl cursor-pointer"
                style={{ backgroundColor: 'white' }}
              >
                <div 
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 transition-transform hover:rotate-12"
                  style={{ backgroundColor: bgColor }}
                >
                  <div style={{ color: '#1e1919' }}>
                    {getIcon(event.icon)}
                  </div>
                </div>
                <h3 className="text-sm font-semibold" style={{ color: '#1e1919' }}>
                  {event.name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
