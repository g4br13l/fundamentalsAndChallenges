

let arr = [3, 5, 1, 2, 4]
const m: number = 1


function generateBinaryString(numArr: number[]): string {
  let binaryStr: string = ''
  numArr.forEach(el => binaryStr += '0')
  return binaryStr
}



function findLastGroupWithSize(numArr: number[], groupSize: number) {

  let binaryStr: string = generateBinaryString(numArr)
  let groupedItems: number = 1
  let lastStepOfGroupSize: number = 0

  for(let i = 0; i < numArr.length; i++) {
    binaryStr = binaryStr.substring(0, numArr[i]-1) + '1' + binaryStr.substring(numArr[i], binaryStr.length)
    console.log('binaryStr:', binaryStr)
    const isSubsequent = numArr[i-1] === (numArr[i] - 1)
    if(isSubsequent) groupedItems++
    else if(!isSubsequent && groupedItems < groupSize) groupedItems = 0
    if(groupedItems === groupSize) lastStepOfGroupSize = i+1
  }

  return lastStepOfGroupSize || -1
}


//console.log('generateBinaryString:', generateBinaryString([3, 5, 1, 2, 4]))
/*findLastGroupWithSize([3, 5, 1, 2, 4])*/
console.log('findLastGroupWithSize:', findLastGroupWithSize([1, 3, 4, 5, 2], 3))



