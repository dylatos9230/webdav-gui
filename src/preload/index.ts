import { domReady } from './utils'

const isDev = process.env.NODE_ENV === 'development';

(async () => {
  await domReady()
})()
