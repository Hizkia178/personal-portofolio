import { useState, useEffect } from "react";

const Skills = () => {
    const [activeTab, setActiveTab] = useState('technical');
    const [animatedBars, setAnimatedBars] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimatedBars(true);
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    const technicalSkills = [
        {
            name: 'HTML',
            level: 95,
            years: '5+',
            icon: 'bxl-html5',
            color: 'linear-gradient(135deg, #e34c26 0%, #f16529 100%)',
            description: 'Semantic HTML5, Web Accessibility, SEO Optimization'
        },
        {
            name: 'CSS',
            level: 90,
            years: '5+',
            icon: 'bxl-css3',
            color: 'linear-gradient(135deg, #1572b6 0%, #33a9dc 100%)',
            description: 'CSS3, Flexbox, Grid, Animations, Responsive Design'
        },
        {
            name: 'JavaScript',
            level: 88,
            years: '4+',
            icon: 'bxl-javascript',
            color: 'linear-gradient(135deg, #f7df1e 0%, #ffed4e 100%)',
            description: 'ES6+, DOM Manipulation, Async/Await, API Integration'
        },
        {
            name: 'Bootstrap',
            level: 92,
            years: '4+',
            icon: 'bxl-bootstrap',
            color: 'linear-gradient(135deg, #563d7c 0%, #7952b3 100%)',
            description: 'Responsive Framework, Custom Components, Grid System'
        },
        {
            name: 'React',
            level: 85,
            years: '3+',
            icon: 'bxl-react',
            color: 'linear-gradient(135deg, #61dafb 0%, #21d4fd 100%)',
            description: 'Hooks, State Management, Component Architecture, JSX'
        },
        {
            name: 'PHP',
            level: 80,
            years: '3+',
            icon: 'bxl-php',
            color: 'linear-gradient(135deg, #777bb4 0%, #8892bf 100%)',
            description: 'OOP, MVC Pattern, Database Integration, API Development'
        }
    ];

    const softSkills = [
        {
            name: 'Problem Solving',
            level: 92,
            icon: 'bx-bulb',
            description: 'Analytical thinking and creative solutions'
        },
        {
            name: 'Communication',
            level: 88,
            icon: 'bx-chat',
            description: 'Clear communication with teams and clients'
        },
        {
            name: 'Team Work',
            level: 90,
            icon: 'bx-group',
            description: 'Collaborative development and agile methodology'
        },
        {
            name: 'Time Management',
            level: 85,
            icon: 'bx-time',
            description: 'Efficient project delivery and deadline management'
        },
        {
            name: 'Adaptability',
            level: 87,
            icon: 'bx-refresh',
            description: 'Quick learning of new technologies and frameworks'
        },
        {
            name: 'Leadership',
            level: 82,
            icon: 'bx-crown',
            description: 'Mentoring junior developers and project guidance'
        }
    ];

    return (
        <>
            <style jsx>{`
                .skills-bg {
                    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
                    position: relative;
                    overflow: hidden;
                }
                
                .skills-bg::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23667eea' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
                    z-index: 1;
                }
                
                .skills-content {
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
                
                .skill-tabs {
                    display: flex;
                    justify-content: center;
                    margin-bottom: 3rem;
                    background: white;
                    border-radius: 15px;
                    padding: 8px;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
                    max-width: 400px;
                    margin-left: auto;
                    margin-right: auto;
                }
                
                .tab-btn {
                    flex: 1;
                    padding: 12px 20px;
                    border: none;
                    background: transparent;
                    color: #6c757d;
                    font-weight: 600;
                    border-radius: 10px;
                    transition: all 0.3s ease;
                    cursor: pointer;
                }
                
                .tab-btn.active {
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                    transform: translateY(-2px);
                    box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
                }
                
                .skill-card {
                    background: white;
                    border-radius: 20px;
                    padding: 2rem;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.08);
                    transition: all 0.3s ease;
                    height: 100%;
                    border: 1px solid rgba(0,0,0,0.05);
                }
                
                .skill-card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.15);
                }
                
                .skill-header {
                    display: flex;
                    align-items: center;
                    margin-bottom: 1.5rem;
                }
                
                .skill-icon {
                    width: 60px;
                    height: 60px;
                    border-radius: 15px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    font-size: 28px;
                    margin-right: 1rem;
                    position: relative;
                    overflow: hidden;
                }
                
                .skill-icon::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
                    transition: left 0.5s ease;
                }
                
                .skill-card:hover .skill-icon::before {
                    left: 100%;
                }
                
                .skill-info h4 {
                    font-weight: 700;
                    color: #2c3e50;
                    margin-bottom: 0.5rem;
                    font-size: 1.3rem;
                }
                
                .skill-years {
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                    padding: 4px 12px;
                    border-radius: 20px;
                    font-size: 0.8rem;
                    font-weight: 600;
                    display: inline-block;
                }
                
                .skill-description {
                    color: #6c757d;
                    margin-bottom: 1.5rem;
                    line-height: 1.6;
                }
                
                .skill-progress {
                    margin-bottom: 1rem;
                }
                
                .progress-label {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 0.5rem;
                }
                
                .progress-text {
                    font-weight: 600;
                    color: #2c3e50;
                }
                
                .progress-percentage {
                    font-weight: 700;
                    color: #667eea;
                }
                
                .progress-bar-container {
                    height: 8px;
                    background: #e9ecef;
                    border-radius: 10px;
                    overflow: hidden;
                    position: relative;
                }
                
                .progress-bar {
                    height: 100%;
                    border-radius: 10px;
                    transition: width 2s ease-in-out;
                    position: relative;
                    overflow: hidden;
                }
                
                .progress-bar::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    bottom: 0;
                    right: 0;
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
                    animation: shimmer 2s infinite;
                }
                
                @keyframes shimmer {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
                
                .soft-skill-card {
                    background: white;
                    border-radius: 20px;
                    padding: 2rem;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.08);
                    transition: all 0.3s ease;
                    height: 100%;
                    text-align: center;
                    border: 1px solid rgba(0,0,0,0.05);
                }
                
                .soft-skill-card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.15);
                }
                
                .soft-skill-icon {
                    width: 80px;
                    height: 80px;
                    border-radius: 20px;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    font-size: 36px;
                    margin: 0 auto 1.5rem;
                    position: relative;
                    overflow: hidden;
                }
                
                .soft-skill-icon::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
                    transition: left 0.5s ease;
                }
                
                .soft-skill-card:hover .soft-skill-icon::before {
                    left: 100%;
                }
                
                .soft-skill-title {
                    font-weight: 700;
                    color: #2c3e50;
                    margin-bottom: 1rem;
                    font-size: 1.2rem;
                }
                
                .soft-skill-description {
                    color: #6c757d;
                    margin-bottom: 1.5rem;
                    line-height: 1.6;
                }
                
                .circular-progress {
                    position: relative;
                    width: 80px;
                    height: 80px;
                    margin: 0 auto;
                }
                
                .circular-progress svg {
                    width: 80px;
                    height: 80px;
                    transform: rotate(-90deg);
                }
                
                .circular-progress circle {
                    fill: none;
                    stroke-width: 6;
                    stroke-linecap: round;
                }
                
                .circle-bg {
                    stroke: #e9ecef;
                }
                
                .circle-progress {
                    stroke: url(#gradient);
                    stroke-dasharray: 251.2;
                    stroke-dashoffset: 251.2;
                    transition: stroke-dashoffset 2s ease-in-out;
                }
                
                .progress-text-center {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    font-weight: 700;
                    color: #2c3e50;
                    font-size: 1rem;
                }
                
                @media (max-width: 768px) {
                    .skill-tabs {
                        flex-direction: column;
                        max-width: 300px;
                    }
                    
                    .section-title {
                        font-size: 2rem;
                    }
                }
            `}</style>

            <section className="skills-bg py-5" id="skills">
                <div className="container skills-content">
                    <div className="text-center mb-5" data-aos="fade-up">
                        <h2 className="section-title">My Skills</h2>
                        <p className="lead text-muted">
                            Expertise in modern web technologies and essential soft skills
                        </p>
                    </div>

                 
                    <div className="skill-tabs" data-aos="fade-up" data-aos-delay="200">
                        <button 
                            className={`tab-btn ${activeTab === 'technical' ? 'active' : ''}`}
                            onClick={() => setActiveTab('technical')}
                        >
                            <i className="bx bx-code-alt me-2"></i>
                            Technical
                        </button>
                        <button 
                            className={`tab-btn ${activeTab === 'soft' ? 'active' : ''}`}
                            onClick={() => setActiveTab('soft')}
                        >
                            <i className="bx bx-cog me-2"></i>
                            Soft Skills
                        </button>
                    </div>

             
                    {activeTab === 'technical' && (
                        <div className="row" data-aos="fade-up" data-aos-delay="400">
                            {technicalSkills.map((skill, index) => (
                                <div key={index} className="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay={500 + index * 100}>
                                    <div className="skill-card">
                                        <div className="skill-header">
                                            <div 
                                                className="skill-icon" 
                                                style={{ background: skill.color }}
                                            >
                                                <i className={`bx ${skill.icon}`}></i>
                                            </div>
                                            <div className="skill-info">
                                                <h4>{skill.name}</h4>
                                                <span className="skill-years">{skill.years} years</span>
                                            </div>
                                        </div>
                                        
                                        <p className="skill-description">{skill.description}</p>
                                        
                                        <div className="skill-progress">
                                            <div className="progress-label">
                                                <span className="progress-text">Proficiency</span>
                                                <span className="progress-percentage">{skill.level}%</span>
                                            </div>
                                            <div className="progress-bar-container">
                                                <div 
                                                    className="progress-bar"
                                                    style={{ 
                                                        background: skill.color,
                                                        width: animatedBars ? `${skill.level}%` : '0%'
                                                    }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                 
                    {activeTab === 'soft' && (
                        <div className="row" data-aos="fade-up" data-aos-delay="400">
                            {softSkills.map((skill, index) => (
                                <div key={index} className="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay={500 + index * 100}>
                                    <div className="soft-skill-card">
                                        <div className="soft-skill-icon">
                                            <i className={`bx ${skill.icon}`}></i>
                                        </div>
                                        
                                        <h4 className="soft-skill-title">{skill.name}</h4>
                                        <p className="soft-skill-description">{skill.description}</p>
                                        
                                        <div className="circular-progress">
                                            <svg>
                                                <defs>
                                                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                                        <stop offset="0%" stopColor="#667eea" />
                                                        <stop offset="100%" stopColor="#764ba2" />
                                                    </linearGradient>
                                                </defs>
                                                <circle 
                                                    className="circle-bg" 
                                                    cx="40" 
                                                    cy="40" 
                                                    r="36"
                                                />
                                                <circle 
                                                    className="circle-progress" 
                                                    cx="40" 
                                                    cy="40" 
                                                    r="36"
                                                    style={{
                                                        strokeDashoffset: animatedBars ? 
                                                            251.2 - (251.2 * skill.level) / 100 : 
                                                            251.2
                                                    }}
                                                />
                                            </svg>
                                            <div className="progress-text-center">
                                                {skill.level}%
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

              
                <svg width="0" height="0" style={{ position: 'absolute' }}>
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#667eea" />
                            <stop offset="100%" stopColor="#764ba2" />
                        </linearGradient>
                    </defs>
                </svg>
            </section>
        </>
    );
};

export default Skills;