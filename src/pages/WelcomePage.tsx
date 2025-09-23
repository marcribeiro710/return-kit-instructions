
import "../App.css";
import { useNavigate } from "react-router-dom";
import companyLogo from "../assets/company-logo.png";

export default function WelcomePage() {
  const navigate = useNavigate();
  return (
    <div className="welcome-root">
      <img
        src={companyLogo}
        className="company-logo"
        alt="Company Logo"
        style={{ cursor: "pointer" }}
        onClick={() => navigate("/")}
      />
      <h1 className="welcome-title">Welcome to Return Instructions.</h1>
      <p className="welcome-msg">
        Effortlessly pack and return your IT equipment.<br />
        Select the type of item you want instructions for below.
      </p>
      <div className="return-options">
        <button className="return-option" onClick={() => navigate("/instructions/laptop")}>Laptop Return</button>
        <button className="return-option" onClick={() => navigate("/instructions/monitor")}>Single Monitor (with/without Laptop)</button>
        <button className="return-option" onClick={() => navigate("/instructions/large-items")}>Large Items or Quantities</button>
        <button className="return-option" onClick={() => navigate("/instructions/desktop")}>Desktops</button>
      </div>
    </div>
  );
}
