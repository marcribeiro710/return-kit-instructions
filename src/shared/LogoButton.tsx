
import { useNavigate } from "react-router-dom";


interface LogoButtonProps {
  isStatic?: boolean;
  size?: number;
}

export default function LogoButton({ isStatic = false, size = 52 }: LogoButtonProps) {
  const navigate = useNavigate();
  const imageStyle = {
    position: "absolute" as const,
    top: 14,
    left: 20,
    width: size,
    height: "auto",
    borderRadius: 8,
    background: "#fff",
    cursor: isStatic ? "default" : "pointer"
  };
  return (
    <img
      src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkL9UFA4MD2fguemOZclswSCBO73820j_JpA&s"}
      className="company-logo"
      alt="Company Logo"
      style={imageStyle}
      {...(!isStatic && { onClick: () => navigate("/") })}
    />
  );
}
