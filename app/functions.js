/*
| A set of encapsulated pure functions used accross the application. 
*/

const R = require('ramda');

// Check to see if query exists inside a record
// Returns a conditional BOOLEAN.
function checkArray(query, record) {
	const array = R.union(query, record);

	if(array.length == record.length) {
		return true;
	} else {
		return false;		
	}
}

// Cut out query items from the records array.
// Returns ARRAY.
function spliceArray(query, record) {
	return R.difference(record, query);
}

module.exports.checkArray = checkArray;
module.exports.spliceArray = spliceArray;