function mergeSort(arr1, arr2) {
  let results = [];
  let j = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    results.push(arr1[i]);
  }

  while (j < arr2.length) {
    results.push(arr2[j]);
  }

  return results;
}

mergeSort([1, 10, 50], [2, 14, 99, 100]);
