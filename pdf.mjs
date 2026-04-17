import puppeteer from 'puppeteer';
import { readFileSync } from 'fs';
import { resolve } from 'path';

const html = readFileSync('./resume.html', 'utf-8');

const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.setContent(html, { waitUntil: 'networkidle0' });

// Set A4 width, then measure full content height
await page.setViewport({ width: 794, height: 1123 });
const height = await page.evaluate(() => document.body.scrollHeight);

await page.pdf({
  path: './resume.pdf',
  width: '794px',
  height: `${height}px`,
  printBackground: true,
  margin: { top: '0', right: '0', bottom: '0', left: '0' },
  pageRanges: '1',
});

await browser.close();
console.log('Written to resume.pdf');
