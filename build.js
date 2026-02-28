#!/usr/bin/env node
// Build all Slidev decks into dist/
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const root = __dirname;
const dist = path.join(root, 'dist');

// Find all deck folders (contain a slides.md)
const decks = fs.readdirSync(root).filter(dir => {
  const full = path.join(root, dir);
  return fs.statSync(full).isDirectory() &&
    fs.existsSync(path.join(full, 'slides.md'));
});

console.log(`Found decks: ${decks.join(', ')}`);

// Clean dist
if (fs.existsSync(dist)) execSync(`rm -rf ${dist}`);
fs.mkdirSync(dist);

// Install root deps once
console.log('Installing dependencies...');
execSync('npm install --legacy-peer-deps', { stdio: 'inherit', cwd: root });

// Build each deck
for (const deck of decks) {
  const deckDir = path.join(root, deck);
  const outDir = path.join(dist, deck);
  console.log(`\nBuilding ${deck}...`);
  execSync(
    `npx slidev build slides.md --base /${deck}/ --out ${outDir}`,
    { stdio: 'inherit', cwd: deckDir }
  );
}

// Generate index page
const links = decks.map(d => `<li><a href="/${d}/">${d.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}</a></li>`).join('\n    ');
const index = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Slides — Assaf Mashiah</title>
  <style>
    body { font-family: system-ui, sans-serif; max-width: 600px; margin: 4rem auto; padding: 0 2rem; }
    h1 { font-size: 2rem; margin-bottom: 2rem; }
    ul { list-style: none; padding: 0; }
    li { margin: 1rem 0; }
    a { font-size: 1.2rem; color: #0057a6; text-decoration: none; }
    a:hover { text-decoration: underline; }
  </style>
</head>
<body>
  <h1>Presentations</h1>
  <ul>
    ${links}
  </ul>
</body>
</html>`;

fs.writeFileSync(path.join(dist, 'index.html'), index);
console.log('\nBuild complete! Output: dist/');
