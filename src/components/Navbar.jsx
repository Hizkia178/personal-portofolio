import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);


  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.navbar')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);


  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <style jsx>{`
        /* Custom styles for mobile canvas */
        .navbar-canvas {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: rgba(0, 0, 0, 0.8);
          z-index: 1040;
          display: none;
        }

        .navbar-canvas.show {
          display: block;
        }

        .navbar-menu {
          position: fixed;
          top: 0;
          right: -100%;
          width: 280px;
          height: 100vh;
          background: white;
          transition: right 0.3s ease;
          z-index: 1050;
          padding: 2rem 1rem;
          box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
        }

        .navbar-menu.show {
          right: 0;
        }

        .navbar-menu .nav-link {
          padding: 1rem 0;
          border-bottom: 1px solid #f8f9fa;
          color: #333;
          text-decoration: none;
          display: flex;
          align-items: center;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .navbar-menu .nav-link:hover {
          color: #0d6efd;
        }

        .navbar-menu .nav-link.active {
          color: #0d6efd;
        }

        .close-btn {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: none;
          border: none;
          font-size: 1.5rem;
          color: #333;
          cursor: pointer;
        }

        .mobile-toggle {
          background: none;
          border: none;
          padding: 0.25rem 0.5rem;
          cursor: pointer;
        }

        .mobile-toggle i {
          font-size: 1.5rem;
          color: #333;
        }

        /* Hide default bootstrap toggle on mobile */
        @media (max-width: 991.98px) {
          .navbar-toggler {
            border: none;
            padding: 0;
          }
          
          .navbar-toggler:focus {
            box-shadow: none;
          }
          
          .navbar-collapse {
            display: none !important;
          }
        }

        /* Show normal navbar on desktop */
        @media (min-width: 992px) {
          .mobile-toggle {
            display: none;
          }
          
          .navbar-canvas {
            display: none !important;
          }
          
          .navbar-menu {
            display: none !important;
          }
        }
      `}</style>

      <nav
        className="navbar navbar-expand-lg bg-white py-3 shadow fixed-top"
        data-aos="fade-down"
      >
        <div className="container">
          <a className="navbar-brand" href="#" data-aos-delay="600" data-aos="fade-right">
            <i className="bx bx-code-alt me-1"></i> MyPortfolio
          </a>

          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ display: 'none' }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>


          <button
            className="mobile-toggle d-lg-none"
            onClick={toggleNavbar}
            aria-label="Toggle navigation"
          >
            <i className="bx bx-menu"></i>
          </button>

          {/* Desktop Menu */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto" data-aos-delay="600" data-aos="fade-left">
              <li className="nav-item">
                <a className="nav-link active" href="#home">
                  <i className="bx bx-home me-1"></i> Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  <i className="bx bx-id-card me-1"></i> About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">
                  <i className="bx bx-brain me-1"></i> Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#project">
                  <i className="bx bx-code-alt me-1"></i> Project
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  <i className="bx bx-envelope me-1"></i> Contact
                </a>
              </li>
             
            </ul>
          </div>
        </div>
      </nav>


      <div
        className={`navbar-canvas ${isOpen ? 'show' : ''}`}
        onClick={closeNavbar}
      ></div>


      <div className={`navbar-menu ${isOpen ? 'show' : ''}`}>
        <button
          className="close-btn"
          onClick={closeNavbar}
          aria-label="Close menu"
        >
          <i className="bx bx-x"></i>
        </button>

        <div className="mt-4">
          <a className="nav-link active" href="#home" onClick={closeNavbar}>
            <i className="bx bx-home me-2"></i> Home
          </a>
          <a className="nav-link" href="#about" onClick={closeNavbar}>
            <i className="bx bx-id-card me-2"></i> About
          </a>
          <a className="nav-link" href="#skills" onClick={closeNavbar}>
            <i className="bx bx-brain me-2"></i> Skills
          </a>
          <a className="nav-link" href="#project" onClick={closeNavbar}>
            <i className="bx bx-code-alt me-2"></i> Project
          </a>
          <a className="nav-link" href="#contact" onClick={closeNavbar}>
            <i className="bx bx-envelope me-2"></i> Contact
          </a>
        

        </div>
      </div>
    </>
  );
};

export default Navbar;