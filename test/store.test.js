const Store = require('../app/store.js');
const expect = require('chai').expect;
const assert = require('assert');
const R = require('ramda');

const createQuery = require('../app/models.js').createQuery;

global.store = new Store('/this/is/some/path');

const exampleQuery = ['cat', 'bat'];
const exampleUniqueRecord = 'mouse';
const exampleNonUniqueRecord = 'bat';

function bootstrapStore() {
	global.store.currentQuery = new Object;

	global.store.currentQuery = createQuery(exampleQuery);
	return global.store.currentQuery.results = {
		'mat': 1,
		'bat': 1,
		'cat': 1,
	};
}

describe('store', function() {
	describe('init', function() {
		it('should initialise with some default values', function(){
			expect(global.store).to.have.deep.property('currentQuery');
			expect(global.store).to.have.deep.property('queries');
			expect(global.store).to.have.deep.property('rawOutput');
			expect(global.store).to.have.deep.property('output');
			expect(global.store).to.have.deep.property('records');
			expect(global.store).to.have.deep.property('projectRoot');
			expect(global.store.projectRoot).to.eql('/this/is/some/path');
		});
	});

	describe('.addWord()', function() {
		it('should add the word as a property of currentQuery.results in store', function(){
			bootstrapStore();

			global.store.addWord(exampleUniqueRecord);
			expect(global.store.currentQuery.results).to.have.deep.property(exampleUniqueRecord);
		});
	});

	describe('.updateCount()', function() {
		it('should inc count', function(){
			bootstrapStore();

			const storeRecordPreCount = global.store.currentQuery.results[`${exampleNonUniqueRecord}`];

			global.store.updateCount(exampleNonUniqueRecord);
			const storeRecordPostCount = global.store.currentQuery.results[`${exampleNonUniqueRecord}`];
			const increasedBy = storeRecordPostCount - storeRecordPreCount;

			expect(increasedBy).to.equal(1);
		});
	});
});