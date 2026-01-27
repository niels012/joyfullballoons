import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Phone, Mail, MapPin, Instagram, Facebook, Video } from 'lucide-react';
import { mockData } from '../mock';
import { toast } from 'sonner';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    eventTime: '',
    address: '',
    package: '',
    balloonGift: '',
    colorTheme: '',
    notes: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission - in real app, this would save to database
    mockData.bookings.push({
      ...formData,
      id: Date.now(),
      submittedAt: new Date().toISOString()
    });
    
    toast.success('Booking request submitted!', {
      description: 'We\'ll contact you within 24 hours to confirm your booking.'
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      eventDate: '',
      eventTime: '',
      address: '',
      package: '',
      balloonGift: '',
      colorTheme: '',
      notes: ''
    });
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20" style={{ backgroundColor: '#f7f5f2' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#1e1919' }}>
              Book Your Party Today
            </h2>
            <p className="text-xl" style={{ color: '#736c64' }}>
              Contact us today to make your celebration unforgettable
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              {/* Why Choose Us */}
              <Card>
                <CardHeader>
                  <CardTitle style={{ color: '#1e1919' }}>Why Choose Joyfull Balloons?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {mockData.benefits.map((benefit, idx) => {
                    const Icon = benefit.icon === 'zap' ? require('lucide-react').Zap :
                                benefit.icon === 'award' ? require('lucide-react').Award :
                                benefit.icon === 'palette' ? require('lucide-react').Palette :
                                require('lucide-react').Home;
                    return (
                      <div key={idx} className="flex items-start">
                        <div className="mr-3 mt-1">
                          <Icon size={20} style={{ color: '#61525a' }} />
                        </div>
                        <div>
                          <h4 className="font-semibold" style={{ color: '#1e1919' }}>{benefit.title}</h4>
                          <p className="text-sm" style={{ color: '#736c64' }}>{benefit.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>

              {/* Contact Details */}
              <Card>
                <CardHeader>
                  <CardTitle style={{ color: '#1e1919' }}>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center">
                    <Phone size={20} className="mr-3" style={{ color: '#61525a' }} />
                    <span style={{ color: '#736c64' }}>{mockData.contact.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <Mail size={20} className="mr-3" style={{ color: '#61525a' }} />
                    <span style={{ color: '#736c64' }}>{mockData.contact.email}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={20} className="mr-3" style={{ color: '#61525a' }} />
                    <span style={{ color: '#736c64' }}>{mockData.contact.address}</span>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <h4 className="font-semibold mb-3" style={{ color: '#1e1919' }}>Follow Us</h4>
                    <div className="flex space-x-4">
                      <a href={mockData.contact.socialMedia.instagram} className="transition-transform hover:scale-110">
                        <Instagram size={24} style={{ color: '#61525a' }} />
                      </a>
                      <a href={mockData.contact.socialMedia.tiktok} className="transition-transform hover:scale-110">
                        <Video size={24} style={{ color: '#61525a' }} />
                      </a>
                      <a href={mockData.contact.socialMedia.facebook} className="transition-transform hover:scale-110">
                        <Facebook size={24} style={{ color: '#61525a' }} />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Booking Form */}
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle style={{ color: '#1e1919' }}>Booking Request Form</CardTitle>
                  <CardDescription style={{ color: '#736c64' }}>
                    Fill out the form below and we'll get back to you within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => handleChange('name', e.target.value)}
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => handleChange('email', e.target.value)}
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Phone *</Label>
                        <Input
                          id="phone"
                          required
                          value={formData.phone}
                          onChange={(e) => handleChange('phone', e.target.value)}
                          placeholder="(555) 123-4567"
                        />
                      </div>
                      <div>
                        <Label htmlFor="package">Package Choice</Label>
                        <Select value={formData.package} onValueChange={(value) => handleChange('package', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a package" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="basic">Basic Party Pop ($180-$250)</SelectItem>
                            <SelectItem value="popular">Most Popular ($280-$380)</SelectItem>
                            <SelectItem value="deluxe">Deluxe Setup ($420-$600)</SelectItem>
                            <SelectItem value="custom">Custom Package</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="eventDate">Event Date *</Label>
                        <Input
                          id="eventDate"
                          type="date"
                          required
                          value={formData.eventDate}
                          onChange={(e) => handleChange('eventDate', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="eventTime">Event Time *</Label>
                        <Input
                          id="eventTime"
                          type="time"
                          required
                          value={formData.eventTime}
                          onChange={(e) => handleChange('eventTime', e.target.value)}
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="address">Address / Access Info *</Label>
                      <Input
                        id="address"
                        required
                        value={formData.address}
                        onChange={(e) => handleChange('address', e.target.value)}
                        placeholder="Event location address"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="balloonGift">Balloon Gift Options</Label>
                        <Input
                          id="balloonGift"
                          value={formData.balloonGift}
                          onChange={(e) => handleChange('balloonGift', e.target.value)}
                          placeholder="Stuffed balloon, etc."
                        />
                      </div>
                      <div>
                        <Label htmlFor="colorTheme">Color Palette / Theme</Label>
                        <Input
                          id="colorTheme"
                          value={formData.colorTheme}
                          onChange={(e) => handleChange('colorTheme', e.target.value)}
                          placeholder="e.g., Pink & Gold"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="notes">Additional Notes</Label>
                      <Textarea
                        id="notes"
                        value={formData.notes}
                        onChange={(e) => handleChange('notes', e.target.value)}
                        placeholder="Any special requests or details..."
                        rows={4}
                      />
                    </div>

                    <div className="p-4 rounded-lg" style={{ backgroundColor: '#f7f5f2' }}>
                      <p className="text-sm" style={{ color: '#736c64' }}>
                        <strong style={{ color: '#1e1919' }}>Payment Information:</strong> A 50% non-refundable 
                        deposit secures your booking. Remaining balance due 48 hours before your event. 
                        Payment options: Venmo, CashApp, Zelle, or credit card.
                      </p>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      style={{ backgroundColor: '#61525a' }}
                    >
                      Submit Booking Request
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
