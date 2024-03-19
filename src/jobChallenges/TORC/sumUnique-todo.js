

// TODO: Removes all occurrences of repeated numbers in the array, and then sums up all the elements.


// original function
const sumUniqueOriginal = (nums) => {
  let sum = 0;
  nums.forEach(num => {
    if (nums.indexOf(num) === nums.lastIndexOf(num)) { sum += num; }
  });
  return sum;
}

// New Optimized function
const sumUniqueOptimized = (arrayNums) => {
  const numCount = {};
  let sum = 0;

  try {
    arrayNums.forEach( num => {
      if(typeof num !== 'number') throw 'type_not_accepted_exception';
      numCount[num] = (numCount[num] || 0) + 1;
    });
    arrayNums.forEach( num => {
      if(numCount[num] === 1) sum += num;
    });
    return sum;
  }
  catch (err) {
    console.log(err);
  }
};


console.log( sumUniqueOriginal([1, 4, 4, 2, 5, 5, 5]) );
console.log( sumUniqueOptimized([1, 4, 4, 2, 5, 5, 5, 'a']) );

/*console.log( sumUniqueOld([1, 2, 4, 4, 5, 8, 8]) );*/
