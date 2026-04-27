import { Wind, Sparkles, Droplets, ShoppingBag } from 'lucide-react';

export const navItems = [
  { name: 'Dry Wash', icon: Wind, color: 'from-blue-500 to-cyan-500' },
  { name: 'Premium Wash', icon: Sparkles, color: 'from-purple-500 to-pink-500', badge: 'Popular' },
  { name: 'Laundry', icon: Droplets, color: 'from-blue-600 to-blue-400' },
  { name: 'Shoe Cleaning', icon: ShoppingBag, color: 'from-green-500 to-emerald-500', badge: 'Best Seller' },
];

export const servicePincodes = [
  '570017', '570016', '570015', '570001', '570002', '570003', '570004', '570005', '570006', '570007',
  '570008', '570009', '570010', '570011', '570012', '570020', '570021', '570022', '570023',
];

export const pickupTimeSlots = [
  '9:00 AM - 11:00 AM',
  '11:00 AM - 1:00 PM',
  '1:00 PM - 3:00 PM',
  '3:00 PM - 5:00 PM',
  '5:00 PM - 7:00 PM',
];

export const promoCodes = {
  FIRST10: { discount: 10, description: 'First Order 10% Off' },
  WASH20: { discount: 20, description: '20% Off on All Services' },
  SAVE50: { discount: 50, description: 'Flat ₹50 Off' },
};
