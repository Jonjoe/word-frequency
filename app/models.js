/*
| A set of create functions to ensure standards in object creation. 
*/

// Standard model for a Query.
function createQuery(query) {
	const counter = global.store.output.length + 1;

	return {
		name: `query${counter}`,
		query: query,
		results: new Object
	};
}

module.exports.createQuery = createQuery;