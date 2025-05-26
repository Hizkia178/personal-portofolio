import { useState } from "react";
import { initTooltips } from "../functions/Tooltip";
import { useEffect } from "react";


const Footer = () => {
    useEffect(() => {
        initTooltips();
    }, []);
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);
    
    const currentYear = new Date().getFullYear();
    
    const handleNewsletterSubmit = (e) => {
        e.preventDefault();
        if (email) {
            setIsSubscribed(true);
            setEmail('');
            setTimeout(() => setIsSubscribed(false), 3000);
        }
    };

    const socialLinks = [
        { icon: 'bxl-github', url: '#', name: 'GitHub' },
        { icon: 'bxl-linkedin', url: '#', name: 'LinkedIn' },
        { icon: 'bxl-twitter', url: '#', name: 'Twitter' },
        { icon: 'bxl-instagram', url: '#', name: 'Instagram' },
        { icon: 'bxl-dribbble', url: '#', name: 'Dribbble' }
    ];

    const quickLinks = [
        { text: 'About', url: '#about' },
        { text: 'Skills', url: '#skills' },
        { text: 'Project', url: '#project' },
        { text: 'Contact', url: '#contact' }
    ];

    return (
        <>
            <style jsx>{`
                .footer-bg {
                    background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
                    position: relative;
                    overflow: hidden;
                }
                
                .footer-bg::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
                    z-index: 1;
                }
                
                .footer-content {
                    position: relative;
                    z-index: 2;
                }
                
                .footer-title {
                    font-size: 2rem;
                    font-weight: 700;
                    color: white;
                    margin-bottom: 1rem;
                }
                
                .footer-subtitle {
                    color: #bdc3c7;
                    font-size: 1.1rem;
                    line-height: 1.6;
                    margin-bottom: 2rem;
                }
                
                .social-links {
                    display: flex;
                    gap: 1rem;
                    margin-bottom: 2rem;
                }
                
                .social-link {
                    width: 50px;
                    height: 50px;
                    border-radius: 12px;
                    background: rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    font-size: 20px;
                    text-decoration: none;
                    transition: all 0.3s ease;
                }
                
                .social-link:hover {
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    transform: translateY(-3px);
                    box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
                    color: white;
                }
                
                .quick-links-section h5 {
                    color: white;
                    font-weight: 600;
                    margin-bottom: 1.5rem;
                    position: relative;
                }
                
                .quick-links-section h5::after {
                    content: '';
                    position: absolute;
                    bottom: -8px;
                    left: 0;
                    width: 40px;
                    height: 3px;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    border-radius: 2px;
                }
                
                .quick-link {
                    color: #bdc3c7;
                    text-decoration: none;
                    display: flex;
                    align-items: center;
                    padding: 0.5rem 0;
                    transition: all 0.3s ease;
                    border-radius: 8px;
                    padding-left: 0;
                }
                
                .quick-link:hover {
                    color: #667eea;
                    padding-left: 1rem;
                    background: rgba(255, 255, 255, 0.05);
                }
                
                .quick-link i {
                    margin-right: 0.5rem;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }
                
                .quick-link:hover i {
                    opacity: 1;
                }
                
                .newsletter-section {
                    background: rgba(255, 255, 255, 0.05);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 20px;
                    padding: 2rem;
                }
                
                .newsletter-section h5 {
                    color: white;
                    font-weight: 600;
                    margin-bottom: 1rem;
                }
                
                .newsletter-section p {
                    color: #bdc3c7;
                    margin-bottom: 1.5rem;
                }
                
                .newsletter-form {
                    position: relative;
                }
                
                .newsletter-input {
                    width: 100%;
                    padding: 12px 50px 12px 20px;
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    border-radius: 25px;
                    background: rgba(255, 255, 255, 0.1);
                    color: white;
                    font-size: 0.9rem;
                    transition: all 0.3s ease;
                }
                
                .newsletter-input::placeholder {
                    color: #bdc3c7;
                }
                
                .newsletter-input:focus {
                    outline: none;
                    border-color: #667eea;
                    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
                    background: rgba(255, 255, 255, 0.15);
                }
                
                .newsletter-btn {
                    position: absolute;
                    right: 5px;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 40px;
                    height: 40px;
                    border: none;
                    border-radius: 50%;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                
                .newsletter-btn:hover {
                    transform: translateY(-50%) scale(1.1);
                    box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
                }
                
                .success-message {
                    background: linear-gradient(135deg, #27ae60 0%, #2ecc71 100%);
                    color: white;
                    padding: 10px 20px;
                    border-radius: 25px;
                    font-size: 0.9rem;
                    text-align: center;
                    margin-top: 1rem;
                    animation: slideIn 0.3s ease;
                }
                
                @keyframes slideIn {
                    from {
                        opacity: 0;
                        transform: translateY(-10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                .footer-bottom {
                    border-top: 1px solid rgba(255, 255, 255, 0.1);
                    padding-top: 2rem;
                    margin-top: 3rem;
                }
                
                .footer-bottom-content {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    flex-wrap: wrap;
                    gap: 1rem;
                }
                
                .copyright {
                    color: #bdc3c7;
                    margin: 0;
                }
                
                .footer-links {
                    display: flex;
                    gap: 2rem;
                }
                
                .footer-link {
                    color: #bdc3c7;
                    text-decoration: none;
                    font-size: 0.9rem;
                    transition: color 0.3s ease;
                }
                
                .footer-link:hover {
                    color: #667eea;
                }
                
                @media (max-width: 768px) {
                    .social-links {
                        justify-content: center;
                    }
                    
                    .footer-bottom-content {
                        flex-direction: column;
                        text-align: center;
                    }
                    
                    .footer-links {
                        order: -1;
                    }
                }
            `}</style>

            <footer className="footer-bg py-5" data-aos-duration="1000" data-aos="fade-down">
                <div className="container footer-content">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-4" data-aos-delay="600" data-aos="fade-right">
                            <h3 className="footer-title">Let's Connect</h3>
                            <p className="footer-subtitle">
                                Ready to bring your ideas to life? Let's collaborate and create 
                                something amazing together. I'm always excited to work on new projects 
                                and challenges.
                            </p>
                            
                            <div className="social-links" data-aos-delay="600" data-aos="fade-up">
                                {socialLinks.map((social, index) => (
                                    <a 
                                        key={index}
                                        href={social.url} 
                                        className="social-link" data-bs-toggle="tooltip" data-bs-placement="top"
                                        title={social.name}
                                    >
                                        <i className={`bx ${social.icon}`}></i>
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4" data-aos-delay="600" data-aos="fade-up">
                            <div className="quick-links-section">
                                <h5>Quick Links</h5>
                                <div className="d-flex flex-column">
                                    {quickLinks.map((link, index) => (
                                        <a 
                                            key={index}
                                            href={link.url} 
                                            className="quick-link"
                                        >
                                            <i className="bx bx-chevron-right"></i>
                                            {link.text}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-5 col-md-12 mb-4" data-aos-delay="600" data-aos="fade-left">
                            <div className="newsletter-section">
                                <h5>
                                    <i className="bx bx-envelope me-2"></i>
                                    Stay Updated
                                </h5>
                                <p>
                                    Subscribe to my newsletter and get the latest updates about 
                                    web development, design trends, and new projects.
                                </p>
                                
                                <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
                                    <input
                                        type="email"
                                        className="newsletter-input"
                                        placeholder="Enter your email address"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                    <button type="submit" className="newsletter-btn" data-bs-toggle="tooltip" title="Send Us Messsage">
                                        <i className="bx bx-send"></i>
                                    </button>
                                </form>
                                
                                {isSubscribed && (
                                    <div className="success-message">
                                        <i className="bx bx-check-circle me-2"></i>
                                        Thank you for subscribing!
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <div className="footer-bottom-content">
                            <p className="copyright">
                                © {currentYear} Fajar Ramadhan. All rights reserved.
                            </p>
                            
                            <div className="footer-links">
                                <a href="#" className="footer-link">Privacy Policy</a>
                                <a href="#" className="footer-link">Terms of Service</a>
                                <a href="#" className="footer-link">Sitemap</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;