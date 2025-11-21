export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
  popular?: boolean;
}

export interface FoodTruck {
  id: string;
  name: string;
  cuisine: string;
  rating: number;
  reviewCount: number;
  image: string;
  coverImage: string;
  location: {
    lat: number; // Relative coordinates for the mock map (0-100)
    lng: number; // Relative coordinates for the mock map (0-100)
    address: string;
  };
  status: 'OPEN' | 'CLOSED' | 'MOVING';
  distance: string; // Formatted string, e.g., "0.2 mi"
  menu: MenuItem[];
  isOpen: boolean;
}

export interface OrderItem extends MenuItem {
  quantity: number;
}

export interface UserProfile {
  id: string;
  name: string;
  role: 'STUDENT' | 'VENDOR';
  loyaltyPoints: number;
}

export enum ViewState {
  LOGIN = 'LOGIN',
  HOME = 'HOME', // Map & List
  DETAILS = 'DETAILS',
  LOYALTY = 'LOYALTY',
  VENDOR_DASHBOARD = 'VENDOR_DASHBOARD',
  PROFILE = 'PROFILE'
}