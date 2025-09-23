import { useNavigate } from "react-router-dom";
import LogoButton from "../../shared/LogoButton";
import "../../App.css";

export default function DesktopInstructionsPage() {
  const navigate = useNavigate();
  return (
    <div className="welcome-root">
      <LogoButton isStatic size={376} style={{ marginBottom: 13, display: 'block' }} />
      <h1 className="welcome-title" style={{ marginBottom: 31 }}>Desktop Return Instructions</h1>
      <ul style={{ textAlign: "left", margin: "24px auto", maxWidth: 380, color: "#444", lineHeight: 1.7 }}>
        <li>1. Back up important files and shut down the desktop.</li>
        <li>2. Remove all accessories and external drives.</li>
        <li>3. Clean the case exterior and vents if dusty.</li>
        <li>4. Use sturdy box, plenty of padding around the desktop.</li>
        <li>5. Place power cables, mouse, and keyboard in a bag inside the box.</li>
        <li>6. Seal box, affix return label, and arrange drop-off as instructed.</li>
      </ul>
      <button className="return-option" onClick={() => navigate("/")}>Back to Instructions</button>
    </div>
  );
}
