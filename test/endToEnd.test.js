require('./functions.test.js');

const assert = require('assert');
const expect = require('chai').expect;
const R = require('ramda');

const Store = require('../app/store.js');
global.store = new Store(__dirname);

const processQueries = require('../app/process.js').processQueries;
const addOrInc = require('../app/process.js').addOrInc;
const processRecords = require('../app/process.js').processRecords;

describe('End to end', function() {
	it('should return array of objects with specific schema', function(){
		global.store.queries = [
			['blue','yellow'],
			['black','green']
		];

		global.store.records = [
			['red','yellow','green','black'],
			['red','green','blue','black'],
			['yellow','green','blue'],
			['yellow','blue','black']
		];

		const expectedOutput = [
			{'black': 1, 'green': 1},
			{'blue': 1, 'red': 2, 'yellow': 1}
		];

		R.forEach(processQueries, global.store.queries);
		
		expect(global.store.output).to.deep.equal(expectedOutput);
	});
});

delete Store;
delete global.store;

delete processQueries;
delete addOrInc;
delete processRecords;