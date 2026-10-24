/**
 * Fetches live rating and installs from Google Play Store for all apps in the portfolio
 * and writes src/data/play-store-stats.json. Run: node scripts/update-play-store-stats.js
 *
 * Requires: npm install google-play-scraper (add as devDependency)
 */
import gplay from 'google-play-scraper'
import { writeFileSync, mkdirSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUT_PATH = join(__dirname, '..', 'src', 'data', 'play-store-stats.json')

const APP_IDS = [
  'com.collectivehealth.member',
  'com.dms.salesport.booth',
  'com.dms.salesport.distributor',
  'com.nuziveeduseeds.nslchannel',
  'com.nsl.subeejkisan',
  'com.cortevaindia.mcrc',
  'com.cortevaindia.amr',
  'go.meethour.io',
  'com.roots.rootsemployee',
  'com.sivashakthi',
  'com.pioneer.india.directsales',
  'com.corteva.rootsapplication',
  'com.ssr.piqyu',
  'com.Nsl.KisanVikas.farmmanagement',
  'com.Nsl.retailAuditSurvey.retailaudits'
]

async function fetchApp (appId) {
  try {
    const app = await gplay.app({
      appId,
      country: 'in',
      lang: 'en'
    })
    return {
      appId,
      scoreText: app.scoreText ?? null,
      score: app.score ?? null,
      installs: app.installs ?? null,
      minInstalls: app.minInstalls ?? null,
      ratings: app.ratings ?? null
    }
  } catch (err) {
    console.warn(`Failed to fetch ${appId}:`, err.message)
    return { appId, error: err.message }
  }
}

async function main () {
  const results = {}
  for (const appId of APP_IDS) {
    process.stdout.write(`Fetching ${appId}... `)
    const data = await fetchApp(appId)
    results[appId] = data
    if (data.scoreText) {
      console.log(`${data.scoreText}★, ${data.installs ?? 'N/A'}`)
    } else {
      console.log(data.error ? `Error: ${data.error}` : 'No data')
    }
  }

  mkdirSync(dirname(OUT_PATH), { recursive: true })
  writeFileSync(OUT_PATH, JSON.stringify(results, null, 2), 'utf8')
  console.log(`\nWrote ${OUT_PATH}`)
}

main().catch(err => {
  console.error(err)
  process.exit(1)
})
