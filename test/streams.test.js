const assert = require('assert');
const expect = require('chai').expect;
const streams = require('../app/streams.js');

describe('data streams', function() {
	it('The queries stream should return an array with stuff in it', function(){
		let queries = [];
		streams.queryStream.on('line', (line) => {
			queries.push(line);
		});
		streams.queryStream.on('close', (line) => {
			expect(queries.length).to.be.at.least(1);
		});
	});

	it('The records stream should return an array with stuff in it', function(){
		let records = [];
		streams.recordStream.on('line', (line) => {
			records.push(line);
		});
		streams.recordStream.on('close', (line) => {
			expect(records.length).to.be.at.least(1);
		});
	});
});