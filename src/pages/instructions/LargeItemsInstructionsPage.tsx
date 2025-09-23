import { useNavigate } from "react-router-dom";
import LogoButton from "../../shared/LogoButton";
import "../../App.css";

export default function LargeItemsInstructionsPage() {
  const navigate = useNavigate();
  return (
    <div className="welcome-root" style={{ minHeight: 520, position: "relative" }}>
      <LogoButton />
      <h2 className="welcome-title">Large Items/Quantities Return Instructions</h2>
      <ul style={{ textAlign: "left", margin: "24px auto", maxWidth: 380, color: "#444", lineHeight: 1.7 }}>
        <li>1. Organize items logically (e.g., all keyboards together).</li>
        <li>2. Use appropriate sized boxes and sufficient padding.</li>
        <li>3. Ensure heavier items are well-protected at the bottom.</li>
        <li>4. Label each box with its contents and your return code.</li>
        <li>5. Seal the boxes securely and attach return labels.</li>
        <li>6. Arrange for courier pickup if required or deliver to drop-off.</li>
      </ul>
      <button className="return-option" onClick={() => navigate("/instructions")}>Back to Instructions</button>
    </div>
  );
}
