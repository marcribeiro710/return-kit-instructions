
import { useNavigate } from "react-router-dom";
import reactLogo from "../assets/react.svg";

export default function LogoButton() {
  const navigate = useNavigate();
  return (
    <img
      src={reactLogo}
      className="company-logo"
      alt="Company Logo"
      style={{ position: "absolute", top: 14, left: 20, width: 52, height: "auto", cursor: "pointer", borderRadius: 8, background: "#fff" }}
      onClick={() => navigate("/")}
    />
  );
}
