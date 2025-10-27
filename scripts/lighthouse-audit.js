#!/usr/bin/env node
/**
 * Lighthouse Audit Script
 * Runs automated Lighthouse audits on sainath.dev
 */

import lighthouse from 'lighthouse';
import chromeLauncher from 'chrome-launcher';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TARGET_URL = 'https://sainathpacharya.github.io/sainath.dev';
const REPORTS_DIR = path.join(__dirname, '../reports/lighthouse');

// Ensure reports directory exists
if (!fs.existsSync(REPORTS_DIR)) {
  fs.mkdirSync(REPORTS_DIR, { recursive: true });
}

async function runLighthouseAudit() {
  console.log('🔍 Starting Lighthouse audit...');
  console.log(`📊 Auditing: ${TARGET_URL}\n`);

  // Launch Chrome
  const chrome = await chromeLauncher.launch({
    chromeFlags: ['--headless', '--no-sandbox']
  });

  const options = {
    logLevel: 'info',
    output: ['html', 'json'],
    onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
    port: chrome.port
  };

  try {
    // Run Lighthouse
    const runnerResult = await lighthouse(TARGET_URL, options);
    
    // Extract scores
    const scores = {
      performance: runnerResult.lhr.categories.performance.score * 100,
      accessibility: runnerResult.lhr.categories.accessibility.score * 100,
      bestPractices: runnerResult.lhr.categories['best-practices'].score * 100,
      seo: runnerResult.lhr.categories.seo.score * 100
    };

    // Get timestamp for unique filenames
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const timestampShort = new Date().toISOString().slice(0, 19).replace(/:/g, '-');

    // Save HTML report
    const htmlReportPath = path.join(REPORTS_DIR, `lighthouse-report-${timestampShort}.html`);
    fs.writeFileSync(htmlReportPath, runnerResult.report[0]);
    console.log(`✅ HTML report saved: ${htmlReportPath}`);

    // Save JSON report
    const jsonReportPath = path.join(REPORTS_DIR, `lighthouse-report-${timestampShort}.json`);
    fs.writeFileSync(jsonReportPath, JSON.stringify(runnerResult.lhr, null, 2));
    console.log(`✅ JSON report saved: ${jsonReportPath}`);

    // Display results
    console.log('\n📊 Lighthouse Audit Results\n');
    console.log('═'.repeat(50));
    console.log(`Performance:      ${scores.performance.toFixed(1)}/100 ${getScoreIcon(scores.performance)}`);
    console.log(`Accessibility:    ${scores.accessibility.toFixed(1)}/100 ${getScoreIcon(scores.accessibility)}`);
    console.log(`Best Practices:   ${scores.bestPractices.toFixed(1)}/100 ${getScoreIcon(scores.bestPractices)}`);
    console.log(`SEO:              ${scores.seo.toFixed(1)}/100 ${getScoreIcon(scores.seo)}`);
    console.log('═'.repeat(50));

    // Display opportunities
    console.log('\n🎯 Top Optimization Opportunities:\n');
    displayOpportunities(runnerResult.lhr);

    return { scores, runnerResult, htmlReportPath, jsonReportPath };
  } catch (error) {
    console.error('❌ Error running Lighthouse audit:', error);
    throw error;
  } finally {
    await chrome.kill();
  }
}

function getScoreIcon(score) {
  if (score >= 95) return '✅';
  if (score >= 75) return '⚠️';
  return '❌';
}

function displayOpportunities(lhr) {
  const categories = ['performance', 'accessibility', 'best-practices', 'seo'];
  
  categories.forEach(category => {
    const cat = lhr.categories[category];
    if (!cat) return;

    console.log(`\n📁 ${category.toUpperCase()} (${(cat.score * 100).toFixed(1)}/100)`);
    
    // Get top 3 audit results with opportunities
    const audits = lhr.audits;
    const relevantAudits = Object.values(audits)
      .filter(audit => audit.details?.overallSavingsMs || (audit.score !== null && audit.score < 1))
      .filter(audit => {
        const title = audit.title?.toLowerCase() || '';
        const categoryLower = category.toLowerCase();
        return title.includes(categoryLower) || audit.id?.includes(categoryLower);
      })
      .sort((a, b) => (b.score || 1) - (a.score || 1))
      .slice(0, 3);

    if (relevantAudits.length > 0) {
      relevantAudits.forEach(audit => {
        console.log(`  • ${audit.title}`);
        if (audit.description) {
          console.log(`    ${audit.description.substring(0, 100)}...`);
        }
      });
    }
  });
}

// Run the audit
runLighthouseAudit()
  .then(results => {
    console.log('\n✨ Audit complete! Check reports directory for detailed results.');
  })
  .catch(error => {
    console.error('❌ Audit failed:', error);
    process.exit(1);
  });

