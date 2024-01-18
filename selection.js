function selectionSort (arr) {
  for (let i = 0; i < arr.length; i++) {
    let smallest = arr[i];
    for (let j = i + 1; j < arr.length; j ++) {
      if (arr[j] < smallest) {
        smallest = arr[j];
        arr[j] = arr[i];
        arr[i] = smallest;
      }
    }
  }
  return arr;
}

module.exports = selectionSort;

// Testing selectionSort function:

// console.log(selectionSort([4, 20, 12, 10, 7, 9])); // [4, 7, 9, 10, 12, 20]
// console.log(selectionSort([0, -10, 7, 4])); // [-10, 0, 4, 7]
// console.log(selectionSort([1, 2, 3])); // [1, 2, 3]
// console.log(selectionSort([]));

// let nums = [
//     4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2,
//     453, 546, 75, 67, 4342, 32
// ];

// console.log(selectionSort(nums)); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]