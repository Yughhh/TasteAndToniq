import sharp from 'sharp';
import fs from 'fs';

async function removePink() {
  // Read the original unedited webp
  const { data, info } = await sharp('public/images/logo.webp')
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const bgR = data[0];
  const bgG = data[1];
  const bgB = data[2];

  const tolerance = 95; // increased tolerance for hard cut to eliminate all pink/maroon blend

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];

    const dist = Math.sqrt(
      Math.pow(r - bgR, 2) + Math.pow(g - bgG, 2) + Math.pow(b - bgB, 2)
    );

    // Hard threshold without partial alpha blending to avoid pink edge artifacts
    if (dist < tolerance) {
      data[i + 3] = 0;
    } else {
      // If the pixel is distinctly reddish/pinkish (significantly more red than green/blue)
      // and not too bright (which could be gold/white), zero it out as well to be safe
      if (r > g + 30 && r > b + 30 && g < 160 && b < 160) {
         data[i + 3] = 0;
      }
    }
  }

  // Enhance quality: upscale to make it look higher res, and slightly sharpen text edges
  const processedBuffer = await sharp(data, {
    raw: { width: info.width, height: info.height, channels: 4 }
  })
    .resize(info.width * 2, info.height * 2, { kernel: 'lanczos3' })
    .sharpen({ sigma: 1.2 })
    .webp({ quality: 100, lossless: true })
    .toBuffer();

  fs.writeFileSync('public/images/logo_transparent.webp', processedBuffer);
  console.log("Pink shadow removed and quality enhanced!");
}
removePink().catch(console.error);
