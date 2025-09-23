import { useNavigate } from "react-router-dom";
import LogoButton from "../../shared/LogoButton";
import "../../App.css";

export default function MonitorInstructionsPage() {
  const navigate = useNavigate();
  return (
    <div className="welcome-root">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
        <LogoButton isStatic size={376} style={{ margin: '0 auto 20px auto', display: 'block' }} />
      </div>
      <h2 className="welcome-title">Single Monitor Return Instructions</h2>
      <ul style={{ textAlign: "left", margin: "24px auto", maxWidth: 380, color: "#444", lineHeight: 1.7 }}>
        <li>1. Power off and disconnect the monitor and cables.</li>
        <li>2. Clean the monitor screen and frame.</li>
        <li>3. Use original or provided packaging to protect the screen.</li>
        <li>4. Place power and display cables in a labeled bag inside the box.</li>
        <li>5. Seal the box and apply the return shipping label securely.</li>
        <li>6. Take to the specified return drop-off point.</li>
      </ul>
      <button className="return-option" onClick={() => navigate("/")}>Back to Instructions</button>
    </div>
  );
}
