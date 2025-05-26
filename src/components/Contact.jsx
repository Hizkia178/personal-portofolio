import { useEffect } from 'react';
import { initTooltips } from '../functions/Tooltip';

const Contact = () => {
    useEffect(() => {
        initTooltips();
    }, []);

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text);
        alert(`Copied: ${text}`);
    };

    const contactInfo = [
        { icon: 'bx bx-envelope', label: 'Email', value: 'Fajarramadhan561@gmail.com', action: 'mailto:Fajarramadhan561@gmail.com' },
        { icon: 'bx bx-phone', label: 'Phone', value: '+6281234567890', action: 'tel:+6281234567890' },
        { icon: 'bx bx-map', label: 'Address', value: 'Jakarta, Indonesia', action: '#' },
    ];

    const socialMedia = [
        { icon: 'bx bxl-linkedin', link: 'https://linkedin.com/in/fajar-ramadhan', name: 'LinkedIn' },
        { icon: 'bx bxl-github', link: 'https://github.com/fajar-ramadhan', name: 'GitHub' },
        { icon: 'bx bxl-twitter', link: 'https://twitter.com/fajar_ramadhan', name: 'Twitter' },
        { icon: 'bx bxl-instagram', link: 'https://instagram.com/fajar.ramadhan', name: 'Instagram' },
    ];

    return (
        <>
            <style jsx>{`
        .contact-bg {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          position: relative;
          overflow: hidden;
          padding: 60px 0;
        }

        .contact-bg::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23667eea' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          z-index: 1;
        }

        .contact-content {
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

        .contact-info-card {
          background: white;
          border-radius: 10px;
          padding: 15px;
          margin-bottom: 15px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }

        .contact-info-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(102, 126, 234, 0.2);
        }

        .contact-info-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border: 2px solid transparent;
          border-radius: 10px;
          background: linear-gradient(135deg, #667eea, #764ba2) border-box;
          -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: destination-out;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .contact-info-card:hover::before {
          opacity: 1;
        }

        .contact-info-icon {
          font-size: 1.8rem;
          color: #667eea;
          margin-right: 10px;
        }

        .contact-info-label {
          font-size: 1rem;
          font-weight: 600;
          color: #2c3e50;
        }

        .contact-info-value {
          font-size: 0.9rem;
          color: #6c757d;
          word-break: break-all;
        }

        .section-subtitle {
          font-size: 1.5rem;
          font-weight: 600;
          color: #2c3e50;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .section-subtitle i {
          font-size: 1.8rem;
          color: #667eea;
        }

        .social-icons {
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
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
          font-size: 20px;
          text-decoration: none;
        }

        .contact-form {
          background: white;
          border-radius: 15px;
          padding: 30px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
        }

        .form-group {
          position: relative;
          margin-bottom: 1.5rem;
        }

        .form-control {
          border: none;
          border-bottom: 2px solid #e9ecef;
          border-radius: 0;
          padding: 10px 0;
          font-size: 1rem;
          transition: border-color 0.3s ease;
        }

        .form-control:focus {
          outline: none;
          border-color: transparent;
          box-shadow: none;
        }

        .form-control:focus + .form-label::after {
          width: 100%;
        }

        .form-label {
          position: absolute;
          top: 10px;
          left: 0;
          font-size: 1rem;
          color: #6c757d;
          pointer-events: none;
          transition: all 0.3s ease;
        }

        .form-label::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          transition: width 0.5s ease;
        }

        .form-control:focus + .form-label,
        .form-control:not(:placeholder-shown) + .form-label {
          top: -10px;
          font-size: 0.75rem;
          color: #667eea;
        }

        textarea.form-control {
          resize: vertical;
          min-height: 100px;
        }

        .btn-send {
          background: linear-gradient(45deg, #667eea, #764ba2);
          color: white;
          padding: 12px 30px;
          border-radius: 25px;
          font-weight: 600;
          border: none;
          transition: transform 0.3s ease, box-shadow 0.3s ease;

        }

        .btn-send:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(102, 126, 234, 0.4);
          color: white;
        }

        @media (max-width: 767px) {
          .contact-info-card {
            margin-bottom: 20px;
          }

          .contact-form {
            padding: 20px;
          }
        }
      `}</style>

            <section className="contact-bg py-5" id="contact" data-aos="fade-down" data-aos-duration="1000">
                <div className="container contact-content">
                    <div className="text-center mb-5" data-aos="fade-up" data-aos-delay="100">
                        <h2 className="section-title">Get in Touch</h2>
                        <p className="lead text-muted">Let's create something extraordinary together!</p>
                    </div>

                    <div className="row">

                        <div className="col-lg-6 mb-4" data-aos="fade-right" data-aos-delay="200">
                            <h3 className="section-subtitle">
                                <i className="bx bx-info-circle"></i> Contact Information
                            </h3>
                            {contactInfo.map((info, index) => (
                                <div
                                    key={index}
                                    className="contact-info-card d-flex align-items-center"
                                    onClick={() => handleCopy(info.value)}
                                    role="button"
                                    aria-label={`Copy ${info.label} ${info.value}`}
                                    data-bs-toggle="tooltip"
                                    title="Click to copy!"
                                >
                                    <i className={`contact-info-icon ${info.icon}`}></i>
                                    <div>
                                        <h6 className="contact-info-label mb-0">{info.label}</h6>
                                        <p className="contact-info-value mb-0">
                                            <a href={info.action} className="text-decoration-none text-muted" onClick={(e) => e.stopPropagation()}>
                                                {info.value}
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            ))}


                            <h3 className="section-subtitle mt-4">
                                <i className="bx bx-share-alt"></i> Follow Me
                            </h3>
                            <div className="d-flex justify-content-start gap-3 mt-2">
                                {socialMedia.map((media, index) => (
                                    <a
                                        key={index}
                                        href={media.link}
                                        className="social-icon"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        data-bs-toggle="tooltip"
                                        title={`Follow on ${media.name}`}
                                    >
                                        <i className={media.icon}></i>
                                    </a>
                                ))}
                            </div>

                        </div>


                        <div className="col-lg-6 mb-4" data-aos="fade-left" data-aos-delay="200">
                            <div className="contact-form">
                                <h3 className="h4 mb-4">Send a Message</h3>
                                <form>
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="name" placeholder=" " required />
                                        <label htmlFor="name" className="form-label">Name</label>
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control" id="email" placeholder=" " required />
                                        <label htmlFor="email" className="form-label">Email</label>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="subject" placeholder=" " required />
                                        <label htmlFor="subject" className="form-label">Subject</label>
                                    </div>
                                    <div className="form-group">
                                        <textarea className="form-control" id="message" placeholder=" " rows="4" required></textarea>
                                        <label htmlFor="message" className="form-label">Your Message</label>
                                    </div>
                                    <div className="text-end">
                                        <button type="submit" className="btn-send">
                                            <i className="bx bx-send me-2"></i>
                                            Send Message
                                        </button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;