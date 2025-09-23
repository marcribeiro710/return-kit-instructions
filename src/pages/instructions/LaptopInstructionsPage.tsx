import { useNavigate } from "react-router-dom";
import LogoButton from "../../shared/LogoButton";
import "../../App.css";

export default function LaptopInstructionsPage() {
  const navigate = useNavigate();
  return (
    <div className="welcome-root">
      <LogoButton isStatic size={376} style={{ marginBottom: 13, display: 'block' }} />
      <h1 className="welcome-title" style={{ marginBottom: 31 }}>
        Laptop Return Instructions
      </h1>
      {/* BEGIN: Imported Google Docs Content */}
      <div className="google-doc-section">
        <p><b>Step 1: Back up your data</b>
        <br/>Ensure all important files are saved to an external drive or cloud storage. Sign out of all accounts and remove any personal info from the laptop.</p>

        <img src="/assets/laptop_step1.jpg" alt="Backing up laptop files" style={{width: "100%", maxWidth: 400, margin: "18px auto"}} />

        <p><b>Step 2: Prepare the laptop</b>
        <br/>Power down your laptop. Unplug it from any power sources. Use a soft cloth to wipe down the surfaces.</p>

        <img src="/assets/laptop_step2.jpg" alt="Cleaning laptop" style={{width: "100%", maxWidth: 400, margin: "18px auto"}} />

        <p><b>Step 3: Package and return</b>
        <br/>Place the laptop in the provided return box with any power adapter and cable. Insert extra padding to protect your device. Seal the box and apply the return label. Take to the nearest postal service as instructed.</p>

        <img src="/assets/laptop_step3.jpg" alt="Packing laptop in box" style={{width: "100%", maxWidth: 400, margin: "18px auto"}} />
      </div>
      {/* END: Imported Google Docs Content */}
      <button className="return-option" onClick={() => navigate("/")}>Back to Instructions</button>
    </div>
  );
}
