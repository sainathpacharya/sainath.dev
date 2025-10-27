// This is a helper script to convert HTML CV to PDF
// You can use browser's print-to-PDF or tools like Puppeteer

console.log('CV Conversion Guide:');
console.log('To convert CV_EU_Format.html to PDF, you can:');
console.log('');
console.log('Option 1: Browser Print to PDF');
console.log('  1. Open CV_EU_Format.html in a browser');
console.log('  2. Press Cmd+P (Mac) or Ctrl+P (Windows)');
console.log('  3. Select "Save as PDF" as destination');
console.log('  4. Save as resume.pdf');
console.log('');
console.log('Option 2: Use Puppeteer (automated)');
console.log('  Install: npm install puppeteer');
console.log('  Run: node scripts/generate-cv-pdf.js');
console.log('');
console.log('Option 3: Use wkhtmltopdf');
console.log('  Install: brew install wkhtmltopdf (Mac)');
console.log('  Run: wkhtmltopdf public/CV_EU_Format.html public/resume.pdf');

