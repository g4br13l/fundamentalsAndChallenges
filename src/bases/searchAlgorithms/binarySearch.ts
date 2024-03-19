

export const binarySearch = (target: number, list: number[]): number => {

  let lowP = 0;
  let upP = list.length - 1;

  while(lowP < upP) {

    let midP = Math.floor( (lowP + upP) / 2 );
    let currentVal = list[midP];

    if (target === currentVal) return midP;

    else if (target < currentVal) {
      console.log('(target', target, ') < (currentVal', currentVal ,') -  upP:', midP-1);
      upP = midP-1;
    }
    else {
      console.log('(target', target, ') > (currentVal', currentVal ,') -  lowP:', midP+1);
      lowP = midP+1;
    }
  }

  return -1;
}



const binarySearchRecursive = (target: number, list: number[], low?: number, up?: number): number => {

  let lowP = low ? low : 0;
  let upP = up ? up : list.length-1;
  let midP = Math.floor( lowP + (upP - lowP) / 2 );
  let currentVal = list[midP];

  if (lowP < upP) {
    if (target === currentVal) return midP;

    else if (target < currentVal) {
      console.log('(target', target, ') < (currentVal', currentVal ,') -  lowP:', lowP ,' midP-1:', midP-1);
      return binarySearchRecursive(target, list, lowP, midP-1);
    }
    else if (target > currentVal) {
      console.log('(target', target, ') > (currentVal', currentVal ,') -  midP+1:', midP + 1 ,' upP:', upP);
      return binarySearchRecursive(target, list, midP + 1, upP);
    }
  }

  return -1;
}



console.log('binarySearch => '+ binarySearch(129, [2, 3, 5, 8, 13, 21, 32, 64, 128, 256]) );
console.log('binarySearchRecursive => '+ binarySearchRecursive(129, [2, 3, 5, 8, 13, 21, 32, 64, 128, 256]) );



