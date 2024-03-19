

const sumUnique = (nums) => {
  let sum = 0;
  nums.forEach(num => {
    if (nums.indexOf(num) === nums.lastIndexOf(num)) {
      sum += num;
    }
  });
  return sum;
}

console.log( sumUnique([1, 2, 3, 3, 4, 4, 4]) );
