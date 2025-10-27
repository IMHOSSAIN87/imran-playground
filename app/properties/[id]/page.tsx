import { notFound } from 'next/navigation';
import Link from 'next/link';
import Virtual360Viewer from '@/components/tour/Virtual360Viewer';
import ContactForm from '@/components/ui/ContactForm';
import { properties } from '@/data/properties';

export default function PropertyDetailPage({ params }: { params: { id: string } }) {
  const property = properties.find(p => p.id === params.id);

  if (!property) {
    notFound();
  }

  const formatPrice = (price: number, currency: string) => {
    return new Intl.NumberFormat('en-AE', {
      style: 'currency',
      currency: currency,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-amber-600">Home</Link>
            <span>/</span>
            <Link href="/properties" className="hover:text-amber-600">Properties</Link>
            <span>/</span>
            <span className="text-gray-900">{property.title}</span>
          </div>
        </div>
      </div>

      {/* Virtual Tour / Image Gallery */}
      <section className="bg-white">
        <Virtual360Viewer
          tourUrl={property.tour360}
          images={property.images}
          propertyName={property.title}
        />
      </section>

      {/* Property Details */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Header */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                      {property.title}
                    </h1>
                    <p className="text-gray-600 flex items-center text-lg">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {property.location}, {property.area}
                    </p>
                  </div>
                  <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                    {property.status}
                  </span>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <div>
                    <p className="text-4xl font-bold text-amber-600">
                      {formatPrice(property.price, property.currency)}
                    </p>
                    <p className="text-gray-500 mt-1">{property.type}</p>
                  </div>

                  <div className="flex space-x-6">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-gray-900">{property.bedrooms}</p>
                      <p className="text-sm text-gray-500">Bedrooms</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-gray-900">{property.bathrooms}</p>
                      <p className="text-sm text-gray-500">Bathrooms</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-gray-900">{property.sqft.toLocaleString()}</p>
                      <p className="text-sm text-gray-500">Sq Ft</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Description</h2>
                <p className="text-gray-700 leading-relaxed">
                  {property.description}
                </p>
              </div>

              {/* Property Details */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Property Details</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  <div>
                    <p className="text-gray-500 text-sm mb-1">Property Type</p>
                    <p className="font-semibold text-gray-900">{property.type}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm mb-1">Bedrooms</p>
                    <p className="font-semibold text-gray-900">{property.bedrooms}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm mb-1">Bathrooms</p>
                    <p className="font-semibold text-gray-900">{property.bathrooms}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm mb-1">Area</p>
                    <p className="font-semibold text-gray-900">{property.sqft.toLocaleString()} sqft</p>
                  </div>
                  {property.parkingSpaces && (
                    <div>
                      <p className="text-gray-500 text-sm mb-1">Parking</p>
                      <p className="font-semibold text-gray-900">{property.parkingSpaces} Spaces</p>
                    </div>
                  )}
                  {property.yearBuilt && (
                    <div>
                      <p className="text-gray-500 text-sm mb-1">Year Built</p>
                      <p className="font-semibold text-gray-900">{property.yearBuilt}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Amenities */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Amenities</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {property.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <svg className="w-5 h-5 text-amber-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Location</h2>
                <div className="bg-gray-100 rounded-lg p-6 flex items-center justify-center h-64">
                  <div className="text-center">
                    <svg className="w-16 h-16 mx-auto text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="text-gray-600 font-medium">{property.location}, {property.area}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <ContactForm propertyId={property.id} propertyTitle={property.title} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
