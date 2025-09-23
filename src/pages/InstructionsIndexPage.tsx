import { useNavigate } from "react-router-dom";
import "../App.css";
import LogoButton from "../shared/LogoButton";

export default function InstructionsIndexPage() {
  const navigate = useNavigate();
  return (
    <div className="welcome-root">
      <LogoButton />
      <h2 className="welcome-title" style={{ marginTop: 16 }}>Instructions: Select Your Return</h2>
      <div className="return-options">
        <button className="return-option" onClick={() => navigate("/instructions/laptop")}>Laptop Return</button>
        <button className="return-option" onClick={() => navigate("/instructions/monitor")}>Single Monitor (with/without Laptop)</button>
        <button className="return-option" onClick={() => navigate("/instructions/large-items")}>Large Items or Quantities</button>
        <button className="return-option" onClick={() => navigate("/instructions/desktop")}>Desktops</button>
      </div>
    </div>
  );
}
