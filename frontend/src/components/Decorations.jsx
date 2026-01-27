import React from 'react';
import * as LucideIcons from 'lucide-react';
import { mockData } from '../mock';

export const Decorations = () => {
  const getIcon = (iconName) => {
    const iconMap = {
      'arc': LucideIcons.Rainbow,
      'sparkles': LucideIcons.Sparkles,
      'frame': LucideIcons.Frame,
      'flower': LucideIcons.Flower2,
      'grid-3x3': LucideIcons.Grid3x3,
      'columns': LucideIcons.Columns,
      'table': LucideIcons.Table,
      'shopping-bag': LucideIcons.ShoppingBag
    };
    const Icon = iconMap[iconName] || LucideIcons.Circle;
    return <Icon size={32} />;
  };

  return (
    <section id="decorations" className="py-20" style={{ backgroundColor: 'white' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#1e1919' }}>
            Balloon Decorations
          </h2>
          <p className="text-xl" style={{ color: '#736c64' }}>
            From arches to centerpieces, we do it all
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {mockData.decorations.map((decoration, index) => {
            const colors = ['#78286e', '#fa551e', '#5f9dff', '#fad24b', '#3dd3ee', '#ff8c19', '#b4dc19', '#c8aff0'];
            const bgColor = colors[index % colors.length];
            
            return (
              <div
                key={index}
                className="p-6 rounded-2xl text-center transition-all hover:scale-105 hover:shadow-xl cursor-pointer"
                style={{ backgroundColor: '#f7f5f2' }}
              >
                <div 
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 transition-transform hover:rotate-12"
                  style={{ backgroundColor: bgColor }}
                >
                  <div style={{ color: 'white' }}>
                    {getIcon(decoration.icon)}
                  </div>
                </div>
                <h3 className="text-sm font-semibold" style={{ color: '#1e1919' }}>
                  {decoration.name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
