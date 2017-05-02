const fs = require('fs');
const R = require('ramda');
const outputFile = `${global.store.projectRoot}/output.txt`;

const title = 'WORD FREQUENCY RESULTS SHEET' + breakLine();

let stats = heading('Stats');
stats = `${stats} - Records processed: ${global.store.records.length}${breakLine()}`;
stats = `${stats} - Queries processed: ${global.store.queries.length}${breakLine()}`;

let queries = heading('Query Results');
R.forEach(writeQueries, global.store.rawOutput);

let raw = heading('Raw Query Results');
writeRaw();

const body = `${title}${breakLine()}${stats}${breakLine()}${queries}${breakLine()}${raw}${breakLine()}`;
fs.writeFile(outputFile, body, function(err) {
	if(err){
		econsole.log(err);
	} else {
		console.log('The file was saved!');
	}
});

// Function List
function heading(header) {
	return `|| ${header}${breakLine()}`;
}

function breakLine() {
	return '\n';
}

function underLine() {
	return '-------------------------';
}

function writeQueries(query) {
	queries = queries + `${query.query}${breakLine()}`;
	queries = queries + `${underLine()}${breakLine()}`;

	Object.keys(query.results).forEach(function(key,index) {
		queries = queries + `${key} - ${query.results[key]}${breakLine()}`;
	});
	
	return queries = queries + breakLine();
}

function writeRaw() {
	const rawResults = JSON.stringify(global.store.output, null, '\t');
	return raw = raw + rawResults;
}