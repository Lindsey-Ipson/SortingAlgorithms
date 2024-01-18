function insertionSort (arr) { 
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    for (let j = i - 1; j >= 0 && arr[j] > current; j--) {
      arr[j + 1] = arr[j];
      arr[j] = current;
      } 
  }
  return arr;
}

module.exports = insertionSort;

// For testing insertion function:

// console.log(insertionSort([4, 20, 12, 10, 7, 9])); // [4, 7, 9, 10, 12, 20]
// console.log(insertionSort([0, -10, 7, 4])); // [-10, 0, 4, 7]
// console.log(insertionSort([1, 2, 3])); // [1, 2, 3]
// console.log(insertionSort([]));

// let nums = [
//     4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2,
//     453, 546, 75, 67, 4342, 32
// ];

// console.log(insertionSort(nums)); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34,
                     //  34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]