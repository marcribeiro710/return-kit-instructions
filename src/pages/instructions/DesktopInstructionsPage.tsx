import { useNavigate } from "react-router-dom";
import LogoButton from "../../shared/LogoButton";
import "../../App.css";

export default function DesktopInstructionsPage() {
  const navigate = useNavigate();
  return (
    <div className="welcome-root">
      <LogoButton isStatic size={376} style={{ marginBottom: 13, display: 'block' }} />
      <h1 className="welcome-title" style={{ marginBottom: 31 }}>
        Desktop Return Instructions
      </h1>
      {/* BEGIN: Imported Google Docs Content */}
      <div className="google-doc-section">
        <p><b>Step 1: Data & Accessories</b>
        <br/>Backup your files, sign out of accounts, and unplug all accessories (mouse, keyboard, drives).</p>

        <img src="/assets/desktop_step1.jpg" alt="Backing up desktop, unplugging accessories" style={{ width: "100%", maxWidth: 400, margin: "18px auto" }} />

        <p><b>Step 2: Clean & Prep</b>
        <br/>Shut down the desktop. Clean the exterior surfaces and remove any dust from vents with a dry cloth.</p>

        <img src="/assets/desktop_step2.jpg" alt="Cleaning desktop case" style={{ width: "100%", maxWidth: 400, margin: "18px auto" }} />

        <p><b>Step 3: Pack & Ship</b>
        <br/>Use a large, sturdy box with padding for the desktop. Put cables, keyboard, and mouse in a bag inside. Seal, label, and return to the specified drop-off point.</p>

        <img src="/assets/desktop_step3.jpg" alt="Packing desktop in box" style={{ width: "100%", maxWidth: 400, margin: "18px auto" }} />
      </div>
      {/* END: Imported Google Docs Content */}
      <button className="return-option" onClick={() => navigate("/")}>Back to Instructions</button>
    </div>
  );
}
