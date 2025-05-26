import { useEffect } from 'react';

const Contact = () => {
  useEffect(() => {

  }, []);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert(`Copied: ${text}`);
  };

  const contactInfo = [
    { icon: 'bx bx-envelope', label: 'Email', value: 'Fajarramadhan561@gmail.com', action: 'mailto:Fajarramadhan561@gmail.com' },
    { icon: 'bx bx-phone', label: 'Phone', value: '+6281234567890', action: 'tel:+6281234567890' },
    { icon: 'bx bx-map', label: 'Address', value: 'Medan, Indonesia', action: '#' },
  ];

  const socialMedia = [
    { icon: 'bx bxl-linkedin', link: 'https://linkedin.com/in/fajar-ramadhan', name: 'LinkedIn' },
    { icon: 'bx bxl-github', link: 'https://github.com/fajar-ramadhan', name: 'GitHub' },
    { icon: 'bx bxl-twitter', link: 'https://twitter.com/fajar_ramadhan', name: 'Twitter' },
    { icon: 'bx bxl-instagram', link: 'https://instagram.com/fajar.ramadhan', name: 'Instagram' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
  };

  return (
    <>
      <style jsx>{`
                /* Built with Bootstrap CSS, BoxIcons, and AOS Animation Library */
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
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }

                .social-icon:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
                    color: white;
                }

                /* Different Form Classes - Modern Floating Labels */
                .message-form {
                    background: white;
                    border-radius: 15px;
                    padding: 30px;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
                }

                .input-wrapper {
                    position: relative;
                    margin-bottom: 2rem;
                }

                .modern-input {
                    width: 100%;
                    border: 2px solid #e9ecef;
                    border-radius: 12px;
                    padding: 15px 15px 15px 15px;
                    font-size: 1rem;
                    background: transparent;
                    transition: all 0.3s ease;
                    outline: none;
                }

                .modern-input:focus {
                    border-color: #667eea;
                    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
                }

                .floating-label {
                    position: absolute;
                    top: 15px;
                    left: 15px;
                    font-size: 1rem;
                    color: #6c757d;
                    pointer-events: none;
                    transition: all 0.3s ease;
                    background: white;
                    padding: 0 5px;
                }

                .modern-input:focus + .floating-label,
                .modern-input:not(:placeholder-shown) + .floating-label {
                    top: -8px;
                    left: 12px;
                    font-size: 0.75rem;
                    color: #667eea;
                    font-weight: 500;
                }

                .modern-textarea {
                    width: 100%;
                    border: 2px solid #e9ecef;
                    border-radius: 12px;
                    padding: 15px;
                    font-size: 1rem;
                    background: transparent;
                    transition: all 0.3s ease;
                    outline: none;
                    resize: vertical;
                    min-height: 120px;
                    font-family: inherit;
                }

                .modern-textarea:focus {
                    border-color: #667eea;
                    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
                }

                .submit-btn {
                    background: linear-gradient(45deg, #667eea, #764ba2);
                    color: white;
                    padding: 15px 35px;
                    border-radius: 25px;
                    font-weight: 600;
                    border: none;
                    transition: all 0.3s ease;
                    font-size: 1rem;
                    position: relative;
                    overflow: hidden;
                }

                .submit-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 12px 30px rgba(102, 126, 234, 0.4);
                    color: white;
                }

                .submit-btn::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
                    transition: left 0.5s;
                }

                .submit-btn:hover::before {
                    left: 100%;
                }

                @media (max-width: 767px) {
                    .contact-info-card {
                        margin-bottom: 20px;
                    }

                    .message-form {
                        padding: 20px;
                    }

                    .section-title {
                        font-size: 2rem;
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
                      <a
                        href={info.action}
                        className="text-decoration-none text-muted"
                        onClick={(e) => e.stopPropagation()}
                      >
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
              <div className="message-form">
                <h3 className="h4 mb-4">
                  <i className="bx bx-message-dots me-2 text-primary"></i>
                  Send a Message
                </h3>
                <form onSubmit={handleSubmit}>
                  <div className="input-wrapper">
                    <input
                      type="text"
                      className="modern-input"
                      id="fullName"
                      placeholder=" "
                      required
                    />
                    <label htmlFor="fullName" className="floating-label">Full Name</label>
                  </div>

                  <div className="input-wrapper">
                    <input
                      type="email"
                      className="modern-input"
                      id="emailAddress"
                      placeholder=" "
                      required
                    />
                    <label htmlFor="emailAddress" className="floating-label">Email Address</label>
                  </div>

                  <div className="input-wrapper">
                    <input
                      type="text"
                      className="modern-input"
                      id="messageSubject"
                      placeholder=" "
                      required
                    />
                    <label htmlFor="messageSubject" className="floating-label">Subject</label>
                  </div>

                  <div className="input-wrapper">
                    <textarea
                      className="modern-textarea"
                      id="messageContent"
                      placeholder="Write your message here..."
                      rows="5"
                      required
                    ></textarea>
                    <label htmlFor="messageContent" className="floating-label">Your Message</label>
                  </div>

                  <div className="text-end">
                    <button type="submit" className="submit-btn">
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