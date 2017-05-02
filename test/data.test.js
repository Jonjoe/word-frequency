const assert = require('assert');
const expect = require('chai').expect;
const fs = require('fs');
const data = require('../data');

function checkFile(file) {
	return assert.equal(true, fs.existsSync(file));
};

describe('data sources', function() {
	it('the queries file should exist', function(){
		checkFile(data.queries);
	});
	it('the dataset should exist', function(){
		checkFile(data.records);
	});
});