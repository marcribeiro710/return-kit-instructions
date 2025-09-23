import { useNavigate } from "react-router-dom";
import LogoButton from "../../shared/LogoButton";
import "../../App.css";

export default function DesktopInstructionsPage() {
  const navigate = useNavigate();
  return (
    <div className="welcome-root">
      <LogoButton isStatic size={376} style={{ marginBottom: 13, display: 'block' }} />
      <h1 className="welcome-title" style={{ marginBottom: 31 }}>Desktop Return Instructions</h1>
      <div className="google-doc-section" style={{ width: '100%', maxWidth: 650, margin: '0 auto', textAlign: "left" }}>
        <h2 style={{ fontSize: 23, fontWeight: "bold", marginBottom: 12 }}>Packaging your full size desktop</h2>
        <ol style={{ paddingLeft: 22, fontSize: 18, lineHeight: 1.6 }}>
          <li style={{ marginBottom: 17 }}>
            <div>Please remove the 4 corner foam protectors from the box. Please set them aside as they will be reused later. Do not remove the inner box, and open the flaps.</div>
            <img src="/images/step1.png" alt="Packing step 1" style={{ maxWidth: 520, width: '100%', margin: '18px 0 9px 0', borderRadius: 7 }} />
          </li>
          <li style={{ marginBottom: 17 }}>
            <div>Wrap your tower with the included bubble wrap and place it inside the inner box. It should fit snugly. If it's too tight remove one section of bubble wrap at a time and reinsert into the inner box.</div>
            <img src="/images/step2.png" alt="Packing step 2" style={{ maxWidth: 340, width: '100%', margin: '18px 0 9px 0', borderRadius: 7 }} />
          </li>
          <li style={{ marginBottom: 17 }}>
            <div>Tape the inner box closed with one of the included pieces of tape.</div>
            <img src="/images/step3.png" alt="Packing step 3" style={{ maxWidth: 500, width: '100%', margin: '18px 0 9px 0', borderRadius: 7 }} />
          </li>
          <li style={{ marginBottom: 17 }}>
            <div>Reinsert the foam corner blocks. It'll be a tight fit.</div>
            <img src="/images/step4.png" alt="Packing step 4" style={{ maxWidth: 340, width: '100%', margin: '18px 0 9px 0', borderRadius: 7 }} />
          </li>
          <li style={{ marginBottom: 17 }}>
            <div>Use one of the of the included tape strips to hold the two outer two flaps together.</div>
            <img src="/images/step5.png" alt="Packing step 5" style={{ maxWidth: 360, width: '100%', margin: '18px 0 9px 0', borderRadius: 7 }} />
          </li>
          <li style={{ marginBottom: 17 }}>
            <div>Use the other six tape strips to securely close the box the rest of the way by using two overlapping strips of tape on each flap and two overlapping strips of tape down the center to finish sealing the box. Overlap the tape as seen below.</div>
            <img src="/images/step6.png" alt="Packing step 6" style={{ maxWidth: 340, width: '100%', margin: '18px 0 9px 0', borderRadius: 7 }} />
          </li>
          <li style={{ marginBottom: 17 }}>
            <div>Repeat on the other flap and down the middle.</div>
            <img src="/images/step7.png" alt="Packing step 7" style={{ maxWidth: 390, width: '100%', margin: '18px 0 9px 0', borderRadius: 7 }} />
          </li>
          <li style={{ marginBottom: 17 }}>
            <div>Attach the return label over the top of the inbound label.</div>
            <img src="/images/step8.png" alt="Packing step 8" style={{ maxWidth: 336, width: '100%', margin: '18px 0 9px 0', borderRadius: 7 }} />
          </li>
        </ol>
        <div style={{ marginTop: 26, fontWeight: 600, color: '#444', fontSize: 17 }}>Please reach out with any questions or if you're ready for us to schedule a courier pickup.</div>
      </div>
      <button className="return-option" onClick={() => navigate("/")}>Back to Instructions</button>
    </div>
  );
}
