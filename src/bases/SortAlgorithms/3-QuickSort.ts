/*
  It divides the vector received by two around a pivot element,
  putting the smallest elements on the left and the largest on the right.
  Then it calls yourself recursively to sort each part of the vector.
  BigO Notation: O(n²)
*/


/*function manualQuickSort(items: number[]): number[] {

  if (items.length <=  1) return items;
  const pivotItem: number = items[0];

  let smallItems: number[] = [];
  let equalItems: number[] = [];
  let bigItems: number[] = [];

  for(let i = 0; i < items.length; i++) {
    if (items[i] < pivotItem) smallItems.push(items[i]);
  }
  for(let i = 0; i < items.length; i++) {
    if (items[i] === pivotItem) equalItems.push(items[i]);
  }
  for(let i = 0; i < items.length; i++) {
    if (items[i] > pivotItem) bigItems.push(items[i]);
  }

  return manualQuickSort(smallItems).concat(equalItems).concat(manualQuickSort(bigItems));
}

console.log('QuickSort result: '+ manualQuickSort([4, 2, 5, 3, 1]));*/




/*                                # rightPointer (Move to the beginning until...)
    | 4 | 2 | 8 | 7 | 1 | 5 | 3 | 6 |
      # leftPointer (Move to the end until it finds a value greater than itself)  */

function secondWayQuickSort(items: number[], startPosition?: number, endPosition?: number): number[] {

  const startPos: number = startPosition ? startPosition : 0;
  const endPos: number = endPosition ? endPosition : items.length -1;

  let pivot = items[startPos];
  let leftPnt = startPos;
  let rightPnt = endPos;

  while(leftPnt <= rightPnt) {

    while(items[leftPnt] < pivot) leftPnt++;
    while(items[rightPnt] > pivot) rightPnt--;

    if (leftPnt <= rightPnt) {
      [items[leftPnt], items[rightPnt]] = [items[rightPnt], items[leftPnt]]
      leftPnt++;
      rightPnt--;
    }
  }

  if (startPos < rightPnt) secondWayQuickSort(items, startPos, rightPnt);
  if (leftPnt < endPos) secondWayQuickSort(items, leftPnt, endPos);

  return items;
}

console.log('secondWayQuickSort => '+ secondWayQuickSort([4, 2, 8, 7, 1, 5, 3, 6]));



function quickSort(items: number[]): number[] {

  if (items.length <=  1) return items;
  const pivotItem: number = items[0];

  const smallerItems: number[] = items.filter(item => item < pivotItem);
  const equalItems: number[] = items.filter(item => item === pivotItem);
  const biggerItems: number[] = items.filter(item => item > pivotItem);

  return quickSort(smallerItems).concat(equalItems).concat(quickSort(biggerItems));
}

console.log('QuickSort result: '+ quickSort([4, 2, 5, 3, 1]));






