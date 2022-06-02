import "./NavBar.css";
import logo from "../../images/gitcat.png";

const NavBar = ({ handleChange, value, handleClick }) => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark"
      style={{ padding: "1.5% 3%", marginBottom: "50px" }}
    >
      <img
        src={logo}
        width="5%"
        height="auto"
        className="mr-30 avatar"
        alt="profile"
        style={{ marginRight: "50px" }}
      />
      <h3 style={{ color: "#fff", paddingRight: "50px" }}>Github Repo</h3>
      <form className="btnCont">
        <input
          type="text"
          placeholder="Search repo"
          value={value}
          onChange={handleChange}
        />
        <button type="submit" onClick={handleClick}>
          Go
        </button>
      </form>
    </nav>
  );
};

export default NavBar;
