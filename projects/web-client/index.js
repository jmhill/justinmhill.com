const next = require('next');
const api = require('@jmhill/justinmhill-api');

const dev = process.env.NODE_ENV !== 'production';

const clientApp = next({ dev });
const handle = clientApp.getRequestHandler();
const server = api.init(handle);

clientApp.prepare().then(() => {
  server.start();
});
