const assert = require('assert');
const expect = require('chai').expect;
const checkArray = require('../app/functions.js').checkArray;
const spliceArray = require('../app/functions.js').spliceArray;
const constructRecord = require('../app/functions.js').constructRecord;

describe('pure functions', function() {
	describe('checkArray()', function() {
		it('should return true if the query lives inside the record.', function(){
			const query = ['cat', 'mat', 'bat'];
			const record = ['tree', 'cat', 'bagle', 'mat', 'mouse', 'bat'];

			assert.equal(true, checkArray(query, record));
		});

		it('should return false if the query does not live inside the record.', function(){
			const query = ['cat', 'mat', 'bat'];
			const record = ['tree', 'bagle', 'mat', 'mouse', 'bat'];

			assert.equal(false, checkArray(query, record));
		});
	});

	describe('stripArray()', function() {
		it('should return a records array without the items inside query.', function(){
			const query = ['cat', 'mat', 'bat'];
			const record = ['tree', 'cat', 'bagle', 'mat', 'mouse', 'bat'];
			const expectedResult = ['tree', 'bagle', 'mouse'];

			expect(spliceArray(query, record)).to.eql(expectedResult);
		});
	});
});