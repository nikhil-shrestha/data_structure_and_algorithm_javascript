function countUniqueValue(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let i = 0;

  for (let j = 1; j < arr.length; j++) {
    if (arr[j] !== arr[i]) {
      // increment i
      i++;
      // assign the value in index of j to i
      arr[i] = arr[j];
      console.log({ arr });
    }

    console.log(i, j);
  }

  console.log(i);

  return i + 1;
}

countUniqueValue([1, 1, 1, 2, 3, 3, 4, 4, 5, 6]);
