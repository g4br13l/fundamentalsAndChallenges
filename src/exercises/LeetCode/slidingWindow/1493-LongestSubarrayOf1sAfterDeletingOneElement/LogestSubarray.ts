
function longestSubarray(nums: number[]): number {

  let longestSub: number = 0
  let currentSub: number = 0
  let sizeAfterZero = -1

  for(let i = 0; i < nums.length; i++) {

    if(sizeAfterZero !== -1) sizeAfterZero++
    if(nums[i] === 1) currentSub++
    else if(sizeAfterZero === -1) {
      currentSub++
      sizeAfterZero = 0
    }
    else if(sizeAfterZero !== -1) {
      currentSub = sizeAfterZero
      sizeAfterZero = 0
    }
    longestSub = currentSub > longestSub ? currentSub : longestSub
  }
  return longestSub -1
}

/*console.log('expect 3 - result:', longestSubarray([1,1,0,1]))
console.log('expect 5 - result:', longestSubarray([0,1,1,1,0,1,1,0,1]))
console.log('expect 2 - result:', longestSubarray([1,1,1]))*/



function longestSubarrayTwo(nums: number[]): number {

  let startWindow: number = 0
  let lastChangedPos: number = -1
  let longestSize: number = 0

  for(let endWindow = 0; endWindow < nums.length; endWindow++) {

    if(nums[endWindow] === 0) {
      if(lastChangedPos !== -1) { startWindow = lastChangedPos + 1; lastChangedPos = endWindow; }
      else lastChangedPos = endWindow;
    }
    /*if(nums[endWindow] === 0 && lastChangedPos !== -1) {
      startWindow = lastChangedPos + 1
      lastChangedPos = endWindow
    }
    else if(nums[endWindow] === 0 && lastChangedPos === -1) {
      lastChangedPos = endWindow
    }*/
    const currentSize = (endWindow - startWindow)
    longestSize = currentSize > longestSize ? currentSize : longestSize
  }

  return longestSize
}

console.log('expect 3 - result:', longestSubarrayTwo([1,1,0,1]))
console.log('expect 5 - result:', longestSubarrayTwo([0,1,1,1,0,1,1,0,1]))
console.log('expect 2 - result:', longestSubarrayTwo([1,1,1]))

