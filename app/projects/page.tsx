import ProjectCard from '@/components/property/ProjectCard';
import { projects } from '@/data/projects';

export default function ProjectsPage() {
  const upcomingProjects = projects.filter(p => p.status === 'Upcoming');
  const underConstructionProjects = projects.filter(p => p.status === 'Under Construction');
  const completedProjects = projects.filter(p => p.status === 'Completed');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-500 to-amber-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Premium Projects
          </h1>
          <p className="text-xl max-w-2xl">
            Explore our master-planned communities and iconic developments across Dubai
          </p>
        </div>
      </section>

      {/* Under Construction */}
      {underConstructionProjects.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Under Construction</h2>
              <p className="text-gray-600">Projects currently under development</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {underConstructionProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Completed Projects */}
      {completedProjects.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Completed Projects</h2>
              <p className="text-gray-600">Move-in ready communities</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {completedProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Upcoming Projects */}
      {upcomingProjects.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Upcoming Projects</h2>
              <p className="text-gray-600">Future developments coming soon</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Interested in Our Projects?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            Contact us to learn more about investment opportunities and available units
          </p>
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-3 rounded-full hover:from-amber-600 hover:to-amber-700 transition-all shadow-lg hover:shadow-xl font-medium"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
