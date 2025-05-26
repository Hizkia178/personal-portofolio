import { useState, useEffect } from "react";

useState

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > window.innerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <style jsx>{`
        .scroll-to-top {
          position: fixed;
          bottom: 30px;
          right: 30px;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 24px;
          cursor: pointer;
          transition: opacity 0.3s ease, transform 0.3s ease;
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
          z-index: 99;
        }

        .scroll-to-top.hidden {
          opacity: 0;
          transform: translateY(100px);
          pointer-events: none;
        }

        .scroll-to-top.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .scroll-to-top:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
        }

        .scroll-to-top:active {
          transform: translateY(0);
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }

        .scroll-to-top.visible {
          animation: pulse 2s ease-in-out infinite;
        }
      `}</style>

      <button
        className={`scroll-to-top ${isVisible ? 'visible' : 'hidden'}`}
        onClick={scrollToTop}
        title="Back to Top"
        aria-label="Scroll to Top"
      >
        <i className="bx bx-chevron-up"></i>
      </button>
    </>
  );
};

export default ScrollToTop;