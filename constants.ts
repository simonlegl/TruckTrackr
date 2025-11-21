import { FoodTruck } from './types';

export const MOCK_TRUCKS: FoodTruck[] = [
  {
    id: '1',
    name: 'Taco Titan',
    cuisine: 'Mexican',
    rating: 4.8,
    reviewCount: 124,
    image: 'https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?auto=format&fit=crop&w=150&q=80',
    coverImage: 'https://images.unsplash.com/photo-1552332386-f8dd003f96a2?auto=format&fit=crop&w=1000&q=80',
    location: { lat: 40, lng: 30, address: 'University Square' },
    status: 'OPEN',
    distance: '0.2 mi',
    isOpen: true,
    menu: [
      { id: 'm1', name: 'Carne Asada Tacos', description: 'Grilled steak with cilantro and onion', price: 9.50, popular: true, image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=500&q=80' },
      { id: 'm2', name: 'Al Pastor Burrito', description: 'Marinated pork with pineapple', price: 11.00, image: 'https://images.unsplash.com/photo-1574653853027-5382a3d23a15?auto=format&fit=crop&w=500&q=80' },
      { id: 'm3', name: 'Churros', description: 'Cinnamon sugar pastry', price: 4.00, image: 'https://images.unsplash.com/photo-1624371414361-e670edf4898d?auto=format&fit=crop&w=500&q=80' }
    ]
  },
  {
    id: '2',
    name: 'Burger Bus',
    cuisine: 'American',
    rating: 4.5,
    reviewCount: 89,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=150&q=80',
    coverImage: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1000&q=80',
    location: { lat: 60, lng: 70, address: 'Science Quad' },
    status: 'OPEN',
    distance: '0.5 mi',
    isOpen: true,
    menu: [
      { id: 'b1', name: 'Classic Smash', description: 'Double patty, cheese, secret sauce', price: 12.00, popular: true, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=80' },
      { id: 'b2', name: 'Veggie Delight', description: 'Black bean patty with avocado', price: 11.50, image: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=500&q=80' },
      { id: 'b3', name: 'Truffle Fries', description: 'Parmesan and truffle oil', price: 6.00, image: 'https://images.unsplash.com/photo-1573080496987-aeb4d9171d55?auto=format&fit=crop&w=500&q=80' }
    ]
  },
  {
    id: '3',
    name: 'Wok & Roll',
    cuisine: 'Asian Fusion',
    rating: 4.9,
    reviewCount: 210,
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=150&q=80',
    coverImage: 'https://images.unsplash.com/photo-1541696490865-e6f720e9919a?auto=format&fit=crop&w=1000&q=80',
    location: { lat: 20, lng: 80, address: 'Library Corner' },
    status: 'OPEN',
    distance: '0.8 mi',
    isOpen: true,
    menu: [
      { id: 'w1', name: 'Spicy Tuna Bowl', description: 'Fresh tuna, rice, spicy mayo', price: 14.00, popular: true, image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=500&q=80' },
      { id: 'w2', name: 'Pork Dumplings', description: 'Handmade pan-fried dumplings', price: 8.00, image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c423c?auto=format&fit=crop&w=500&q=80' },
    ]
  },
  {
    id: '4',
    name: 'Curry Cruiser',
    cuisine: 'Indian',
    rating: 4.6,
    reviewCount: 56,
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356f36?auto=format&fit=crop&w=150&q=80',
    coverImage: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=1000&q=80',
    location: { lat: 80, lng: 20, address: 'Dormitory Row' },
    status: 'MOVING',
    distance: '1.2 mi',
    isOpen: false,
    menu: [
      { id: 'c1', name: 'Butter Chicken', description: 'Creamy tomato curry with rice', price: 13.00, popular: true, image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=500&q=80' },
      { id: 'c2', name: 'Samosa Chat', description: 'Samosa topped with chutneys', price: 7.00, image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=500&q=80' },
    ]
  }
];

export const LOYALTY_REWARDS = [
  { points: 50, reward: 'Free Drink' },
  { points: 100, reward: '$5 Off Order' },
  { points: 250, reward: 'Free Meal' },
];

export const SYSTEM_INSTRUCTION = `
You are the AI assistant for TruckTrackr, a food truck discovery app for university students.
Your goal is to help students find food, track orders, and understand the loyalty program.
You also help vendors understand their analytics.
Context:
- We have trucks like Taco Titan, Burger Bus, Wok & Roll.
- Students earn points for every order.
- Vendors pay 6% on sales and can subscribe to premium analytics ($49-$149/mo).
Keep answers short, friendly, and helpful.
`;

export const TEAM_MEMBERS = [
  { 
    name: "Simon L.", 
    role: "Finance", 
    desc: "Financial strategy & business operations", 
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=400&q=80" // Blue hoodie lookalike
  },
  { 
    name: "Bogdan", 
    role: "Branding & Product", 
    desc: "Product design & brand strategy", 
    image: "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?auto=format&fit=crop&w=400&q=80" // White shirt lookalike
  },
  { 
    name: "Simon M.", 
    role: "Partnerships", 
    desc: "Campus outreach & vendor relations", 
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80" // Blue polo/outdoors lookalike
  },
  { 
    name: "Arnd", 
    role: "CTO", 
    desc: "App development & data analytics expert", 
    image: "https://images.unsplash.com/photo-1520341280432-4749d4d7bcf9?auto=format&fit=crop&w=400&q=80" // Cap/Hoodie lookalike
  }
];

export const MARKET_STATS = [
  { label: "Market Value (2025)", value: "$2.48B" },
  { label: "Annual Growth", value: "17.4%" },
  { label: "Millennial Preference", value: "60%+" },
];

export const UPCOMING_EVENTS = [
  { name: "Campus Taco Fest", date: "Oct 24", location: "Main Quad" },
  { name: "Late Night Bites", date: "Nov 02", location: "Dorm Row" },
  { name: "Vegan Truck Rally", date: "Nov 15", location: "Science Park" },
];