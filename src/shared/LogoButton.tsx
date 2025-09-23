
import { useNavigate } from "react-router-dom";


interface LogoButtonProps {
  isStatic?: boolean;
  size?: number;
  style?: React.CSSProperties;
}

export default function LogoButton({ isStatic = false, size = 52, style }: LogoButtonProps) {
  const navigate = useNavigate();
  const imageStyle: React.CSSProperties = {
    width: size,
    height: "auto",
    cursor: isStatic ? "default" : "pointer",
    ...style,
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
