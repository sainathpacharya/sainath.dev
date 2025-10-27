import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function generatePDF() {
  try {
    console.log('Launching browser...');
    const browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox']
    });
    
    const page = await browser.newPage();
    const htmlPath = join(__dirname, '../public/CV_EU_Format.html');
    const filePath = `file://${htmlPath}`;
    
    console.log('Loading CV HTML...');
    await page.goto(filePath, { waitUntil: 'networkidle0' });
    
    const outputPath = join(__dirname, '../public/resume.pdf');
    console.log('Generating PDF...');
    
    await page.pdf({
      path: outputPath,
      format: 'A4',
      margin: {
        top: '0',
        right: '0',
        bottom: '0',
        left: '0'
      },
      printBackground: true
    });
    
    console.log(`✅ PDF generated successfully: ${outputPath}`);
    
    await browser.close();
    process.exit(0);
  } catch (error) {
    console.error('Error generating PDF:', error);
    process.exit(1);
  }
}

generatePDF();

