// using iteration

function fibs(n) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    if (i < 2) {
      arr.push(i);
    } else if (i === 2) {
      arr.push(1);
    } else {
      arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    }
  }
  return arr;
}

// using a recursive function to calculate every next number

function fibsRecNum(n) {
  return n < 2 ? n : fibsRecNum(n - 1) + fibsRecNum(n - 2);
}

function fibsByRecNum(n) {
  const result = [];
  for (let i = 0; i < n; i++) {
    result.push(fibsRecNum(i));
  }

  return result;
}

// fully recursive using 1 arg

function fibsRec(num) {
  if (num < 1) return [];
  function inner(count, arr = [0, 1]) {
    if (arr.length > count) return arr.slice(0, count);
    arr.push(arr.at(-1) + arr.at(-2));
    return inner(count, arr);
  }

  return inner(num);
}

console.log(fibsRec(8));
