const fs = require('fs');
const stream = require('stream');
const readline = require('readline');
const data = require('../data');

// Construct the queries stream and export
const queryInStream = fs.createReadStream(data.queries);
const queryOutStream = new stream;
module.exports.queryStream = readline.createInterface(queryInStream, queryOutStream);

// Construct the records stream and export
const recordInStream = fs.createReadStream(data.records);
const recordOutStream = new stream;
module.exports.recordStream = readline.createInterface(recordInStream, recordOutStream);