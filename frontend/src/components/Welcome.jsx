import React from 'react';
import { Heart, Users, Sparkles } from 'lucide-react';

export const Welcome = () => {
  return (
    <section className="py-20" style={{ backgroundColor: 'white' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Main welcome */}
          <div className="text-center mb-16">
            <h2 
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ color: '#1e1919' }}
            >
              Welcome to Joyfull Balloons
            </h2>
            <p 
              className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
              style={{ color: '#736c64' }}
            >
              We specialize in custom balloon décor designed to elevate your celebrations. 
              With a focus on creativity, quality, and personalized service, we bring joyful 
              moments to life through beautifully crafted balloon arrangements.
            </p>
          </div>

          {/* Features grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Personal Approach */}
            <div className="text-center p-6 rounded-2xl transition-all hover:shadow-lg" style={{ backgroundColor: '#f7f5f2' }}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4" style={{ backgroundColor: '#fad24b' }}>
                <Heart size={32} style={{ color: '#1e1919' }} />
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#1e1919' }}>
                Personal Approach
              </h3>
              <p style={{ color: '#736c64' }}>
                We create beautiful designs that reflect your vision and elevate your celebrations.
              </p>
            </div>

            {/* Every Detail Matters */}
            <div className="text-center p-6 rounded-2xl transition-all hover:shadow-lg" style={{ backgroundColor: '#f7f5f2' }}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4" style={{ backgroundColor: '#3dd3ee' }}>
                <Sparkles size={32} style={{ color: '#1e1919' }} />
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#1e1919' }}>
                Every Detail Matters
              </h3>
              <p style={{ color: '#736c64' }}>
                Every detail matters, and every client is treated like family.
              </p>
            </div>

            {/* Custom Designs */}
            <div className="text-center p-6 rounded-2xl transition-all hover:shadow-lg" style={{ backgroundColor: '#f7f5f2' }}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4" style={{ backgroundColor: '#b4dc19' }}>
                <Users size={32} style={{ color: '#1e1919' }} />
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#1e1919' }}>
                Warm & Creative
              </h3>
              <p style={{ color: '#736c64' }}>
                Custom balloon designs tailored to your theme, colors, and vision.
              </p>
            </div>
          </div>

          {/* Custom Balloon Designs section */}
          <div className="mt-20 text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#1e1919' }}>
              Custom Balloon Designs
            </h3>
            <p 
              className="text-lg leading-relaxed max-w-3xl mx-auto"
              style={{ color: '#736c64' }}
            >
              Every celebration is unique, and your balloon decor should be too. 
              We specialize in custom balloon designs tailored to your theme, colors, and vision. 
              From elegant arches to playful centerpieces, each design is thoughtfully created to 
              reflect your style and bring your event to life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
