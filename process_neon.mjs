import sharp from 'sharp';
import fs from 'fs';

async function processNeon() {
  const { data, info } = await sharp('T and T Logo.png')
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];

    const luminance = Math.round(0.2126 * r + 0.7152 * g + 0.0722 * b);
    
    data[i] = 255;
    data[i + 1] = 255;
    data[i + 2] = 255;
    
    // Lower the intensity of the neon shadow smoothly using a power curve.
    // This mathematically reduces the mid-tones (glow) heavily while leaving the solid 255 (text core) bright.
    data[i + 3] = Math.max(0, Math.min(255, Math.round(Math.pow(luminance / 255, 2.5) * 255)));
  }

  const processedBuffer = await sharp(data, {
    raw: { width: info.width, height: info.height, channels: 4 }
  })
    .resize({ width: 1000, withoutEnlargement: true })
    .webp({ quality: 100, lossless: true })
    .toBuffer();

  fs.writeFileSync('public/images/logo_transparent.webp', processedBuffer);
  console.log("Neon logo updated with lower shadow opacity!");
}

processNeon().catch(console.error);
