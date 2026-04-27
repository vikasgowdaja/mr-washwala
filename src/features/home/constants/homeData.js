import {
  Users,
  Building2,
  Heart,
  GraduationCap,
  Megaphone,
  Monitor,
  Camera,
  Coffee,
  Briefcase,
  TrendingUp,
  Globe,
  BookOpen,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
} from 'lucide-react';

export const navLinks = [
  'Home',
  'About Us',
  'Reviews',
  'Gallery',
  'Resources',
  'Clients',
  'Contact Us',
];

export const stats = [
  { value: '13,000+', label: 'Students Placed', icon: Users },
  { value: '90+', label: 'Corporate Partnerships', icon: Building2 },
  { value: '30+', label: 'Free Trainings', icon: Heart },
  { value: '17+', label: 'Educational Collaborations', icon: GraduationCap },
];

export const services = [
  {
    icon: GraduationCap,
    title: 'Ed-Tech',
    desc: 'University collaborations, EdTech management, and free training for underprivileged students.',
    gradient: 'from-violet-500 to-purple-700',
  },
  {
    icon: Megaphone,
    title: 'Social Media Marketing',
    desc: 'Strategic digital marketing solutions to grow your brand presence across all platforms.',
    gradient: 'from-pink-500 to-rose-600',
  },
  {
    icon: Monitor,
    title: 'Bus Branding & Billboards',
    desc: 'High-impact outdoor advertising with bus branding and billboard campaigns across Karnataka.',
    gradient: 'from-blue-500 to-indigo-700',
  },
  {
    icon: Camera,
    title: 'Studio Space',
    desc: 'Professional studio space for shoots, recordings, and creative productions.',
    gradient: 'from-fuchsia-500 to-pink-700',
  },
  {
    icon: Coffee,
    title: 'Co-working Space',
    desc: 'Flexible and collaborative co-working environments for startups and freelancers.',
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    icon: Briefcase,
    title: 'Manpower Supply',
    desc: 'End-to-end blue-collar workforce solutions, HR staffing, and talent acquisition.',
    gradient: 'from-emerald-500 to-teal-700',
  },
];

export const serviceCategories = [
  {
    icon: Users,
    title: 'HR Management & Staffing Services',
    items: [
      'HR Operations & Consulting',
      'Payroll Management',
      'Corporate HR Partnerships',
      'Talent Acquisition & Recruitment',
    ],
  },
  {
    icon: GraduationCap,
    title: 'Education & Training Solutions',
    items: [
      'University/College Collaborations',
      'EdTech Management',
      'Free Training for Underprivileged',
      'Upskilling Programs',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Business Consulting & Strategic Services',
    items: [
      'SME & Startup Advisory',
      'Business Management Consulting',
      'Corporate Training & Development',
      'Client Portfolio Management',
    ],
  },
  {
    icon: Globe,
    title: 'Sector-Specific Engagements',
    items: [
      'Pharmaceutical Industry Partnerships',
      'Blue-Collar Workforce Management',
      'Student & Professional Placements',
      'CSR & Community Development',
    ],
  },
];

export const reviews = [
  { name: 'Rajesh Kumar', text: 'CONNECT2FUTURE helped me secure my dream job!', rating: 5 },
  { name: 'Priya Patel', text: 'The training was top-notch, and I got placed quickly!', rating: 5 },
  { name: 'Rohan Mehta', text: 'Excellent guidance throughout my job search journey!', rating: 5 },
  { name: 'Sneha Gupta', text: 'I appreciated the personalized approach to career counseling.', rating: 5 },
];

export const howItWorks = [
  { step: '01', icon: BookOpen, title: 'Enroll Today', desc: 'Sign up for our training programs.' },
  { step: '02', icon: GraduationCap, title: 'Get Trained', desc: 'Participate in comprehensive training sessions.' },
  { step: '03', icon: CheckCircle, title: 'Secure Your Placement', desc: 'Receive job placement assistance.' },
];

export const contactCards = [
  { icon: Phone, title: 'Phone', lines: ['+91 7019436720', '+91 8971170406'] },
  { icon: Mail, title: 'Email', lines: ['docs@connect2future.com', 'support@connect2future.com'] },
  { icon: MapPin, title: 'Main Branch', lines: ['1st cross, near Chiranthana,', 'Satyamangala, Hassan, KA 563201'] },
  { icon: Clock, title: 'Office Hours', lines: ['Mon - Sat', '09:00 - 18:00'] },
];

export const quickLinks = ['Home', 'About Us', 'Reviews', 'Gallery', 'Resources', 'Clients', 'Contact Us'];

export const footerServices = [
  'HR Management & Staffing',
  'Education & Training',
  'Business Consulting',
  'Sector-Specific Engagements',
  'Studio Space',
  'Franchise Module',
];
