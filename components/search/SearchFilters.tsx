'use client';

import { useState } from 'react';
import { SearchFilters as SearchFiltersType } from '@/types';

interface SearchFiltersProps {
  onFilterChange: (filters: SearchFiltersType) => void;
}

export default function SearchFilters({ onFilterChange }: SearchFiltersProps) {
  const [filters, setFilters] = useState<SearchFiltersType>({});
  const [isExpanded, setIsExpanded] = useState(false);

  const handleFilterChange = (key: keyof SearchFiltersType, value: any) => {
    const newFilters = { ...filters, [key]: value || undefined };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const clearFilters = () => {
    setFilters({});
    onFilterChange({});
  };

  const propertyTypes = ['Villa', 'Apartment', 'Townhouse', 'Penthouse'];
  const locations = ['Dubai Hills Estate', 'Dubai Marina', 'Arabian Ranches', 'DAMAC Hills', 'Dubai Harbour', 'Dubailand'];
  const bedroomOptions = [1, 2, 3, 4, 5, 6];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-900">Search Filters</h2>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="md:hidden text-amber-600 font-medium"
        >
          {isExpanded ? 'Hide' : 'Show'} Filters
        </button>
      </div>

      <div className={`space-y-4 ${isExpanded ? 'block' : 'hidden md:block'}`}>
        {/* Property Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Property Type
          </label>
          <select
            value={filters.type || ''}
            onChange={(e) => handleFilterChange('type', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          >
            <option value="">All Types</option>
            {propertyTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Location
          </label>
          <select
            value={filters.location || ''}
            onChange={(e) => handleFilterChange('location', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          >
            <option value="">All Locations</option>
            {locations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>

        {/* Price Range */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Price Range (AED)
          </label>
          <div className="grid grid-cols-2 gap-2">
            <input
              type="number"
              placeholder="Min"
              value={filters.minPrice || ''}
              onChange={(e) => handleFilterChange('minPrice', e.target.value ? Number(e.target.value) : undefined)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
            <input
              type="number"
              placeholder="Max"
              value={filters.maxPrice || ''}
              onChange={(e) => handleFilterChange('maxPrice', e.target.value ? Number(e.target.value) : undefined)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Bedrooms */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Bedrooms
          </label>
          <select
            value={filters.bedrooms || ''}
            onChange={(e) => handleFilterChange('bedrooms', e.target.value ? Number(e.target.value) : undefined)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          >
            <option value="">Any</option>
            {bedroomOptions.map((num) => (
              <option key={num} value={num}>
                {num}+ Beds
              </option>
            ))}
          </select>
        </div>

        {/* Bathrooms */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Bathrooms
          </label>
          <select
            value={filters.bathrooms || ''}
            onChange={(e) => handleFilterChange('bathrooms', e.target.value ? Number(e.target.value) : undefined)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          >
            <option value="">Any</option>
            {bedroomOptions.map((num) => (
              <option key={num} value={num}>
                {num}+ Baths
              </option>
            ))}
          </select>
        </div>

        {/* Square Feet */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Square Feet
          </label>
          <div className="grid grid-cols-2 gap-2">
            <input
              type="number"
              placeholder="Min sqft"
              value={filters.minSqft || ''}
              onChange={(e) => handleFilterChange('minSqft', e.target.value ? Number(e.target.value) : undefined)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
            <input
              type="number"
              placeholder="Max sqft"
              value={filters.maxSqft || ''}
              onChange={(e) => handleFilterChange('maxSqft', e.target.value ? Number(e.target.value) : undefined)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Clear Filters Button */}
        <button
          onClick={clearFilters}
          className="w-full bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors font-medium"
        >
          Clear All Filters
        </button>
      </div>
    </div>
  );
}
