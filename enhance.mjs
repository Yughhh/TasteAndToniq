import sharp from 'sharp';
import fs from 'fs';

async function enhance() {
  const metadata = await sharp('public/images/logo_transparent.webp').metadata();
  
  const buffer = await sharp('public/images/logo_transparent.webp')
    .resize(metadata.width * 2, metadata.height * 2, { kernel: 'lanczos3' })
    .sharpen({ sigma: 1 })
    .webp({ quality: 100, lossless: true })
    .toBuffer();
    
  fs.writeFileSync('public/images/logo_transparent.webp', buffer);
  console.log("Enhanced logo quality!");
}
enhance().catch(console.error);
