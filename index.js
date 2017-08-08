function map(collection, callback) {
	const result = [];

	for (let i = 0; i < colleciton.length; i++){
		const element = collection[i];
		result.push(callback(element));
	}
	return result;
}

const numbers = [1, 2, 3];
const doubledNumbers = map(numbers, function (number) {
 return number * 2;
});
console.log(doubledNumbers); // prints [2, 4, 6]

function map(collection, callback) {
  const result = [];
 
  for (let i = 0; i < collection.length; i++) {
    const element = collection[i];
    result.push(callback(element, i, collection));
  }
 
  return result;
}