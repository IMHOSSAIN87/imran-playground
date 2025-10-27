import Link from 'next/link';
import PropertyCard from '@/components/property/PropertyCard';
import ProjectCard from '@/components/property/ProjectCard';
import { properties } from '@/data/properties';
import { projects } from '@/data/projects';

export default function Home() {
  const featuredProperties = properties.filter(p => p.featured).slice(0, 3);
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] flex items-center justify-center text-white">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600)',
            }}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Discover Luxury Living
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Experience world-class properties in Dubai's most prestigious locations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/properties"
              className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-full hover:from-amber-600 hover:to-amber-700 transition-all shadow-lg hover:shadow-xl font-semibold text-lg"
            >
              Explore Properties
            </Link>
            <Link
              href="/contact"
              className="bg-white text-gray-900 px-8 py-4 rounded-full hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl font-semibold text-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-amber-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-amber-600 mb-2">500+</div>
              <div className="text-gray-700 font-medium">Luxury Properties</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-amber-600 mb-2">50+</div>
              <div className="text-gray-700 font-medium">Exclusive Projects</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-amber-600 mb-2">98%</div>
              <div className="text-gray-700 font-medium">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-amber-600 mb-2">25+</div>
              <div className="text-gray-700 font-medium">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured Properties
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Handpicked selection of our most exclusive properties
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/properties"
              className="inline-block bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-3 rounded-full hover:from-amber-600 hover:to-amber-700 transition-all shadow-md hover:shadow-lg font-medium"
            >
              View All Properties
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Premium Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our master-planned communities and developments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/projects"
              className="inline-block bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-3 rounded-full hover:from-amber-600 hover:to-amber-700 transition-all shadow-md hover:shadow-lg font-medium"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose DAMAC360
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Your trusted partner in luxury real estate
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Verified Listings</h3>
              <p className="text-gray-300">
                All properties are thoroughly verified and authenticated
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Virtual Tours</h3>
              <p className="text-gray-300">
                Experience properties through immersive 360° virtual tours
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Expert Support</h3>
              <p className="text-gray-300">
                Dedicated team to guide you through every step
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-amber-500 to-amber-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Find Your Dream Home?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let our experts help you discover the perfect property that matches your lifestyle
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-amber-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl font-semibold text-lg"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
