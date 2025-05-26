import { useState, useEffect } from 'react';
import { initTooltips } from '../functions/Tooltip';

const Project = () => {
  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    initTooltips();
  }, []);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      longDesc: 'Developed a responsive e-commerce platform with product filtering, cart management, and secure payment integration using Stripe. The project focused on delivering a seamless user experience with fast load times and intuitive navigation.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=300&h=200&fit=crop',
      previewLink: 'https://example.com/ecommerce',
      githubLink: 'https://github.com/example/ecommerce',
      languages: ['React', 'Node.js', 'Stripe', 'CSS'],
      team: ['Fajar Ramadhan (Lead Developer)', 'Sarah UI (Designer)', 'John Backend (API Developer)'],
    },
    {
      id: 2,
      title: 'Task Management App',
      longDesc: 'Built a task management application with real-time collaboration features, drag-and-drop task boards, and user authentication. The app integrates with third-party APIs for notifications and cloud storage.',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=300&h=200&fit=crop',
      previewLink: 'https://example.com/taskapp',
      githubLink: 'https://github.com/example/taskapp',
      languages: ['React', 'Firebase', 'Tailwind CSS'],
      team: ['Fajar Ramadhan (Frontend)', 'Lisa Wong (Backend)', 'Mike Chen (QA)'],
    },
    {
      id: 3,
      title: 'Portfolio Website',
      longDesc: 'Designed and developed a personal portfolio website with a modern UI, smooth animations, and responsive design. Optimized for performance and SEO, with integration of contact forms and social media links.',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=300&h=200&fit=crop',
      previewLink: 'https://example.com/portfolio',
      githubLink: 'https://github.com/example/portfolio',
      languages: ['React', 'Bootstrap', 'JavaScript'],
      team: ['Fajar Ramadhan (Solo Developer)'],
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      longDesc: 'Created a weather dashboard that fetches real-time data from a weather API, displaying forecasts with interactive charts and location-based updates. The app features a clean, minimalistic design.',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=300&h=200&fit=crop',
      previewLink: 'https://example.com/weather',
      githubLink: 'https://github.com/example/weather',
      languages: ['React', 'Chart.js', 'API'],
      team: ['Fajar Ramadhan (Developer)', 'Anna Lee (Designer)'],
    },
    {
      id: 5,
      title: 'Blog Platform',
      longDesc: 'Developed a blog platform with a custom CMS, allowing users to create, edit, and publish posts with rich media. Includes user authentication, commenting system, and SEO optimization.',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=300&h=200&fit=crop',
      previewLink: 'https://example.com/blog',
      githubLink: 'https://github.com/example/blog',
      languages: ['React', 'Node.js', 'MongoDB'],
      team: ['Fajar Ramadhan (Full Stack)', 'Tom Harris (Content Manager)'],
    },
    {
      id: 6,
      title: 'Fitness Tracker',
      longDesc: 'Built a fitness tracking app with features for logging workouts, tracking progress, and setting goals. Includes integration with wearable devices and a gamified user experience to boost engagement.',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=300&h=200&fit=crop',
      previewLink: 'https://example.com/fitness',
      githubLink: 'https://github.com/example/fitness',
      languages: ['React', 'TypeScript', 'GraphQL'],
      team: ['Fajar Ramadhan (Frontend)', 'Emma Brown (Backend)', 'Jake Smith (Tester)'],
    },
  ];

  return (
    <>
      <style jsx>{`
        .project-bg {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          position: relative;
          overflow: hidden;
          padding: 60px 0;
        }

        .project-bg::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23667eea' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          z-index: 1;
        }

        .project-content {
          position: relative;
          z-index: 2;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #2c3e50;
          position: relative;
          display: inline-block;
          margin-bottom: 1rem;
        }

        .section-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 4px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 2px;
        }

        .project-card {
          background: white;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          position: relative;
          cursor: pointer;
        }
        .project-img {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }

        .project-body {
          padding: 20px;
          position: relative;
        }

        .project-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: #2c3e50;
          margin-bottom: 10px;
        }

        .project-languages {
          font-size: 0.85rem;
          color: #6c757d;
          margin-top: 10px;
        }

        .project-links {
          position: absolute;
          top: 10px;
          right: 10px;
          display: flex;
          gap: 10px;
        }

        .project-link {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 16px;
          transition: transform 0.3s ease;
          text-decoration: none;
        }

        .project-link:hover {
          transform: translateY(-3px);
          color: white;
        }

        .project-details {
          max-height: 0;
          overflow: hidden;
          background: #f8f9fa;
          padding: 0 20px;
          transition: max-height 0.5s ease, padding 0.5s ease;
        }

        .project-details.expanded {
          max-height: 400px; /* Adjusted for content */
          padding: 20px;
        }

        .details-desc {
          color: #6c757d;
          line-height: 1.8;
          margin-bottom: 15px;
        }

        .details-team,
        .details-languages {
          color: #6c757d;
          margin-bottom: 15px;
        }

        .details-team strong,
        .details-languages strong {
          color: #2c3e50;
        }

        .btn-gradient {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border: none;
          color: white;
          padding: 12px 30px;
          border-radius: 25px;
          font-weight: 600;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }

        .btn-gradient:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(102, 126, 234, 0.4);
          color: white;
        }

        .btn-outline-gradient {
          border: 2px solid transparent;
          background: linear-gradient(white, white) padding-box,
            linear-gradient(135deg, #667eea, #764ba2) border-box;
          color: #2c3e50;
          padding: 12px 30px;
          border-radius: 25px;
          font-weight: 600;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }

        .btn-outline-gradient:hover {
          transform: translateY(-3px);
          color: #667eea;
        }
      `}</style>

      <section className="project-bg py-5" id="project" data-aos-duration="1000" data-aos="fade-down">
        <div className="container project-content">
          <div className="text-center mb-5" data-aos-delay="600" data-aos="fade-up">
            <h2 className="section-title">My Projects</h2>
            <p className="lead text-muted">A showcase of my recent works and creative solutions</p>
          </div>

          <div className="row">
            {projects.map((project) => (
              <div key={project.id} className="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay={project.id * 100}>
                <div
                  className="project-card"
                  onClick={() => toggleExpand(project.id)}
                  role="button"
                  aria-label={`Toggle details for ${project.title}`}
                >
                  <img src={project.image} alt={project.title} className="project-img" />
                  <div className="project-body">
                    <div className="project-links">
                      <a
                        href={project.previewLink}
                        className="project-link"
                        data-bs-toggle="tooltip"
                        title="See Preview"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <i className="bx bx-link-external"></i>
                      </a>
                      <a
                        href={project.githubLink}
                        className="project-link"
                        data-bs-toggle="tooltip"
                        title="View GitHub"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <i className="bx bxl-github"></i>
                      </a>
                    </div>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-languages">
                      <strong>Tech:</strong> {project.languages.join(', ')}
                    </p>
                  </div>
                  <div className={`project-details ${expandedId === project.id ? 'expanded' : ''}`}>
                    <p className="details-desc">{project.longDesc}</p>
                    <p className="details-team">
                      <strong>Team:</strong> {project.team.join(', ')}
                    </p>
                    <p className="details-languages">
                      <strong>Technologies:</strong> {project.languages.join(', ')}
                    </p>
                    <div className="d-flex gap-3">
                      <a href="mailto:Fajarramadhan561@gmail.com" className="btn-gradient" data-bs-toggle="tooltip" title='Hire Now'>
                        <i className="bx bx-briefcase"></i> Hire Now
                      </a>
                      <a href="tel:+6281234567890" className="btn-outline-gradient" data-bs-toggle="tooltip" title='Chat Us'>
                        <i className="bx bx-chat"></i> Chat Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;