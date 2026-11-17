const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const ASSETS_DIR = path.join(__dirname, '..', 'src', 'assets');

async function processImages() {
  console.log('Starting image optimization with sharp...');

  const images = [
    {
      source: 'new hero.png',
      baseName: 'new-hero',
      maxWidth: 1200,
      sizes: [600, 1000]
    },
    {
      source: 'final image.jpg',
      baseName: 'final-image',
      maxWidth: 1600,
      sizes: [800, 1200, 1600]
    },
    {
      source: 'our journey.png',
      baseName: 'our-journey',
      maxWidth: 1200,
      sizes: [600, 1000]
    },
    {
      source: 'presko.png',
      baseName: 'presko',
      maxWidth: 1000,
      sizes: [500, 800]
    },
    {
      source: 'garden.png',
      baseName: 'garden',
      maxWidth: 1000,
      sizes: [500, 800]
    },
    {
      source: 'capiz.png',
      baseName: 'capiz',
      maxWidth: 1000,
      sizes: [500, 800]
    },
    {
      source: 'mahogany.png',
      baseName: 'mahogany',
      maxWidth: 1000,
      sizes: [500, 800]
    },
    {
      source: 'the cafe.png',
      baseName: 'the-cafe',
      maxWidth: 1000,
      sizes: [500, 800]
    }
  ];

  for (const img of images) {
    const inputPath = path.join(ASSETS_DIR, img.source);
    if (!fs.existsSync(inputPath)) {
      console.warn(`File not found: ${inputPath}`);
      continue;
    }

    const inputStat = fs.statSync(inputPath);
    console.log(`\nOptimizing ${img.source} (Original: ${(inputStat.size / 1024 / 1024).toFixed(2)} MB)...`);

    // 1. Generate full optimized WebP (max width)
    const mainWebpPath = path.join(ASSETS_DIR, `${img.baseName}.webp`);
    await sharp(inputPath)
      .resize({ width: img.maxWidth, withoutEnlargement: true })
      .webp({ quality: 80, effort: 6 })
      .toFile(mainWebpPath);
    const mainWebpStat = fs.statSync(mainWebpPath);
    console.log(`  -> ${img.baseName}.webp: ${(mainWebpStat.size / 1024).toFixed(1)} KB`);

    // 2. Generate responsive variants
    for (const size of img.sizes) {
      const variantPath = path.join(ASSETS_DIR, `${img.baseName}-${size}w.webp`);
      await sharp(inputPath)
        .resize({ width: size, withoutEnlargement: true })
        .webp({ quality: 80, effort: 5 })
        .toFile(variantPath);
      const varStat = fs.statSync(variantPath);
      console.log(`  -> ${img.baseName}-${size}w.webp: ${(varStat.size / 1024).toFixed(1)} KB`);
    }

    // 3. Replace/compress the original fallback if it was a heavy PNG or JPG
    if (img.source.endsWith('.jpg') || img.source.endsWith('.jpeg')) {
      const tempJpg = path.join(ASSETS_DIR, `${img.source}.opt.jpg`);
      await sharp(inputPath)
        .resize({ width: img.maxWidth, withoutEnlargement: true })
        .jpeg({ quality: 80, mozjpeg: true })
        .toFile(tempJpg);
      fs.renameSync(tempJpg, inputPath);
      const newJpgStat = fs.statSync(inputPath);
      console.log(`  -> Fallback ${img.source} compressed: ${(newJpgStat.size / 1024).toFixed(1)} KB`);
    } else if (img.source.endsWith('.png')) {
      const tempPng = path.join(ASSETS_DIR, `${img.source}.opt.png`);
      await sharp(inputPath)
        .resize({ width: img.maxWidth, withoutEnlargement: true })
        .png({ quality: 80, compressionLevel: 9 })
        .toFile(tempPng);
      fs.renameSync(tempPng, inputPath);
      const newPngStat = fs.statSync(inputPath);
      console.log(`  -> Fallback ${img.source} compressed: ${(newPngStat.size / 1024).toFixed(1)} KB`);
    }
  }

  // Also optimize og-image in public
  const ogImg = path.join(__dirname, '..', 'public', 'og-image.jpg');
  if (fs.existsSync(ogImg)) {
    const tempOg = path.join(__dirname, '..', 'public', 'og-image-opt.jpg');
    await sharp(ogImg)
      .resize({ width: 1200, withoutEnlargement: true })
      .jpeg({ quality: 80, mozjpeg: true })
      .toFile(tempOg);
    fs.renameSync(tempOg, ogImg);
    console.log(`\nOptimized public/og-image.jpg: ${(fs.statSync(ogImg).size / 1024).toFixed(1)} KB`);
  }

  console.log('\nAll images successfully optimized!');
}

processImages().catch(err => {
  console.error(err);
  process.exit(1);
});
