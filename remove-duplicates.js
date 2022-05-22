// Question #2: Array Deduping
// Write an algorithm that removes duplicates from an array. Do not use a function like filter() to solve this. Once you have solved the problem, demonstrate how it can be solved with filter(). Solve the problem with and without recursion.

// Example
// Input: [7, 9, "hi", 12, "hi" 7, 53]

// Output: [7, 9, "hi", 12, 53]

// iterative function

const removeDuplicatesArray = (array) => {
  let dedupedArray = [];
  for (i = 0; i < array.length; i++) {
    if (!dedupedArray.includes(array[i])) {
      dedupedArray.push(array[i]);
    }
  }
  return dedupedArray;
}

// test
console.log(removeDuplicatesArray([7, 9, "hi", 12, "hi", 7, 53]));

// expected [9, 12, "hi", 7, 53]
// received [9, 12, "hi", 7, 53]


// recursive function
const dedupeArray = (array, index, resultArray) => {
	if (!resultArray) {
		resultArray = [];
		index = 0;
	}
	if (index < array.length) {
		if (!array.slice(index + 1).includes(array[index])) {
			resultArray.push(array[index]);
			index ++;
			return dedupeArray(array, index, resultArray); 
		} 
		index ++;
		return dedupeArray(array, index, resultArray);
	} else {
		return resultArray;
}
}

// test
console.log(dedupeArray([7, 9, "hi", 12, "hi", 7, 53]));

// expected [9, 12, "hi", 7, 53]
// received [9, 12, "hi", 7, 53]
