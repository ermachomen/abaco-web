import type { SVGProps } from "react";

interface LogoProps extends SVGProps<SVGSVGElement> {
  /** Fuerza un color uniforme (útil para footer monocromo). Si se omite, usa la paleta de marca tricolor. */
  monoColor?: string;
  /** Orientación: "horizontal" (símbolo + texto al lado) o "mark" (solo símbolo). */
  variant?: "horizontal" | "mark";
}

// Paleta real del logo Abaco Ingeniería
const BRAND_BLUE = "#1d3fc4";
const BRAND_RED = "#e31b23";
const BRAND_YELLOW = "#f5c518";

/**
 * Logo Abaco Ingeniería — recreación vectorial del isologo tricolor.
 * Fondo transparente (a diferencia del JPEG original).
 */
export default function Logo({
  monoColor,
  variant = "horizontal",
  className,
  ...rest
}: LogoProps) {
  const blue = monoColor ?? BRAND_BLUE;
  const red = monoColor ?? BRAND_RED;
  const yellow = monoColor ?? BRAND_YELLOW;

  if (variant === "mark") {
    return (
      <svg
        viewBox="0 0 160 110"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Abaco Ingeniería"
        className={className}
        {...rest}
      >
        <LogoMark blue={blue} red={red} yellow={yellow} />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 620 130"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Abaco Ingeniería"
      className={className}
      {...rest}
    >
      <g transform="translate(0,10)">
        <LogoMark blue={blue} red={red} yellow={yellow} />
      </g>

      <text
        x="180"
        y="92"
        fontFamily="Geist, 'Helvetica Neue', Arial, sans-serif"
        fontSize="58"
        fontWeight="700"
        fill={red}
        letterSpacing="-1.5"
      >
        abaco
      </text>
      <text
        x="345"
        y="92"
        fontFamily="Geist, 'Helvetica Neue', Arial, sans-serif"
        fontSize="58"
        fontWeight="400"
        fill={yellow}
        letterSpacing="-1.5"
      >
        ingeniería
      </text>
    </svg>
  );
}

function LogoMark({ blue, red, yellow }: { blue: string; red: string; yellow: string }) {
  return (
    <g fill="none" strokeLinejoin="miter" strokeLinecap="butt">
      {/* Columnas amarillas (las dos "M" de los lados) */}
      <path d="M20 92 L20 66 L42 44 L64 66 L64 92" stroke={yellow} strokeWidth="11" />
      <path d="M96 92 L96 66 L118 44 L140 66 L140 92" stroke={yellow} strokeWidth="11" />

      {/* M central roja (más alta, entre las dos amarillas) */}
      <path d="M48 92 L48 58 L66 38 L80 50 L94 38 L112 58 L112 92" stroke={red} strokeWidth="11" />

      {/* Tejado Λ azul externo (por encima de todo) */}
      <path d="M8 74 L80 4 L152 74" stroke={blue} strokeWidth="13" />
    </g>
  );
}
