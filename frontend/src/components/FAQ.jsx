import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { mockData } from '../mock';

export const FAQ = () => {
  return (
    <section className="py-20" style={{ backgroundColor: '#f7f5f2' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#1e1919' }}>
              Frequently Asked Questions
            </h2>
            <p className="text-xl" style={{ color: '#736c64' }}>
              Got questions? We've got answers!
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {mockData.faqs.map((faq) => (
              <AccordionItem 
                key={faq.id} 
                value={`item-${faq.id}`}
                className="bg-white rounded-lg px-6 border-none"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold" style={{ color: '#1e1919' }}>
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <p style={{ color: '#736c64' }}>{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
