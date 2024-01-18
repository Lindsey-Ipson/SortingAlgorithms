function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j+1]) {
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
  }
  }
  return arr;
}

module.exports = bubbleSort;

// For testing bubbleSort function:

// console.log(bubbleSort([4, 20, 12, 10, 7, 9])); // [4, 7, 9, 10, 12, 20]
// console.log(bubbleSort([0, -10, 7, 4])); // [-10, 0, 4, 7]
// console.log(bubbleSort([1, 2, 3])); // [1, 2, 3]
// console.log(bubbleSort([]));

// let nums = [
//     4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34,
//     23, 2, 453, 546, 75, 67, 4342, 32
// ];

// console.log(bubbleSort(nums)); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67,
//                   // 75, 232, 232, 453, 546, 4342]