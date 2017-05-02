const R = require('ramda');

const checkArray = require('./functions.js').checkArray;
const spliceArray = require('./functions.js').spliceArray;

const createQuery = require('./models.js').createQuery;

let queryProgress = 0;
R.forEach(processQueries, global.store.queries);
function processQueries(query) {
	queryProgress++;
	global.store.currentQuery = createQuery(query);

	R.forEach(processRecords, global.store.records);
	
	global.store.rawOutput.push(global.store.currentQuery);
	global.store.output.push(global.store.currentQuery.results);
	
	return console.log(`${queryProgress} of ${global.store.queries.length} completed.`);
}		

function processRecords(record) {
	if(checkArray(global.store.currentQuery.query, record)) {
		const recordItems = spliceArray(global.store.currentQuery.query, record);

		R.forEach(addOrInc, recordItems);
	}
}

function addOrInc(word) {
	const result = global.store.currentQuery.results[`${word}`];

	if(result === undefined){
		return global.store.addWord(word);
	} else {
		return global.store.updateCount(word);
	}
}

module.exports.processQueries = processQueries;