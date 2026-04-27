import { Wind, Droplets, Sparkles } from 'lucide-react';

export const slides = [
  {
    id: 1,
    title: 'Express Laundry',
    subtitle: 'Get Your Clothes Back in 24 Hours',
    description: 'Fast-track service without compromising on quality. Perfect for your busy lifestyle.',
    icon: Wind,
    gradient: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-blue-50 to-cyan-50',
    details: {
      longDescription:
        'Our Express Laundry service is designed for the fast-paced lifestyle of modern professionals. We understand that time is precious, which is why we guarantee a quick turnaround without compromising on quality.',
      features: [
        '24-hour turnaround time guarantee',
        'Expert stain removal techniques',
        'Gentle handling of all fabrics',
        'Free pickup and delivery service',
        'Eco-friendly washing process',
      ],
      pricing: '₹99 - ₹299 depending on fabric type',
      benefits: [
        'Perfect for business professionals',
        'Ideal for travelers and busy schedules',
        'Maintains fabric quality',
        'Convenient doorstep service',
      ],
    },
  },
  {
    id: 2,
    title: 'Eco-Friendly Cleaning',
    subtitle: 'Care for Clothes, Care for Earth',
    description: '100% biodegradable detergents and sustainable practices for a better tomorrow.',
    icon: Droplets,
    gradient: 'from-green-500 to-emerald-500',
    bgGradient: 'from-green-50 to-emerald-50',
    details: {
      longDescription:
        'We are committed to environmental sustainability while delivering the highest quality cleaning service. Our eco-friendly approach uses biodegradable detergents that are safe for your family and the planet.',
      features: [
        '100% biodegradable detergents',
        'Water-efficient washing methods',
        'Chemical-free stain removal',
        'Sustainable packaging materials',
        'Carbon-neutral delivery options',
      ],
      pricing: '₹129 - ₹349 per item',
      benefits: [
        'Protects the environment',
        'Safe for sensitive skin',
        'Reduces water wastage',
        'Supports green initiatives',
      ],
    },
  },
  {
    id: 3,
    title: 'Premium Dry Cleaning',
    subtitle: 'Luxury Care for Delicate Fabrics',
    description: 'Professional treatment for your finest garments with advanced stain removal techniques.',
    icon: Sparkles,
    gradient: 'from-purple-500 to-pink-500',
    bgGradient: 'from-purple-50 to-pink-50',
    details: {
      longDescription:
        'For your most precious garments, our Premium Dry Cleaning service offers luxury care with advanced techniques. Every piece receives individual attention and expert handling by our certified professionals.',
      features: [
        'Advanced stain removal technology',
        'Individual garment inspection',
        'Certified dry cleaning experts',
        'Premium finishing and pressing',
        'Specialized care for delicate fabrics',
        'Expert alteration services available',
      ],
      pricing: '₹199 - ₹599 per item',
      benefits: [
        'Extends garment lifespan',
        'Restores original appearance',
        'Expert handling of luxury fabrics',
        'Professional alterations included',
      ],
    },
  },
];
