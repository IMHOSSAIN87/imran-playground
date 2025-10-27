'use client';

import { useState } from 'react';
import PropertyCard from '@/components/property/PropertyCard';
import SearchFilters from '@/components/search/SearchFilters';
import { properties } from '@/data/properties';
import { SearchFilters as SearchFiltersType } from '@/types';

export default function PropertiesPage() {
  const [filteredProperties, setFilteredProperties] = useState(properties);

  const handleFilterChange = (filters: SearchFiltersType) => {
    let filtered = [...properties];

    if (filters.type) {
      filtered = filtered.filter(p => p.type === filters.type);
    }

    if (filters.location) {
      filtered = filtered.filter(p => p.location === filters.location);
    }

    if (filters.minPrice) {
      filtered = filtered.filter(p => p.price >= filters.minPrice!);
    }

    if (filters.maxPrice) {
      filtered = filtered.filter(p => p.price <= filters.maxPrice!);
    }

    if (filters.bedrooms) {
      filtered = filtered.filter(p => p.bedrooms >= filters.bedrooms!);
    }

    if (filters.bathrooms) {
      filtered = filtered.filter(p => p.bathrooms >= filters.bathrooms!);
    }

    if (filters.minSqft) {
      filtered = filtered.filter(p => p.sqft >= filters.minSqft!);
    }

    if (filters.maxSqft) {
      filtered = filtered.filter(p => p.sqft <= filters.maxSqft!);
    }

    setFilteredProperties(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-500 to-amber-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Luxury Properties
          </h1>
          <p className="text-xl max-w-2xl">
            Explore our exclusive collection of premium properties in Dubai's most sought-after locations
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <SearchFilters onFilterChange={handleFilterChange} />
            </div>

            {/* Properties Grid */}
            <div className="lg:col-span-3">
              <div className="mb-6 flex items-center justify-between">
                <p className="text-gray-700">
                  <span className="font-bold text-xl">{filteredProperties.length}</span> properties found
                </p>
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent">
                  <option>Sort by: Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest First</option>
                  <option>Size: Largest First</option>
                </select>
              </div>

              {filteredProperties.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredProperties.map((property) => (
                    <PropertyCard key={property.id} property={property} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20">
                  <svg
                    className="w-24 h-24 mx-auto text-gray-300 mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  <h3 className="text-2xl font-bold text-gray-700 mb-2">No Properties Found</h3>
                  <p className="text-gray-500">Try adjusting your search filters</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
