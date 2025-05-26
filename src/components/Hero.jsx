import React, { useEffect, useRef } from 'react';
import { initTooltips } from '../functions/Tooltip';
import { initPopovers } from "../functions/Popover";

const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    initTooltips();
    initPopovers();
    const texts = [
      "Frontend Developer",
      "React Specialist",
      "UI/UX Enthusiast",
      "JavaScript Expert"
    ];

    let currentTextIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;

    const typeText = () => {
      const currentText = texts[currentTextIndex];

      if (isDeleting) {
        typedRef.current.textContent = currentText.substring(0, currentCharIndex - 1);
        currentCharIndex--;

        if (currentCharIndex === 0) {
          isDeleting = false;
          currentTextIndex = (currentTextIndex + 1) % texts.length;
        }
      } else {
        typedRef.current.textContent = currentText.substring(0, currentCharIndex + 1);
        currentCharIndex++;

        if (currentCharIndex === currentText.length) {
          isDeleting = true;
          setTimeout(typeText, 2000);
          return;
        }
      }

      setTimeout(typeText, isDeleting ? 50 : 100);
    };

    typeText();
  }, []);

  return (
    <>
      {/* Custom CSS */}
      <style jsx>{`
        .gradient-text {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .hero-bg {
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
          min-height: 100vh;
          position: relative;
          padding-top:80px;
          overflow: hidden;
        }
        
        .hero-bg::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          z-index: 1;
        }
        
        .hero-content {
          position: relative;
          z-index: 2;
        }
        
        .console-container {
          background: #1e1e1e;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
          overflow: hidden;
          font-family: 'Courier New', monospace;
          position: relative;
        }
        
        .console-header {
          background: #2d2d2d;
          padding: 12px 16px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .console-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }
        
        .console-body {
          padding: 20px;
          color: #00ff00;
          font-size: 14px;
          line-height: 1.6;
          height: 300px;
          overflow-y: auto;
        }
        
        .profile-img {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          object-fit: cover;
          border: 4px solid #667eea;
          box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
          transition: transform 0.3s ease;
        }
        
        .profile-img:hover {
          transform: scale(1.05);
        }
        
        .btn-gradient {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border: none;
          color: white;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .btn-gradient:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(102, 126, 234, 0.4);
          color: white;
        }
        
        .social-icons {
          display: flex;
          gap: 15px;
          justify-content: center;
          margin-top: 20px;
        }
        
        .social-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          text-decoration: none;
          transition: transform 0.3s ease;
          font-size: 18px;
        }
        
        .social-icon:hover {
          transform: translateY(-3px) scale(1.1);
          color: white;
        }
        
        .typing-cursor {
          animation: blink 1s infinite;
        }
        
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        
        .floating-shapes {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 1;
        }
        
        .shape {
          position: absolute;
          opacity: 0.1;
          animation: float 6s ease-in-out infinite;
        }
        
        .shape:nth-child(1) {
          top: 20%;
          left: 10%;
          animation-delay: 0s;
        }
        
        .shape:nth-child(2) {
          top: 60%;
          right: 10%;
          animation-delay: 2s;
        }
        
        .shape:nth-child(3) {
          bottom: 20%;
          left: 20%;
          animation-delay: 4s;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }

         .scroll-down {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          text-decoration: none;
          font-size: 24px;
          animation: scrollFloat 2s ease-in-out infinite;
          transition: all 0.3s ease;
          z-index: 10;
        }   
        @keyframes scrollFloat {
          0%, 100% { transform: translateX(-50%) translateY(0px); }
          50% { transform: translateX(-50%) translateY(-10px); }
        }
      `}</style>

      <section className="hero-bg d-flex  align-items-center" data-aos-duration="1000" data-aos="fade-down" id='home'>
        <div className="floating-shapes">
          <div className="shape">
            <i className="bx bx-code-alt" style={{ fontSize: '60px', color: '#667eea' }}></i>
          </div>
          <div className="shape">
            <i className="bx bx-laptop" style={{ fontSize: '50px', color: '#764ba2' }}></i>
          </div>
          <div className="shape">
            <i className="bx bx-rocket" style={{ fontSize: '55px', color: '#667eea' }}></i>
          </div>
        </div>

        <div className="container hero-content" data-aos="fade-up" data-aos-duration="1000">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="mb-4" data-aos-delay="500" data-aos="fade-right">
                <h1 className="display-4 fw-bold mb-3">
                  Hi, I am <span className="gradient-text">Fajar</span>
                </h1>
                <h2 className="h3 mb-4">
                  I'm a <span ref={typedRef} className="gradient-text"></span>
                  <span className="typing-cursor">|</span>
                </h2>
                <p className="lead text-muted mb-4">
                  A passionate frontend developer who loves creating awesome web experiences
                  with modern technologies and beautiful user interfaces.
                </p>
              </div>

              <div className="d-flex flex-wrap gap-3 mb-4" data-aos-delay="600" data-aos="fade-right">
                <a href="#project" className="btn btn-gradient btn-lg px-4 py-2" data-bs-toggle="tooltip" title='See My Work'>
                  <i className="bx bx-briefcase me-2"></i>
                  See My Work
                </a>
                <a href="#portfolio" className="btn btn-outline-dark btn-lg px-4 py-2" data-bs-toggle="tooltip" title='See My Portofolio'>
                  <i className="bx bx-briefcase me-2"></i>
                  My Portfolio
                </a>
              </div>

              <div className="d-flex align-items-center gap-4" data-aos-delay="500" data-aos="fade-up">
                <span className="text-muted">Follow me:</span>
                <div className="d-flex gap-3">
                  <a href="#" className="social-icon" data-bs-toggle="tooltip" title='Follow My Github'>
                    <i className="bx bxl-github"></i>
                  </a>
                  <a href="#" className="social-icon" data-bs-toggle="tooltip" title='Follow My Linkedin'>
                    <i className="bx bxl-linkedin"></i>
                  </a>
                  <a href="#" className="social-icon" data-bs-toggle="tooltip" title='Follow My Instagram'>
                    <i className="bx bxl-instagram"></i>
                  </a>
                  <a href="#" className="social-icon" data-bs-toggle="tooltip" title='Follow My Twitter'>
                    <i className="bx bxl-twitter"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-6" data-aos-delay="600" data-aos="fade-up">
              <div className="console-container mb-4">
                <div className="console-header">
                  <div className="console-dot" style={{ backgroundColor: '#ff5f56' }}></div>
                  <div className="console-dot" style={{ backgroundColor: '#ffbd2e' }}></div>
                  <div className="console-dot" style={{ backgroundColor: '#27ca3f' }}></div>
                  <span className="text-white ms-3">developer-console</span>
                </div>
                <div className="console-body">
                  <div className="mb-2">
                    <span style={{ color: '#ff6b6b' }}>&gt;</span>
                    <span style={{ color: '#4ecdc4' }}> const</span>
                    <span style={{ color: '#ffe66d' }}> developer</span>
                    <span style={{ color: '#ff6b6b' }}> =</span>
                    <span style={{ color: '#95e1d3' }}> new</span>
                    <span style={{ color: '#a8e6cf' }}> Developer()</span>;
                  </div>
                  <div className="mb-2">
                    <span style={{ color: '#ff6b6b' }}>&gt;</span>
                    <span style={{ color: '#ffe66d' }}>developer</span>
                    <span style={{ color: '#ff6b6b' }}>.</span>
                    <span style={{ color: '#4ecdc4' }}>name</span>
                    <span style={{ color: '#ff6b6b' }}>=</span>
                    <span style={{ color: '#a8e6cf' }}>"Fajar"</span>;
                  </div>
                  <div className="mb-2">
                    <span style={{ color: '#ff6b6b' }}>&gt;</span>
                    <span style={{ color: '#ffe66d' }}>developer</span>
                    <span style={{ color: '#ff6b6b' }}>.</span>
                    <span style={{ color: '#4ecdc4' }}>skills</span>
                    <span style={{ color: '#ff6b6b' }}>=</span>
                    <span style={{ color: '#a8e6cf' }}>["React", "JavaScript", "CSS"]</span>;
                  </div>
                  <div className="mb-2">
                    <span style={{ color: '#ff6b6b' }}>&gt;</span>
                    <span style={{ color: '#ffe66d' }}>developer</span>
                    <span style={{ color: '#ff6b6b' }}>.</span>
                    <span style={{ color: '#4ecdc4' }}>passion</span>
                    <span style={{ color: '#ff6b6b' }}>=</span>
                    <span style={{ color: '#a8e6cf' }}>"Frontend Development"</span>;
                  </div>
                  <div className="mb-3">
                    <span style={{ color: '#ff6b6b' }}>&gt;</span>
                    <span style={{ color: '#95e1d3' }}>console</span>
                    <span style={{ color: '#ff6b6b' }}>.</span>
                    <span style={{ color: '#4ecdc4' }}>log</span>
                    <span style={{ color: '#a8e6cf' }}>(developer)</span>;
                  </div>
                  <div style={{ color: '#00ff00' }}>
                    &#123; name: "Fajar", skills: ["React", "JavaScript", "CSS"], passion: "Frontend Development" &#125;
                  </div>
                  <div className="mt-3">
                    <span style={{ color: '#ff6b6b' }}>&gt;</span>
                    <span className="typing-cursor">_</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <a href="#about" className="scroll-down" data-aos-delay="600" data-aos="fade-down">
          <i className="bx bx-chevron-down"></i>
        </a>
      </section>
    </>
  );
};

export default Hero;