export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  currency: string;
  location: string;
  area: string;
  type: 'Villa' | 'Apartment' | 'Townhouse' | 'Penthouse';
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  images: string[];
  tour360?: string;
  amenities: string[];
  status: 'Available' | 'Sold' | 'Reserved';
  featured: boolean;
  projectId: string;
  yearBuilt?: number;
  parkingSpaces?: number;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  location: string;
  image: string;
  images: string[];
  properties: number;
  priceRange: {
    min: number;
    max: number;
  };
  amenities: string[];
  completionDate?: string;
  status: 'Upcoming' | 'Under Construction' | 'Completed';
}

export interface SearchFilters {
  type?: string;
  location?: string;
  minPrice?: number;
  maxPrice?: number;
  bedrooms?: number;
  bathrooms?: number;
  minSqft?: number;
  maxSqft?: number;
  amenities?: string[];
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
  propertyId?: string;
  inquiryType: 'General' | 'Property' | 'Project' | 'Tour';
}
