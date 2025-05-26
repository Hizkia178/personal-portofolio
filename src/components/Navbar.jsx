const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-white py-3 shadow fixed-top"
      data-aos="fade-down"
    >
      <div className="container">
        <a className="navbar-brand" href="#" data-aos-delay="600" data-aos="fade-right">
          <i className="bx bx-code-alt me-1"></i> MyPortfolio
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

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
            <li className="nav-item">
              <a className="nav-link" href="#support">
                <i className="bx bx-support me-1"></i> Support Me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
