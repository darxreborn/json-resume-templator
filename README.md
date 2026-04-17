# JSON Resume Templator

This project renders resumes provided in prompt applying a custom deisgn template of your choice. Outputs 3 files by default: JSON, HTML and PDF.
Template desing and worker can be found at `/jsonresume-theme-reference`

## Requirements
  - pnpm
  - node (npm)

```bash
# Build the template files
cd jsonresume-theme-reference && pnpm install && cd ..

# Install packages for parser through npm
npm install

# Invoke the parser, paste your JSON resume content and click enter 2-3 times
node render.mjs
```

# If you wish to regenerate only the PDF use:
node pdf.mjs

PDF output will use continuous scroll and A4 width.
