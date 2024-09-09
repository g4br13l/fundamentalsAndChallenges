/*

  BigO Notation: O(n log n)0
*/



const splitArray = (items: number[]): {vectorA: number[], vectorB: number[]} => {
  const middle = Math.floor(items.length / 2);
  return {vectorA: items.slice(0, middle), vectorB: items.slice(middle, items.length)};
}


function mergeSortTwo(items: number[]): number[] {

  if (items.length <= 1) return items;

  let {vectorA, vectorB} = splitArray(items);

  console.log('vectorA: '+ vectorA);
  console.log('vectorB: '+ vectorB);

  vectorA = mergeSortTwo(vectorA);
  vectorB = mergeSortTwo(vectorB);

  let vectorRes = [];
  let indexA = 0;
  let indexB = 0;
  let indexRes = 0;

  while (indexA < vectorA.length && indexB < vectorB.length) {
    if (vectorA[indexA] <= vectorB[indexB]) {
      vectorRes[indexRes] = vectorA[indexA];
      indexA++;
    }
    else if (vectorA[indexA] > vectorB[indexB] ) {
      vectorRes[indexRes] = vectorB[indexB];
      indexB++;
    }
    indexRes++;
  }

  while (indexA < vectorA.length) {
    vectorRes[indexRes] = vectorA[indexA];
    indexA++; indexRes++;
  }
  while (indexB < vectorB.length) {
    vectorRes[indexRes] = vectorB[indexB];
    indexB++; indexRes++;
  }

  return vectorRes;
}

console.log('mergeSortTwo => '+ mergeSortTwo([7, 10, 19, 9, 1, 12, 3, 6, 17, 19, 1]) );

