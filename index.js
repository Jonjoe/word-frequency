const Store = require('./app/store.js');
global.store = new Store(__dirname);

require('./app/boot.js');