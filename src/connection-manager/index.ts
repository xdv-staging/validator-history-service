import 'dotenv/config'

import Crawler from '../crawler/crawl'
import { setupTable } from '../shared/database'
import config from '../shared/utils/config'

import agreement from './agreement'
import startConnections from './connections'
import { doManifestJobs } from './manifests'

async function start(): Promise<void> {
  await setupTable()
  // Migrate manifests from the legacy database. This will be removed once the service has collected enough manifests.
  // await migrate()
  const promises = []
  for (const entry of config.entries) {
    const crawler = new Crawler()
    promises.push(crawler.crawl(entry))
  }
  await Promise.all(promises)
  await startConnections()
  await doManifestJobs()
  agreement.start()
}

void start()
