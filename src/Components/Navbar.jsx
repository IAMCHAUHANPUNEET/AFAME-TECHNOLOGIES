import { NavLink } from "react-router-dom";

function Navbar({ onContact, onSkill, onProject, onHome }) {
  const handleOnContact = (a) => {
    onContact(a);
    console.log("This will return some value");
  };
  const handleOnSkill = (a) => {
    onSkill(a);
  };
  const handleOnProject = (a) => {
    onProject(a);
  };
  const handleOnHome = (a) => {
    onHome(a);
  };

  return (
    <>
      <nav className="navbar">
        <h1 className="NavbarHeading">Coding Is Magical</h1>
        <ul className="Navoptions">
          <NavLink className="link" to="skill" onClick={() => handleOnSkill(1)}>
            <li>Skills</li>
          </NavLink>

          <NavLink
            className="link"
            to="project"
            onClick={() => handleOnProject(1)}
          >
            <li>Project</li>
          </NavLink>

          <NavLink
            className="link"
            to="contact"
            onClick={() => handleOnContact(1)}
          >
            <li>Contact</li>
          </NavLink>
          {/* <NavLink className="link" to="/home" onClick={() => handleOnHome(1)}>
            <li>Home</li>
          </NavLink> */}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
