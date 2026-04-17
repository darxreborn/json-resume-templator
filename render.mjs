import { render } from './jsonresume-theme-reference/dist/index.js';
import { writeFileSync, mkdirSync } from 'fs';
import { createInterface } from 'readline';
import puppeteer from 'puppeteer';

const rl = createInterface({ input: process.stdin, output: process.stdout });

const ask = (q) => new Promise((resolve) => rl.question(q, resolve));

// Collect lines until two consecutive blank lines
const collectJson = () => new Promise((resolve) => {
  const lines = [];
  let lastBlank = false;
  const handler = (line) => {
    if (line === '' && lastBlank) {
      rl.removeListener('line', handler);
      resolve(lines.join('\n').trim());
    } else {
      lines.push(line);
      lastBlank = line === '';
    }
  };
  rl.on('line', handler);
});

console.log('Paste your JSON resume content, then press Enter twice:');
const raw = await collectJson();

let resume;
try {
  resume = JSON.parse(raw);
} catch {
  console.error('Invalid JSON — exiting.');
  process.exit(1);
}

const name = (await ask('Filename (without extension): ')).trim().replace(/\s+/g, '_');
rl.close();

if (!name) {
  console.error('No filename provided — exiting.');
  process.exit(1);
}

const dir = `./tailored_resumes/${name}`;
mkdirSync(dir, { recursive: true });

const jsonPath = `${dir}/${name}.json`;
const htmlPath = `${dir}/${name}.html`;
const pdfPath  = `${dir}/${name}.pdf`;

// Save JSON
writeFileSync(jsonPath, JSON.stringify(resume, null, 2));
console.log(`✓ JSON → ${jsonPath}`);

// Generate HTML
const html = render(resume);
writeFileSync(htmlPath, html);
console.log(`✓ HTML → ${htmlPath}`);

// Generate continuous PDF
const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.setContent(html, { waitUntil: 'networkidle0' });
await page.setViewport({ width: 794, height: 1123 });
const height = await page.evaluate(() => document.body.scrollHeight);
await page.pdf({
  path: pdfPath,
  width: '794px',
  height: `${height}px`,
  printBackground: true,
  margin: { top: '0', right: '0', bottom: '0', left: '0' },
  pageRanges: '1',
});
await browser.close();
console.log(`✓ PDF  → ${pdfPath}`);
