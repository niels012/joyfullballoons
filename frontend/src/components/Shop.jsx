import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { mockData } from '../mock';
import { toast } from 'sonner';

export const Shop = () => {
  const handleOrder = (productName) => {
    toast.success(`Added ${productName} to your inquiry!`, {
      description: 'Scroll to Contact section to complete your booking.'
    });
  };

  return (
    <section id="shop" className="py-20" style={{ backgroundColor: '#f7f5f2' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#1e1919' }}>
            Shop Stuffed Balloons
          </h2>
          <p className="text-xl" style={{ color: '#736c64' }}>
            Add a Special Touch with Stuffed Balloons
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {mockData.stuffedBalloons.map((product) => (
            <Card 
              key={product.id} 
              className="overflow-hidden transition-all hover:shadow-2xl hover:scale-105"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform hover:scale-110"
                />
              </div>
              <CardHeader>
                <CardTitle style={{ color: '#1e1919' }}>{product.name}</CardTitle>
                <CardDescription className="text-2xl font-bold" style={{ color: '#61525a' }}>
                  {product.price}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p style={{ color: '#736c64' }}>{product.description}</p>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  style={{ backgroundColor: '#61525a' }}
                  onClick={() => handleOrder(product.name)}
                >
                  Order Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
