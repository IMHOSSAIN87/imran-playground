import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-AE', {
      style: 'currency',
      currency: 'AED',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-500';
      case 'Under Construction':
        return 'bg-blue-500';
      case 'Upcoming':
        return 'bg-amber-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <Link href={`/projects/${project.id}`}>
      <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
        {/* Image */}
        <div className="relative h-80 overflow-hidden">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          {/* Status Badge */}
          <div className={`absolute top-4 right-4 ${getStatusColor(project.status)} text-white px-4 py-2 rounded-full text-sm font-semibold`}>
            {project.status}
          </div>

          {/* Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h3 className="text-3xl font-bold mb-2 group-hover:text-amber-400 transition-colors">
              {project.name}
            </h3>
            <p className="flex items-center text-sm">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {project.location}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-gray-600 mb-4 line-clamp-3">
            {project.description}
          </p>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-xs text-gray-500 mb-1">Properties</p>
              <p className="text-lg font-bold text-gray-900">{project.properties}</p>
            </div>
            {project.completionDate && (
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-xs text-gray-500 mb-1">Completion</p>
                <p className="text-lg font-bold text-gray-900">{project.completionDate}</p>
              </div>
            )}
          </div>

          <div className="mb-4">
            <p className="text-xs text-gray-500 mb-1">Price Range</p>
            <p className="text-lg font-bold text-amber-600">
              {formatPrice(project.priceRange.min)} - {formatPrice(project.priceRange.max)}
            </p>
          </div>

          {/* Amenities */}
          <div className="mb-4">
            <p className="text-xs text-gray-500 mb-2">Key Amenities</p>
            <div className="flex flex-wrap gap-2">
              {project.amenities.slice(0, 4).map((amenity, index) => (
                <span
                  key={index}
                  className="text-xs bg-amber-50 text-amber-700 px-3 py-1 rounded-full"
                >
                  {amenity}
                </span>
              ))}
              {project.amenities.length > 4 && (
                <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                  +{project.amenities.length - 4} more
                </span>
              )}
            </div>
          </div>

          <button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all shadow-md hover:shadow-lg font-medium">
            Explore Project
          </button>
        </div>
      </div>
    </Link>
  );
}
