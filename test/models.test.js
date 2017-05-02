const assert = require('assert');
const expect = require('chai').expect;
const createQuery = require('../app/models.js').createQuery;

describe('models', function(){
	it('a Query should have a specific schema', function(){
		const query = ['cat', 'bat', 'hat', 'mat'];
		const newQuery = createQuery(query);

		expect(newQuery).to.have.deep.property('name');

		expect(newQuery).to.have.deep.property('results');
		expect(newQuery.results).to.eql({});

		expect(newQuery).to.have.deep.property('query');
		expect(newQuery.query).to.eql(query);
	});
});