


function merge(left: number[], right: number[]) {

  const result = []

  while(left.length && right.length) {
    if(left[0] <= right[0]) result.push(left.shift())
    else result.push(right.shift())
  }

  return [...result, ...left, ...right]
}


function sortItems(nums: number[]): number[] {

  if(nums.length <= 1) return nums

  const middle: number = Math.floor(nums.length / 2)
  const left: number[] = nums.slice(0, middle)
  const right: number[] = nums.slice(middle)

  return merge( sortItems(left), sortItems(right) )
}


console.log('result:', sortItems([7, 10, 19, 9, 1, 12, 3, 6, 17, 19, 1]))

















