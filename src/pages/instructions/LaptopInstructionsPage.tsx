import { useNavigate } from "react-router-dom";
import LogoButton from "../../shared/LogoButton";
import "../../App.css";

export default function LaptopInstructionsPage() {
  const navigate = useNavigate();
  return (
    <div className="welcome-root">
      <LogoButton isStatic size={376} style={{ marginBottom: 13, display: 'block' }} />
      <h1 className="welcome-title">Laptop Return Instructions</h1>
      <ul style={{ textAlign: "left", margin: "24px auto", maxWidth: 380, color: "#444", lineHeight: 1.7 }}>
        <li>1. Save your files and sign out of all accounts.</li>
        <li>2. Turn off, unplug, and clean your laptop.</li>
        <li>3. Place your laptop in the provided return box with padding.</li>
        <li>4. Add all accessories (charger, cable, etc.) to the box.</li>
        <li>5. Seal the box and attach the provided return label.</li>
        <li>6. Drop the box at a postal location and save your receipt.</li>
      </ul>
      <button className="return-option" onClick={() => navigate("/")}>Back to Instructions</button>
    </div>
  );
}
