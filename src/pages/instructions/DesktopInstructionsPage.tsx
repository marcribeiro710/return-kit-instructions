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
      {/* BEGIN: Google Doc Embed for Desktop Packing Instructions */}
      <div className="google-doc-section">
        <iframe
          src="https://docs.google.com/document/d/e/2PACX-1vS6Xy8jYjad8gGaNkLLw9jxLPmxLabdl27_gUt5ES20LKmK7605W9-MzGij8OCUbuedQD468jQ1SgpB/pub?embedded=true"
          title="Desktop Packing Instructions Google Doc"
          width="100%"
          height="900px"
          style={{
            border: 'none',
            background: '#fff',
            maxWidth: '100%',
            boxSizing: 'border-box',
            overflowX: 'hidden'
          }}
          allowFullScreen={true}
        />
      </div>
      {/* END: Google Doc Embed */}
      <button className="return-option" onClick={() => navigate("/")}>Back to Instructions</button>
    </div>
  );
}
