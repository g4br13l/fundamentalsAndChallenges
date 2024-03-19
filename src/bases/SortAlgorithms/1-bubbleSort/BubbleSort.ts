/*
  Bubble Sort compares the values of each two subsequent elements in the vector
  and switches them if the first is greater than the second.
  These comparisons are made until there isn't unsorted elements in the vector.
  Obs: The greater value up like a bubble until the last position.
  BigO Notation: O(n²)
 */


function bubbleSort(items: number[]) {

  let runCount: number = 0;

  for(let refIndex = items.length-1; refIndex > 0; refIndex--) {
    for(let currentIndex = 0; currentIndex < refIndex; currentIndex++) {
      if(items[currentIndex] > items[currentIndex+1]) {
        [items[currentIndex], items[currentIndex + 1]] = [items[currentIndex + 1], items[currentIndex]];
      }
      runCount++;
    }
  }
  console.log('bubbleSortBetter runs ' + runCount + ' times');
  return items;
}


function bubbleSortBetter(items: number[]) {

  let swap: boolean;
  let lastIndex = items.length-1;
  let runCount: number = 0;

  do {
    swap = false;
    for(let index = 0; index < lastIndex; index++) {
      if(items[index] > items[index+1]) {
        [items[index], items[index + 1]] = [items[index + 1], items[index]];
        swap = true;
      }
      runCount++;
    }
    lastIndex--;
  } while (swap);

  console.log(`bubbleSortBetter runs ${runCount} times`);
  return items;
}


console.log( 'returned: '+ bubbleSort([3, 2, 8, 5]) );
console.log( 'returned: '+ bubbleSortBetter([3, 2, 8, 5]) );