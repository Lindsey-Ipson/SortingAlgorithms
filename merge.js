function merge (arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      result.push(arr1[i])
      i ++;
    }
    else if (arr2[j] < arr1[i]) {
      result.push(arr2[j]);
      j ++;
    }
  }

  if (i <= arr1.length - 1) {
    result.push(...arr1.slice(i))
  }
  if (j <= arr2.length) {
    result.push(...arr2.slice(j))
  }

  return result;
}

// Concise solution (arrived at after mergeSortLongerVersion), dealing with one array at a time (uses only merge as a helper function):
function mergeSort (arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const middlePoint = Math.ceil(arr.length / 2);
  const left = mergeSort(arr.slice(0, middlePoint));
  const right = mergeSort(arr.slice(middlePoint));

  return merge(left, right);
}

// Longer version (later refactored to mergeSort), dealing with two arrays each time (includes both merge and mergeIntermediary helper functions):
function mergeIntermediary (arr1, arr2) {
  if (arr1.length < 2 && arr2.length < 2) {
    return merge(arr1, arr2);
  }

  const arr1MiddlePoint = Math.ceil(arr1.length / 2);
  const arr1Left = arr1.slice(0, arr1MiddlePoint);
  const arr1Right = arr1.slice(arr1MiddlePoint);

  const mergedArr1 = mergeIntermediary(arr1Left, arr1Right);

  const arr2MiddlePoint = Math.ceil(arr2.length / 2);
  const arr2Left = arr2.slice(0, arr2MiddlePoint);
  const arr2Right = arr2.slice(arr2MiddlePoint);

  const mergedArr2 = mergeIntermediary(arr2Left, arr2Right);

  return merge(mergedArr1, mergedArr2);
}

function mergeSortLongerVersion (arr) {
  const arrMiddlePoint = Math.ceil(arr.length / 2);
  const arrLeft = arr.slice(0, arrMiddlePoint);
  const arrRight = arr.slice(arrMiddlePoint);

  return mergeIntermediary(arrLeft, arrRight);

}

module.exports = { merge, mergeSort};


// For testing merge function:
// let arr1 = [1,3,4,5];
// let arr2 = [2,4,6,8];
// console.log(merge(arr1,arr2)) // [1,2,3,4,4,5,6,8]

// let arr3 = [-2,-1,0,4,5,6];
// let arr4 = [-3,-2,-1,2,3,5,7,8];
// console.log(merge(arr3,arr4)); // [-3,-2,-2,-1,-1,0,2,3,4,5,5,6,7,8]

// let arr5 = [3,4,5]
// let arr6 = [1,2]
// console.log(merge(arr5,arr6)) // [1,2,3,4,5]


// // For testing mergeSort function:
// console.log(mergeSort([4, 20, 12, 10, 7, 9])); // [4, 7, 9, 10, 12, 20]
// console.log(mergeSort([0, -10, 7, 4])); // [-10, 0, 4, 7]
// console.log(mergeSort([1, 2, 3])); // [1, 2, 3]
// console.log(mergeSort([])); // []

// let nums = [
//     4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2,
//     453, 546, 75, 67, 4342, 32
// ];
// mergeSort(nums); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35,
//                  //  43, 67, 75, 232, 232, 453, 546, 4342]
