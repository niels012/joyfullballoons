import React from 'react';
import { Star } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { mockData } from '../mock';

export const Testimonials = () => {
  return (
    <section className="py-20" style={{ backgroundColor: 'white' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#1e1919' }}>
            Our Clients Love Us
          </h2>
          <p className="text-xl" style={{ color: '#736c64' }}>
            See what our happy customers have to say
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-8">
          {mockData.testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="transition-all hover:shadow-xl">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} fill="#fad24b" style={{ color: '#fad24b' }} />
                  ))}
                </div>
                <p className="mb-4 text-lg" style={{ color: '#736c64' }}>
                  "{testimonial.text}"
                </p>
                <p className="font-semibold" style={{ color: '#1e1919' }}>
                  — {testimonial.name}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="border-2"
            style={{ borderColor: '#61525a', color: '#61525a' }}
            onClick={() => window.open(mockData.contact.googleReview, '_blank')}
          >
            Read More Reviews on Google
          </Button>
        </div>
      </div>
    </section>
  );
};
