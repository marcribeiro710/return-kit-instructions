
import { useNavigate } from "react-router-dom";


export default function LogoButton() {
  const navigate = useNavigate();
  return (
    <img
      src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkL9UFA4MD2fguemOZclswSCBO73820j_JpA&s"}
      className="company-logo"
      alt="Company Logo"
      style={{ position: "absolute", top: 14, left: 20, width: 52, height: "auto", cursor: "pointer", borderRadius: 8, background: "#fff" }}
      onClick={() => navigate("/")}
    />
  );
}
