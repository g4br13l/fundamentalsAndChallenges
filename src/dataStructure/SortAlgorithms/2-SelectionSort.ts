/*
  Iterates through all elements looking for the smallest of them.
  Put the smallest elements in the initial positions of the vector.
  These comparisons are made until there aren't unsorted element in the vector.
  BigO Notation: O(n²)
*/


function SelectionSort(items: number[]): number[] {

  let countRuns = 0;

  for(let baseIndex = 0; baseIndex < items.length-1; baseIndex++) {

    let indexOfSmaller: number = baseIndex;

    for(let compareIndex = baseIndex+1; compareIndex < items.length; compareIndex++) {

      if(items[compareIndex] < items[indexOfSmaller])
        indexOfSmaller = compareIndex;

      countRuns++;
    }

    if (baseIndex !== indexOfSmaller)
      [ items[baseIndex], items[indexOfSmaller] ] = [ items[indexOfSmaller], items[baseIndex] ];
  }

  console.log(`SelectionSort runs: ${countRuns} times`);
  return items;
}


console.log('result: '+ SelectionSort([3, 5, 2, 8]));
