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
      {/* BEGIN: Desktop Packing Instructions Content */}
      <div className="google-doc-section">
        <p><b>Packaging your full size desktop:</b></p>
        <ol style={{ textAlign: 'left', maxWidth: 600, margin: '0 auto', fontSize: 18 }}>
          <li>Remove the 4 corner foam protectors from the box. Set them aside to reuse later. Do <u>not</u> remove the inner box—just open the flaps.</li>
          <li>Wrap your tower with the included bubble wrap and place it inside the inner box. It should be snug; if too tight, use less bubble wrap and reinsert.</li>
          <li>Tape the inner box closed using one of the provided pieces of tape.</li>
          <li>Reinsert the foam corner blocks. It will be a tight fit.</li>
          <li>Use one tape strip to hold the two outer flaps together.</li>
          <li>Use the other six tape strips to fully and securely close the box: two strips for each flap (overlapping), and two down the center to finish sealing. Overlap as shown below.</li>
          <li>Repeat taping on the other flap and down the center.</li>
          <li>Attach the return label over the top of the inbound label.</li>
        </ol>
        <p style={{ marginTop: 28, fontWeight: 500, color: '#444', fontSize: 17 }}>Please reach out with any questions, or if you're ready for us to schedule a courier pickup.</p>
      </div>
      {/* END: Desktop Packing Instructions Content */}
      <button className="return-option" onClick={() => navigate("/")}>Back to Instructions</button>
    </div>
  );
}
