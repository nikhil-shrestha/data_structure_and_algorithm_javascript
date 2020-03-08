function insertionSort(arr) {
  for (var i = 1; i < arr.length; i++) {
    var currentVal = arr[i];
    console.log('currentVal', currentVal);

    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      console.log('inner loop>>>', j);
      console.log('before change:::', arr);
      arr[j + 1] = arr[j];
      console.log('after change:::', arr);
    }

    console.log('index::', j + 1);
    console.log('before:::', arr);
    arr[j + 1] = currentVal;
    console.log('final::', arr);
  }
  return arr;
}

insertionSort([2, 1, 9, 76, 4]);
