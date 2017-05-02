const R = require('ramda');
const createQuery = require('./models.js').createQuery;

function Store(projectRoot='/') {
	this.projectRoot = projectRoot;

	this.currentQuery = new Object;
	this.queries = new Array;
	this.records = new Array;
	
	this.rawOutput = new Array;
	this.output = new Array;
}

Store.prototype.addWord = function(word) {
	return global.store.currentQuery.results[`${word}`] = 1;
};

Store.prototype.updateCount = function(word) {
	return global.store.currentQuery.results[`${word}`]++;
};

module.exports = Store;