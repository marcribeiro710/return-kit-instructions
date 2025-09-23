
import "../App.css";
import { useNavigate } from "react-router-dom";


export default function WelcomePage() {
  const navigate = useNavigate();
  return (
    <div className="welcome-root">
      <img
        src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkL9UFA4MD2fguemOZclswSCBO73820j_JpA&s"}
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
