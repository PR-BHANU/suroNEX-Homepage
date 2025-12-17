export default function NavigationBar() {
  return (
    <nav className="nav">
      <div className="nav-left">
        <img src="/suroNex-Text-Logo.svg" alt="Logo" className="logo" />

        <div className="dropdown">
          <button className="dropdown-button">Products</button>
          <div className="dropdown-menu">
            <a href="#">Cloud Security</a>
            <a href="#">Inventory Management</a>
            <a href="#">Governance, Risk & Compliance</a>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropdown-button">Company</button>
          <div className="dropdown-menu">
            <a href="#">About Us</a>
            <a href="#">Contact Us</a>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropdown-button">Resources</button>
          <div className="dropdown-menu">
            <a href="#">FAQs</a>
            <a href="#">Whitepaper</a>
          </div>
        </div>

        <a href="#" className="suron-AI">
          Suron AI
        </a>
      </div>
      <br></br>
      <button className="demo-button">Book a Demo</button>
    </nav>
  );
}
