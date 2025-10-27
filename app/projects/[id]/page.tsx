import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import ContactForm from '@/components/ui/ContactForm';
import { projects } from '@/data/projects';
import { properties } from '@/data/properties';

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = projects.find(p => p.id === params.id);

  if (!project) {
    notFound();
  }

  const projectProperties = properties.filter(p => p.projectId === params.id);

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
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-amber-600">Home</Link>
            <span>/</span>
            <Link href="/projects" className="hover:text-amber-600">Projects</Link>
            <span>/</span>
            <span className="text-gray-900">{project.name}</span>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <section className="relative h-[400px] md:h-[600px]">
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
          <div className="container mx-auto">
            <div className={`${getStatusColor(project.status)} inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4`}>
              {project.status}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{project.name}</h1>
            <p className="text-xl flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {project.location}
            </p>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Overview</h2>
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  {project.description}
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-6 border-t border-gray-100">
                  <div>
                    <p className="text-gray-500 text-sm mb-1">Total Properties</p>
                    <p className="text-2xl font-bold text-gray-900">{project.properties}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm mb-1">Price Range</p>
                    <p className="text-lg font-bold text-amber-600">
                      {formatPrice(project.priceRange.min)} - {formatPrice(project.priceRange.max)}
                    </p>
                  </div>
                  {project.completionDate && (
                    <div>
                      <p className="text-gray-500 text-sm mb-1">Completion</p>
                      <p className="text-2xl font-bold text-gray-900">{project.completionDate}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Amenities */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">World-Class Amenities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center space-x-3 bg-amber-50 p-4 rounded-lg">
                      <svg className="w-6 h-6 text-amber-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 font-medium">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image Gallery */}
              {project.images && project.images.length > 1 && (
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Gallery</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {project.images.map((image, index) => (
                      <div key={index} className="relative h-48 rounded-lg overflow-hidden">
                        <Image
                          src={image}
                          alt={`${project.name} - Image ${index + 1}`}
                          fill
                          className="object-cover hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Available Properties */}
              {projectProperties.length > 0 && (
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Available Properties ({projectProperties.length})
                  </h2>
                  <div className="space-y-4">
                    {projectProperties.map((property) => (
                      <Link
                        key={property.id}
                        href={`/properties/${property.id}`}
                        className="block border border-gray-200 rounded-lg p-4 hover:border-amber-500 hover:shadow-md transition-all"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-1">{property.title}</h3>
                            <p className="text-sm text-gray-500">
                              {property.bedrooms} Beds • {property.bathrooms} Baths • {property.sqft.toLocaleString()} sqft
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-xl font-bold text-amber-600">
                              {new Intl.NumberFormat('en-AE', {
                                style: 'currency',
                                currency: property.currency,
                                maximumFractionDigits: 0,
                              }).format(property.price)}
                            </p>
                            <p className="text-sm text-gray-500">{property.type}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
