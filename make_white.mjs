import sharp from 'sharp';
import fs from 'fs';

async function makeWhite() {
  const { data, info } = await sharp('public/images/logo.webp')
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  // Assume top-left pixel is the strict background color
  const bgR = data[0];
  const bgG = data[1];
  const bgB = data[2];

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];

    const dist = Math.sqrt(
      Math.pow(r - bgR, 2) + Math.pow(g - bgG, 2) + Math.pow(b - bgB, 2)
    );

    // Completely remove the background (maroon/pink hues)
    if (dist < 90) {
      data[i + 3] = 0; // Transparent
    } else {
      // Calculate a smooth alpha for the edges to prevent blocky artifacts
      let alpha = 255;
      if (dist < 140) {
        alpha = Math.floor(((dist - 90) / 50) * 255);
      }
      
      // Make the pixel STRICTLY pure white
      data[i]     = 255;
      data[i + 1] = 255;
      data[i + 2] = 255;
      data[i + 3] = alpha;
    }
  }

  const processedBuffer = await sharp(data, {
    raw: { width: info.width, height: info.height, channels: 4 }
  })
    // Upscale for high quality
    .resize(info.width * 2, info.height * 2, { kernel: 'lanczos3' })
    .webp({ quality: 100, lossless: true })
    .toBuffer();

  fs.writeFileSync('public/images/logo_transparent.webp', processedBuffer);
  console.log("Made logo strictly pure white with no pink traces!");
}

makeWhite().catch(console.error);
