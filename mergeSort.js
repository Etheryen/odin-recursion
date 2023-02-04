function mergeSort(arr) {
  function merge(leftArr, rightArr) {
    const result = [];

    while (leftArr.length > 0 && rightArr.length > 0) {
      let toBePushed =
        leftArr[0] < rightArr[0] ? leftArr.shift() : rightArr.shift();
      result.push(toBePushed);
    }
    for (const num of leftArr) {
      result.push(num);
    }

    for (const num of rightArr) {
      result.push(num);
    }

    return result;
  }

  if (arr.length === 1) return arr;

  const middle = Math.floor(arr.length / 2);

  return merge(
    mergeSort(arr.slice(0, middle)),
    mergeSort(arr.slice(middle, arr.length))
  );
}

const arr1 = [4, 8, 6, 2, 1, 7, 5, 3];
const arr2 = [5, 7, 2, 1, 3, 6, 4];

console.log(mergeSort(arr1)); // [1, 2, 3, 4, 5, 6, 7, 8]
console.log(mergeSort(arr2)); // [1, 2, 3, 4, 5, 6, 7]
