import Image from "next/image";

interface LogoProps {
  className?: string;
  /** Prioridad de carga: true en el logo del header (above-the-fold). */
  priority?: boolean;
  /** Alto renderizado; el ancho se calcula manteniendo la proporción. */
  height?: number;
  width?: number;
}

const LOGO_SRC = "/images/logo-abaco.png";
const LOGO_ALT = "Abaco Ingeniería";
// Proporciones reales del PNG con fondo transparente (ratio 830:623 ≈ 4:3).
const INTRINSIC_WIDTH = 830;
const INTRINSIC_HEIGHT = 623;

/**
 * Logo oficial de Abaco Ingeniería — sirve el fichero
 * /public/images/logo-abaco1.jpeg con proporción correcta.
 */
export default function Logo({
  className,
  priority = false,
  height,
  width,
}: LogoProps) {
  const finalHeight = height ?? 60;
  const finalWidth =
    width ?? Math.round((INTRINSIC_WIDTH / INTRINSIC_HEIGHT) * finalHeight);

  return (
    <Image
      src={LOGO_SRC}
      alt={LOGO_ALT}
      width={finalWidth}
      height={finalHeight}
      priority={priority}
      className={className}
    />
  );
}
