import '../App.css';
import logo from '../assets/images/school-image.webp';
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; 
 

const Navbar = () => {
   return(
    <div className="navbar-main">
      <div className="navbar-left">
        <img src={logo} alt="school-logo" className="navbar-logo" />
      </div>

      <div className="navbar-center">
      <ul className="navbar-links">
        {[
          { name: "Home", id: "#home", options: [] },
          { name: "About Us", id: "#about-us", options: ["Introduction", "Our Mission and Vision", "Mandatory Disclosure", "Principal desk"] },
          { name: "Infrastructure", id: "#infrastructure", options: ["Reception", "Mathematics laboratory", "Bio,Chem,Phy Lab", "Computer Lab", "Play Zone", "Music", "Playground", "Library", "Transportation", "Class Room"] },
          { name: "Admission", id: "#admission", options: ["Procedure", "Registration Form", "Admission/Withdrawl Rule"] },
          { name: "Academics", id: "#academics", options: ["Rules and Regulations", "Assessments", "Counselling"] },
          { name: "Activities", id: "#activities", options: ["Glimpse of Activities", "Planner"] },
          { name: "Contact Us", id: "#contact-us", options: [] },
        ].map((link) => (
          <li className={`dropdown ${link.options.length === 0 ? "no-dropdown" : ""}`} key={link.id}>
            <a href={link.id}>
              {link.name} 
              {link.options.length > 0 && (
                <>
                  <FaChevronDown className="dropdown-icon" />
                  <FaChevronUp className="dropdown-icon-hover" />
                </>
              )}
            </a>
            {link.options.length > 0 && (
              <ul className="dropdown-menu">
                {link.options.map((option, index) => (
                  <li key={index}>
                    <a href={`${link.id}-${option.toLowerCase().replace(" ", "-")}`}>{option}</a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>


      <div className="navbar-right">
        <p className="navbar-text">Vishal Bharti School</p>
      </div>
    </div>
   )
}

export default Navbar;