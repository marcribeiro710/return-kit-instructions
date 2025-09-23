import { useNavigate } from "react-router-dom";
import LogoButton from "../../shared/LogoButton";
import "../../App.css";

export default function MonitorInstructionsPage() {
  const navigate = useNavigate();
  return (
    <div className="welcome-root">
      <LogoButton isStatic size={376} style={{ marginBottom: 13, display: 'block' }} />
      <h1 className="welcome-title" style={{ marginBottom: 31 }}>
        Single Monitor Return Instructions
      </h1>
      {/* BEGIN: Imported Google Docs Content */}
      <div className="google-doc-section">
        <p><b>Step 1: Disconnect and Clean</b>
        <br/>Shut down and unplug the monitor and any connected cables. Use a microfiber cloth to clean the screen and stand.</p>

        <img src="/assets/monitor_step1.jpg" alt="Unplugging monitor and cleaning" style={{ width: "100%", maxWidth: 400, margin: "18px auto" }} />

        <p><b>Step 2: Protect and Pack</b>
        <br/>Use foam or original packaging to protect the monitor. Place all cables in a separate, clearly labeled bag inside the box. Add sufficient padding on all sides for shipping safety.</p>

        <img src="/assets/monitor_step2.jpg" alt="Monitor packaging" style={{ width: "100%", maxWidth: 400, margin: "18px auto" }} />

        <p><b>Step 3: Ship</b>
        <br/>Seal the box, apply the provided shipping label, and deliver it to the instructed location.</p>

        <img src="/assets/monitor_step3.jpg" alt="Shipping monitor" style={{ width: "100%", maxWidth: 400, margin: "18px auto" }} />
      </div>
      {/* END: Imported Google Docs Content */}
      <button className="return-option" onClick={() => navigate("/")}>Back to Instructions</button>
    </div>
  );
}
