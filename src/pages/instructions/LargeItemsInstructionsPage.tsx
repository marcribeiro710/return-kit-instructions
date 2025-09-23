import { useNavigate } from "react-router-dom";
import LogoButton from "../../shared/LogoButton";
import "../../App.css";

export default function LargeItemsInstructionsPage() {
  const navigate = useNavigate();
  return (
    <div className="welcome-root">
      <LogoButton isStatic size={376} style={{ marginBottom: 13, display: 'block' }} />
      <h1 className="welcome-title" style={{ marginBottom: 31 }}>
        Large Items/Quantities Return Instructions
      </h1>
      {/* BEGIN: Imported Google Docs Content */}
      <div className="google-doc-section">
        <p><b>Step 1: Group & List</b>
        <br/>Gather all items in groups (e.g., monitors, keyboards). Create a list and check each item for damage.</p>

        <img src="/assets/largeitems_step1.jpg" alt="Organizing large item groups" style={{ width: "100%", maxWidth: 400, margin: "18px auto" }} />

        <p><b>Step 2: Packing</b>
        <br/>Use sturdy boxes with ample padding for each item category. If boxes are large, put the heaviest items at the bottom. Bags for cables/accessories recommended.</p>

        <img src="/assets/largeitems_step2.jpg" alt="Large items packaging" style={{ width: "100%", maxWidth: 400, margin: "18px auto" }} />

        <p><b>Step 3: Label & Return</b>
        <br/>Label every box with contents and your unique return code. Attach the return label and arrange for pickup or drop-off as required.</p>

        <img src="/assets/largeitems_step3.jpg" alt="Labeling and returning large item boxes" style={{ width: "100%", maxWidth: 400, margin: "18px auto" }} />
      </div>
      {/* END: Imported Google Docs Content */}
      <button className="return-option" onClick={() => navigate("/")}>Back to Instructions</button>
    </div>
  );
}
