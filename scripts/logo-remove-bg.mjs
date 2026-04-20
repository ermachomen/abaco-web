// Genera una versión PNG del logo con fondo blanco eliminado (canal alpha).
// Uso: node scripts/logo-remove-bg.mjs
//
// - Píxeles casi blancos (brillo >= thresholdHigh) → alfa 0 (transparentes).
// - Píxeles claros (brillo entre thresholdLow y thresholdHigh) → alfa proporcional
//   para suavizar los bordes y evitar dentado por anti-aliasing.
// - Recorta el bounding box del contenido no blanco para quitar márgenes.

import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const inputPath = path.resolve(__dirname, "..", "public", "images", "logo-abaco1.jpeg");
const outputPath = path.resolve(__dirname, "..", "public", "images", "logo-abaco.png");

const THRESHOLD_HIGH = 245; // brillo a partir del cual el píxel es "fondo"
const THRESHOLD_LOW = 220;  // por debajo es "contenido sólido"

const { data, info } = await sharp(inputPath)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width, height, channels } = info;
if (channels !== 4) {
  throw new Error(`Se esperaban 4 canales RGBA, se obtuvieron ${channels}`);
}

for (let i = 0; i < data.length; i += 4) {
  const r = data[i];
  const g = data[i + 1];
  const b = data[i + 2];
  // Brillo mínimo: si ALGÚN canal es bajo, es contenido.
  const luminosity = Math.min(r, g, b);

  if (luminosity >= THRESHOLD_HIGH) {
    data[i + 3] = 0;
  } else if (luminosity >= THRESHOLD_LOW) {
    const t = (THRESHOLD_HIGH - luminosity) / (THRESHOLD_HIGH - THRESHOLD_LOW);
    data[i + 3] = Math.round(255 * t);
  }
}

// Detectar bounding box del contenido (píxeles con alfa > 0).
let minX = width, minY = height, maxX = 0, maxY = 0;
for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    const idx = (y * width + x) * 4 + 3;
    if (data[idx] > 8) {
      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;
    }
  }
}

const padding = 20; // pequeño margen para respirar
const cropLeft = Math.max(0, minX - padding);
const cropTop = Math.max(0, minY - padding);
const cropRight = Math.min(width - 1, maxX + padding);
const cropBottom = Math.min(height - 1, maxY + padding);
const cropWidth = cropRight - cropLeft + 1;
const cropHeight = cropBottom - cropTop + 1;

await sharp(data, { raw: { width, height, channels: 4 } })
  .extract({ left: cropLeft, top: cropTop, width: cropWidth, height: cropHeight })
  .png({ compressionLevel: 9 })
  .toFile(outputPath);

console.log(`✓ Escrito ${outputPath}`);
console.log(`  Original: ${width}×${height}`);
console.log(`  Recortado: ${cropWidth}×${cropHeight}`);
