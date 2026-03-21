import sharp from 'sharp';

async function removeBackground() {
  const { data, info } = await sharp('public/images/logo.webp')
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  // Assume top-left pixel is the background color (maroon)
  const bgR = data[0];
  const bgG = data[1];
  const bgB = data[2];

  // A moderate tolerance to catch anti-aliased and compressed pixels
  const tolerance = 60;

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];

    const dist = Math.sqrt(
      Math.pow(r - bgR, 2) + Math.pow(g - bgG, 2) + Math.pow(b - bgB, 2)
    );

    if (dist < tolerance) {
      data[i + 3] = 0; // Set alpha to 0 (transparent)
    } else if (dist < tolerance + 30) {
      // Partial transparency for edge pixels to prevent harsh artifacts
      const factor = (dist - tolerance) / 30;
      data[i + 3] = Math.max(0, Math.floor(255 * factor));
    }
  }

  await sharp(data, {
    raw: {
      width: info.width,
      height: info.height,
      channels: 4,
    },
  })
    .webp()
    .toFile('public/images/logo_transparent.webp');
    console.log("Image processed: logo_transparent.webp created");
}

removeBackground().catch(console.error);
