import { Dataset, PlaywrightCrawler, log, purgeDefaultStorages } from 'crawlee';
import { router } from './routes.mjs';

// Show debug logs
log.setLevel(log.LEVELS.DEBUG);
log.debug('Setting up crawler.');


// This command deletes the 'storage' folder for you before starting
await purgeDefaultStorages();


const crawler = new PlaywrightCrawler({
    requestHandler: router,
    // maxRequestsPerCrawl: 20,

});

log.info('Starting crawl...');

await crawler.run(['https://warehouse-theme-metal.myshopify.com/collections']);


const dataset = await Dataset.open();
await dataset.exportToCSV('results.csv');

log.info('Crawl finished.');


