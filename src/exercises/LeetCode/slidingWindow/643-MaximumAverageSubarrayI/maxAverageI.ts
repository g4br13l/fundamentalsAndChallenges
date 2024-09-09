


function findMaxAverage(nums: number[], k: number): number {

  let maxAverage = null
  let curAverage = 0

  for(let i = 0; i < nums.length; i++) {
    curAverage += (nums[i] / k)
    if(i >= k-1) {
      maxAverage = (curAverage > maxAverage || maxAverage === null) ? curAverage : maxAverage
      curAverage -= (nums[i-(k-1)]) / k
    }
  }
  return maxAverage
}


console.log('findMaxAverage(): ', findMaxAverage([10, 20, 30, 40, 50], 3))
console.log('findMaxAverage(): ', findMaxAverage([1, 12, -5, -6, 50, 3], 4))
console.log('findMaxAverage(): ', findMaxAverage([5], 1))


