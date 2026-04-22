// Genera favicons y el icono para Google/redes desde logo-abaco.png.
// - Recorta solo la parte del isologo (sin el texto) para que sea legible
//   a 16×16 y 32×32 en SERP de Google.
// - Genera app/icon.png (512×512) y app/apple-icon.png (180×180) con
//   padding y fondo blanco sólido (Google preferencia: no transparencia
//   para favicons en resultados de búsqueda).
// - Genera también public/favicon.ico (32×32) como fallback clásico.
//
// Uso: node scripts/generate-favicons.mjs

import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const input = path.resolve(root, "public/images/logo-abaco.png");

// Recorte del isologo: solo la parte superior del PNG (sin el texto).
// El PNG original es 830×623. El isologo ocupa aprox. los primeros ~420 px.
const { width, height } = await sharp(input).metadata();
if (!width || !height) throw new Error("No se pudo leer el tamaño del logo");

const iconCrop = {
  left: 0,
  top: 0,
  width,
  height: Math.round(height * 0.68), // solo la parte del isologo
};

// Detectar bounding box real del contenido recortado (ignorando transparencias).
const cropped = await sharp(input)
  .extract(iconCrop)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const { data, info } = cropped;
let minX = info.width, minY = info.height, maxX = 0, maxY = 0;
for (let y = 0; y < info.height; y++) {
  for (let x = 0; x < info.width; x++) {
    const alpha = data[(y * info.width + x) * 4 + 3];
    if (alpha > 16) {
      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;
    }
  }
}

const tightWidth = maxX - minX + 1;
const tightHeight = maxY - minY + 1;
const tightLogo = await sharp(data, {
  raw: { width: info.width, height: info.height, channels: 4 },
})
  .extract({ left: minX, top: minY, width: tightWidth, height: tightHeight })
  .png()
  .toBuffer();

async function makeIcon(size, outPath, { background = "#ffffff", paddingPct = 0.12 } = {}) {
  const contentSize = Math.round(size * (1 - paddingPct * 2));
  const logoBuffer = await sharp(tightLogo)
    .resize(contentSize, contentSize, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  await sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background,
    },
  })
    .composite([{ input: logoBuffer, gravity: "center" }])
    .png({ compressionLevel: 9 })
    .toFile(outPath);

  console.log(`✓ ${outPath} (${size}×${size})`);
}

// app/icon.png → Next.js auto-genera <link rel="icon"> desde este fichero.
await makeIcon(512, path.resolve(root, "app/icon.png"));

// app/apple-icon.png → Apple touch icon.
await makeIcon(180, path.resolve(root, "app/apple-icon.png"));

// public/favicon.ico (realmente PNG con extensión .ico, aceptado por navegadores).
await makeIcon(48, path.resolve(root, "public/favicon.ico"));

console.log("\nFavicons generados correctamente.");
console.log("Recuerda: Google puede tardar semanas en actualizar el favicon en SERP.");
