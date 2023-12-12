import "./Navbar.css";
import eduford from "../../assets/imgs/logo.png";
import banner from "../../assets/imgs/banner.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <section
      className="main-image"
      style={{
        backgroundImage: `linear-gradient(rgba(4, 9, 30, 0.7), rgba(4, 9, 30, 0.7)),  url(${banner})`,
      }}
    >
      <nav>
        <a href="index.html">
          <img src={eduford} />
        </a>
        <div className="nav-links" id="navLinks">
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li className="list-item">
              <Link to="/service">ABOUT</Link>
            </li>
          </ul>
        </div>
      </nav>
     
    </section>
  );
};

export default Navbar;
