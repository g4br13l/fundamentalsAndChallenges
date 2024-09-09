/*
Find the smallest missing positive integer that is not in the array.
[6, 2, 1, 7] --> 3
[4, 2, 5, 9] --> 1
[4, 2, 1, 3] --> 5
*/
console.log('Hello World');

function smallestNum(nums) {

  let smallest = null
  console.log('numsOrd:', nums.sort())

  for(let i = 0; i < nums.length; i++) {
    if(i+1 !== nums[i]) {
      return i+1
    }
  }


  return smallest === null ? smallest+1 : smallest
}

console.log('result:', smallestNum([6, 2, 1, 7]))
console.log('result:', smallestNum([4, 2, 5, 9]))
console.log('result:', smallestNum([4, 2, 1, 3]))