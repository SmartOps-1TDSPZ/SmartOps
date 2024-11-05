import React from "react";
import "./styles.css"; // Arquivo CSS

type ButtonProps = {
  text: string;
  variant: "primary" | "outline"; // Variantes dos botões
  size?: "small" | "medium" | "large"; // Tamanhos opcionais dos botões
  width?: number; // Largura personalizada
  height?: number; // Altura personalizada
  color?: string; // Cor de fundo personalizada
  textColor?: string; // Cor do texto personalizada
  borderColor?: string; // Cor da borda personalizada (para o outline)
};

const SimpleButton: React.FC<ButtonProps> = ({
  text,
  variant,
  size = "medium",
  width,
  height,
  color,
  textColor,
  borderColor,
}) => {
  return (
    <button
      className={`button ${variant} ${size}`}
      style={{
        backgroundColor: variant === "primary" && color ? color : "",
        color: textColor,
        borderColor: variant === "outline" && borderColor ? borderColor : "",
        width: `${width}px`,
        height: `${height}px`,
      }}
    >
      {text}
    </button>
  );
};

export default SimpleButton;
