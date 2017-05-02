const readline = require('readline');
const queryStream = require('./streams.js').queryStream;
const recordStream = require('./streams.js').recordStream;

// Load all the queries into store.
queryStream.on('line', (line) => {
	console.time('preboot');
	global.store.queries.push(line.split(','));
});

queryStream.on('close', () => {
	// Load query count into store.
	global.store.queryCount = global.store.queries.length;
	
	// Lad records into store.
	recordStream.on('line', (line) => {
		global.store.records.push(line.split(','));
	});

	// Now all the nessesary data is in store we can begin.
	recordStream.on('close', () => {
		require('./process.js');
		require('./writer.js');
		console.log('');
		console.log(`Done! Please visit ${global.store.projectRoot}/output.txt for the results sheet.`);
	});
});