// Mock data for Joyfull Balloons website

export const mockData = {
  // Contact info placeholders
  contact: {
    phone: '(555) 123-4567',
    email: 'hello@joyfullballoons.com',
    address: 'Your City, State',
    socialMedia: {
      instagram: 'https://instagram.com/joyfullballoons',
      tiktok: 'https://tiktok.com/@joyfullballoons',
      facebook: 'https://facebook.com/joyfullballoons'
    },
    googleReview: 'https://google.com/reviews/joyfullballoons'
  },

  // Event types
  events: [
    { name: 'Birthday Balloons', icon: 'cake' },
    { name: 'Valentines Balloons', icon: 'heart' },
    { name: 'Baby Shower Balloons', icon: 'baby' },
    { name: 'Gender Reveal Balloons', icon: 'gift' },
    { name: 'Bridal Shower Balloons', icon: 'gem' },
    { name: 'Graduation Balloons', icon: 'graduation-cap' },
    { name: 'Engagement Balloons', icon: 'ring' },
    { name: 'Wedding Balloons', icon: 'heart-handshake' },
    { name: 'Bar/Bat Mitzvah Balloons', icon: 'star' },
    { name: 'Corporate Balloons', icon: 'briefcase' }
  ],

  // Decoration types
  decorations: [
    { name: 'Balloon Arch', icon: 'arc' },
    { name: 'Balloon Garland', icon: 'sparkles' },
    { name: 'Balloon Backdrop', icon: 'frame' },
    { name: 'Balloon Centerpieces', icon: 'flower' },
    { name: 'Balloon Mosaic', icon: 'grid-3x3' },
    { name: 'Balloon Columns', icon: 'columns' },
    { name: 'Table Décor Balloons', icon: 'table' },
    { name: 'Grab and Go Balloons', icon: 'shopping-bag' }
  ],

  // Stuffed balloon products
  stuffedBalloons: [
    {
      id: 1,
      name: 'Basic Stuffed Balloon',
      price: '$35–$50',
      description: 'Perfect for gifts and party favors',
      image: 'https://images.unsplash.com/photo-1602328790041-ee36d98e677c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwxfHxiYWxsb29uJTIwZGVjb3JhdGlvbnN8ZW58MHx8fHwxNzY5NTQyMjAzfDA&ixlib=rb-4.1.0&q=85'
    },
    {
      id: 2,
      name: 'Premium Stuffed Balloon',
      price: '$60–$85',
      description: 'Plush, flowers, or LED included',
      image: 'https://images.unsplash.com/photo-1768725844871-631e23027973?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwyfHxiYWxsb29uJTIwYXJyYW5nZW1lbnRzfGVufDB8fHx8MTc2OTU0MjIwOXww&ixlib=rb-4.1.0&q=85'
    },
    {
      id: 3,
      name: 'Deluxed Stuffed balloon',
      price: '$75–$120',
      description: 'Unique layered design that wows',
      image: 'https://images.unsplash.com/photo-1764344832838-f53060686020?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwzfHxiYWxsb29uJTIwZGVjb3JhdGlvbnN8ZW58MHx8fHwxNzY5NTQyMjAzfDA&ixlib=rb-4.1.0&q=85'
    }
  ],

  // Package options
  packages: [
    {
      id: 1,
      name: 'Basic Party Pop',
      price: '$180–$250',
      features: [
        '6–8 ft garland',
        'Up to 3 colors',
        'Drop-off or simple install'
      ],
      image: 'https://images.unsplash.com/photo-1626149136691-78e3977b3d69?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHw0fHxiYWxsb29uJTIwZGVjb3JhdGlvbnN8ZW58MHx8fHwxNzY5NTQyMjAzfDA&ixlib=rb-4.1.0&q=85',
      popular: false
    },
    {
      id: 2,
      name: 'Most Popular Package',
      price: '$280–$380',
      features: [
        '8–10 ft organic garland',
        '1–2 specialty balloons',
        'On-site setup'
      ],
      image: 'https://images.unsplash.com/photo-1769230382595-9c404d0cfdc4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwzfHxiYWxsb29uJTIwYXJyYW5nZW1lbnRzfGVufDB8fHx8MTc2OTU0MjIwOXww&ixlib=rb-4.1.0&q=85',
      popular: true
    },
    {
      id: 3,
      name: 'Deluxe House Party Setup',
      price: '$420–$600',
      features: [
        '10–12 ft premium organic garland',
        'Accent clusters',
        'Full styling'
      ],
      image: 'https://images.unsplash.com/photo-1765850261645-69a4734ae89e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHxiYWxsb29uJTIwYXJyYW5nZW1lbnRzfGVufDB8fHx8MTc2OTU0MjIwOXww&ixlib=rb-4.1.0&q=85',
      popular: false
    }
  ],

  // Testimonials
  testimonials: [
    {
      id: 1,
      name: 'James K.',
      text: 'Joyfull Balloons made my daughter\'s birthday unforgettable!',
      rating: 5
    },
    {
      id: 2,
      name: 'Sarah M.',
      text: 'Professional, creative, and the balloons lasted for days. Highly recommend!',
      rating: 5
    },
    {
      id: 3,
      name: 'David L.',
      text: 'The team went above and beyond for our wedding. Stunning work!',
      rating: 5
    }
  ],

  // FAQ items
  faqs: [
    {
      id: 1,
      question: 'How far in advance should I book?',
      answer: '1–2 weeks minimum, sooner for peak dates like holidays and weekends.'
    },
    {
      id: 2,
      question: 'Can I request custom colors or themes?',
      answer: 'Yes! We love personalized setups and can match any color scheme or theme you have in mind.'
    },
    {
      id: 3,
      question: 'Are balloons safe for indoors?',
      answer: 'Yes, all our balloons are safe and air-filled unless you specifically request helium.'
    },
    {
      id: 4,
      question: 'Do you do outdoor events?',
      answer: 'Yes, but weather can affect balloons. We can advise on alternatives and best practices for outdoor setups.'
    }
  ],

  // Gallery images
  gallery: [
    {
      id: 1,
      url: '/images/creation1.jpg',
      alt: 'first creation1'
    }
    // {
    //   id: 2,
    //   url: 'https://images.unsplash.com/photo-1602328790041-ee36d98e677c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwxfHxiYWxsb29uJTIwZGVjb3JhdGlvbnN8ZW58MHx8fHwxNzY5NTQyMjAzfDA&ixlib=rb-4.1.0&q=85',
    //   alt: 'Colorful balloon arrangement'
    // },
    // {
    //   id: 3,
    //   url: 'https://images.unsplash.com/photo-1764344832838-f53060686020?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwzfHxiYWxsb29uJTIwZGVjb3JhdGlvbnN8ZW58MHx8fHwxNzY5NTQyMjAzfDA&ixlib=rb-4.1.0&q=85',
    //   alt: 'Professional balloon display'
    // },
    // {
    //   id: 4,
    //   url: 'https://images.unsplash.com/photo-1626149136691-78e3977b3d69?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHw0fHxiYWxsb29uJTIwZGVjb3JhdGlvbnN8ZW58MHx8fHwxNzY5NTQyMjAzfDA&ixlib=rb-4.1.0&q=85',
    //   alt: 'Classic balloon string arrangement'
    // },
    // {
    //   id: 5,
    //   url: 'https://images.unsplash.com/photo-1765850261645-69a4734ae89e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHxiYWxsb29uJTIwYXJyYW5nZW1lbnRzfGVufDB8fHx8MTc2OTU0MjIwOXww&ixlib=rb-4.1.0&q=85',
    //   alt: 'Event seating with balloons'
    // },
    // {
    //   id: 6,
    //   url: 'https://images.unsplash.com/photo-1768725844871-631e23027973?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwyfHxiYWxsb29uJTIwYXJyYW5nZW1lbnRzfGVufDB8fHx8MTc2OTU0MjIwOXww&ixlib=rb-4.1.0&q=85',
    //   alt: 'Bridal shower balloon arrangement'
    // },
    // {
    //   id: 7,
    //   url: 'https://images.unsplash.com/photo-1769230382595-9c404d0cfdc4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwzfHxiYWxsb29uJTIwYXJyYW5nZW1lbnRzfGVufDB8fHx8MTc2OTU0MjIwOXww&ixlib=rb-4.1.0&q=85',
    //   alt: 'Professional event setup'
    // },
    // {
    //   id: 8,
    //   url: 'https://images.unsplash.com/photo-1759433582490-54f92e32c6fe?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHw0fHxiYWxsb29uJTIwYXJyYW5nZW1lbnRzfGVufDB8fHx8MTc2OTU0MjIwOXww&ixlib=rb-4.1.0&q=85',
    //   alt: 'Artistic balloon arrangement'
    // }
  ],

  // Why choose us benefits
  benefits: [
    { icon: 'zap', title: 'Fast, professional setup', description: 'Quick and efficient installation' },
    { icon: 'award', title: 'Premium balloons & gifts', description: 'High-quality materials' },
    { icon: 'palette', title: 'Personalized designs', description: 'Custom for every occasion' },
    { icon: 'home', title: 'Affordable packages', description: 'Perfect for small-home parties' }
  ],

  // Booking submissions (mock storage)
  bookings: []
};
